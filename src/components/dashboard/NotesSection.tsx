import { useState, useEffect } from 'react';
import {
  FileText, File, FileSpreadsheet, Image, Video,
  FolderOpen, Folder, ChevronDown, ChevronUp, Download,
  AlertCircle, RefreshCw, BookMarked
} from 'lucide-react';
import { supabase } from '../../lib/supabase';


type NoteFile = {
  type: 'file'; id: string; name: string; title: string;
  fileType: string; view_url: string; size: number;
};
type NoteFolder = {
  type: 'folder'; id: string; name: string;
  children: (NoteFile | NoteFolder)[];
};
type NoteItem = NoteFile | NoteFolder;

const FILE_STYLES: Record<string, { icon: any; color: string; bg: string; label: string }> = {
  pdf:        { icon: FileText,        color: 'text-red-400',    bg: 'bg-red-400/10',    label: 'PDF'   },
  word:       { icon: FileText,        color: 'text-blue-400',   bg: 'bg-blue-400/10',   label: 'Word'  },
  excel:      { icon: FileSpreadsheet, color: 'text-green-400',  bg: 'bg-green-400/10',  label: 'Excel' },
  powerpoint: { icon: FileText,        color: 'text-orange-400', bg: 'bg-orange-400/10', label: 'PPT'   },
  image:      { icon: Image,           color: 'text-purple-400', bg: 'bg-purple-400/10', label: 'Image' },
  video:      { icon: Video,           color: 'text-yellow-400', bg: 'bg-yellow-400/10', label: 'Video' },
  text:       { icon: FileText,        color: 'text-gray-400',   bg: 'bg-gray-400/10',   label: 'Text'  },
  file:       { icon: File,            color: 'text-gray-400',   bg: 'bg-gray-700',      label: 'File'  },
};

function NoteFileRow({ file }: { file: NoteFile }) {
  const cfg = FILE_STYLES[file.fileType] ?? FILE_STYLES.file;
  const Icon = cfg.icon;

  const handleDownload = () => {
    // Zoho WorkDrive external share download URL format
    const downloadUrl = `https://workdrive.zohoexternal.in/download/${file.id}`;
    const anchor = document.createElement('a');
    anchor.href     = downloadUrl;
    anchor.download = file.name;
    anchor.target   = '_blank';
    anchor.rel      = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className="flex items-center gap-4 px-6 py-3.5 hover:bg-gray-800/40 transition-colors group">
      {/* File type icon */}
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${cfg.bg}`}>
        <Icon size={18} className={cfg.color} />
      </div>

      {/* Title */}
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-medium truncate">{file.title}</p>
      </div>

      {/* File type badge */}
      <span className={`hidden sm:block text-xs px-2 py-0.5 rounded-full bg-gray-800 border border-gray-700 ${cfg.color} font-medium flex-shrink-0`}>
        {cfg.label}
      </span>

      {/* Download button */}
      <button
        onClick={handleDownload}
        title={`Download ${file.name}`}
        className="flex-shrink-0 flex items-center gap-1.5 bg-gray-800 hover:bg-yellow-400 text-gray-300 hover:text-black px-3 py-1.5 rounded-lg text-xs font-medium transition-all border border-gray-700 hover:border-yellow-400"
      >
        <Download size={13} />
        <span className="hidden sm:block">Download</span>
      </button>
    </div>
  );
}

function countFiles(items: NoteItem[]): number {
  return items.reduce((sum, item) =>
    item.type === 'file' ? sum + 1 : sum + countFiles(item.children), 0
  );
}

function NoteFolderBlock({ folder, depth = 0 }: { folder: NoteFolder; depth?: number }) {
  const [expanded, setExpanded] = useState(false);
  const fileCount = countFiles(folder.children);

  return (
    <div className={depth > 0 ? 'border-l-2 border-gray-800 ml-4' : ''}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-800/40 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          {expanded
            ? <FolderOpen size={18} className="text-yellow-400 flex-shrink-0" />
            : <Folder    size={18} className="text-gray-500 flex-shrink-0" />
          }
          <div>
            <p className="text-white text-sm font-medium">{folder.name}</p>
            <p className="text-gray-500 text-xs mt-0.5">{fileCount} file{fileCount !== 1 ? 's' : ''}</p>
          </div>
        </div>
        {expanded ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
      </button>

      {expanded && (
        <div className="divide-y divide-gray-800/60">
          {folder.children.map(item =>
            item.type === 'folder'
              ? <NoteFolderBlock key={item.id} folder={item} depth={depth + 1} />
              : <NoteFileRow     key={item.id} file={item} />
          )}
        </div>
      )}
    </div>
  );
}

export default function NotesSection() {
  const [notes, setNotes]     = useState<NoteItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  const fetchNotes = async () => {
    setLoading(true); setError(null);
    try {
      const { data, error } = await supabase.functions.invoke('zoho-notes');
      if (error) throw new Error(error.message);
      if (data?.error) throw new Error(data.error);
      setNotes(data.notes ?? []);
    } catch (err: any) {
      setError(err.message ?? 'Failed to load notes.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchNotes(); }, []);

  if (loading) return (
    <div className="space-y-3 max-w-7xl mx-auto px-4 sm:px-6">
      {[1,2,3,4].map(i => (
        <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5 animate-pulse">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gray-700 rounded-lg" />
            <div className="flex-1"><div className="h-3 bg-gray-700 rounded w-1/3" /></div>
          </div>
        </div>
      ))}
      <p className="text-center text-gray-500 text-sm animate-pulse mt-2">Fetching notes from Zoho WorkDrive…</p>
    </div>
  );

  if (error) return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-red-900/20 border border-red-700 rounded-xl p-8 text-center">
        <AlertCircle size={36} className="text-red-400 mx-auto mb-3" />
        <p className="text-red-300 font-medium mb-1">Could not load notes</p>
        <p className="text-red-500 text-sm mb-6">{error}</p>
        <button onClick={fetchNotes} className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white px-5 py-2 rounded-xl text-sm font-medium transition-colors">
          <RefreshCw size={15} /> Try Again
        </button>
      </div>
    </div>
  );

  if (notes.length === 0) return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-10 text-center">
        <BookMarked size={40} className="text-gray-600 mx-auto mb-3" />
        <p className="text-gray-400">No notes found.</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
      <div className="flex justify-end mb-4">
        <button onClick={fetchNotes} className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-yellow-400 rounded-xl text-sm font-medium transition-colors border border-gray-700">
          <RefreshCw size={15} /> Refresh
        </button>
      </div>
      <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden divide-y divide-gray-800">
        {notes.map(item =>
          item.type === 'folder'
            ? <NoteFolderBlock key={item.id} folder={item} />
            : <NoteFileRow     key={item.id} file={item}   />
        )}
      </div>
    </div>
  );
}
