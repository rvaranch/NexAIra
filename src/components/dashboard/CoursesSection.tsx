import { useState, useEffect } from 'react';
import {
  ChevronDown, ChevronUp, BookOpen, FolderOpen, Folder,
  AlertCircle, RefreshCw, PlayCircle, Calendar, X, ChevronLeft, ChevronRight
} from 'lucide-react';
import { supabase } from '../../lib/supabase';

type Recording = {
  id: string; title: string; order_index: number;
  zoho_drive_url: string; recorded_at: string | null; duration_minutes: number;
};
type SubFolder = { id: string; title: string; order: number; recordings: Recording[]; };
type Course    = { id: string; title: string; description: string; recordings: Recording[]; subfolders: SubFolder[]; order: number; };

export default function CoursesSection() {
  const [courses, setCourses]               = useState<Course[]>([]);
  const [loading, setLoading]               = useState(true);
  const [error, setError]                   = useState<string | null>(null);
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [expandedFolder, setExpandedFolder] = useState<string | null>(null);
  const [activeVideo, setActiveVideo]       = useState<Recording | null>(null);
  const [allVideos, setAllVideos]           = useState<Recording[]>([]);

  const fetchCourses = async () => {
    setLoading(true); setError(null);
    try {
      const { data, error } = await supabase.functions.invoke('zoho-recordings');
      if (error) throw new Error(error.message);
      if (data?.error) throw new Error(data.error);
      setCourses(data.courses ?? []);
      // No course expanded by default

      // Build flat list of all videos for prev/next navigation
      const flat: Recording[] = [];
      for (const course of data.courses ?? []) {
        if (course.subfolders?.length > 0) {
          for (const sf of course.subfolders) flat.push(...sf.recordings);
        } else {
          flat.push(...course.recordings);
        }
      }
      setAllVideos(flat);
    } catch (err: any) {
      setError(err.message ?? 'Failed to load recordings.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCourses(); }, []);

  // Close fullscreen on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveVideo(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Prevent body scroll when fullscreen is open
  useEffect(() => {
    document.body.style.overflow = activeVideo ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeVideo]);

  const openVideo = (rec: Recording) => setActiveVideo(rec);

  const goNext = () => {
    if (!activeVideo) return;
    const idx = allVideos.findIndex(v => v.id === activeVideo.id);
    if (idx < allVideos.length - 1) setActiveVideo(allVideos[idx + 1]);
  };

  const goPrev = () => {
    if (!activeVideo) return;
    const idx = allVideos.findIndex(v => v.id === activeVideo.id);
    if (idx > 0) setActiveVideo(allVideos[idx - 1]);
  };

  const formatDate = (iso: string | null) =>
    iso ? new Date(iso).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' }) : null;

  const totalCount = (c: Course) =>
    c.recordings.length + c.subfolders.reduce((s, sf) => s + sf.recordings.length, 0);

  const currentIdx = activeVideo ? allVideos.findIndex(v => v.id === activeVideo.id) : -1;

  // ── Loading ──────────────────────────────────────────────────────────────
  if (loading) return (
    <div className="space-y-4 max-w-7xl mx-auto px-4 sm:px-6">
      {[1,2,3].map(i => (
        <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-6 animate-pulse">
          <div className="flex items-center gap-4">
            <div className="bg-gray-700 w-12 h-12 rounded-xl" />
            <div className="flex-1"><div className="h-4 bg-gray-700 rounded w-1/3 mb-2" /><div className="h-3 bg-gray-700 rounded w-1/2" /></div>
          </div>
        </div>
      ))}
      <p className="text-center text-gray-500 text-sm animate-pulse mt-2">Fetching from Zoho WorkDrive…</p>
    </div>
  );

  if (error) return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="bg-red-900/20 border border-red-700 rounded-xl p-8 text-center">
        <AlertCircle size={36} className="text-red-400 mx-auto mb-3" />
        <p className="text-red-300 font-medium mb-1">Could not load recordings</p>
        <p className="text-red-500 text-sm mb-6">{error}</p>
        <button onClick={fetchCourses} className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white px-5 py-2 rounded-xl text-sm font-medium transition-colors">
          <RefreshCw size={15} /> Try Again
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* ── Fullscreen video modal ── */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-black/90 border-b border-gray-800 flex-shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              {/* Prev */}
              <button
                onClick={goPrev}
                disabled={currentIdx <= 0}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="Previous video"
              >
                <ChevronLeft size={20} />
              </button>
              {/* Next */}
              <button
                onClick={goNext}
                disabled={currentIdx >= allVideos.length - 1}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="Next video"
              >
                <ChevronRight size={20} />
              </button>
              <div className="min-w-0">
                <p className="text-white font-medium text-sm truncate">{activeVideo.title}</p>
                {activeVideo.recorded_at && (
                  <p className="text-gray-500 text-xs flex items-center gap-1">
                    <Calendar size={10} /> {formatDate(activeVideo.recorded_at)}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-gray-600 text-xs hidden sm:block">
                {currentIdx + 1} / {allVideos.length}
              </span>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                title="Close (Esc)"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Video iframe — fills remaining screen */}
          <div className="flex-1 relative overflow-hidden">
            <iframe
              key={activeVideo.id}
              src={`https://workdrive.zoho.in/file/${activeVideo.id}`}
              className="absolute border-0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title={activeVideo.title}
              style={{
                top:    '-105px',
                left:   '-8px',
                width:  'calc(100% + 60px)',
                height: 'calc(100% + 115px)',
              }}
            />
          </div>
        </div>
      )}

      {/* ── Course list ── */}
      <div className="space-y-4 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-end mb-4">
          <button onClick={fetchCourses} className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-yellow-400 rounded-xl text-sm font-medium transition-colors border border-gray-700">
            <RefreshCw size={15} /> Refresh
          </button>
        </div>

        {courses.map(course => {
          const isExp  = expandedCourse === course.id;
          const count  = totalCount(course);
          const hasSub = course.subfolders.length > 0;
          return (
            <div key={course.id} className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedCourse(isExp ? null : course.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen size={22} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{course.title}</h3>
                    <p className="text-gray-400 text-sm mt-0.5">{course.description}</p>
                    <span className="text-yellow-400 text-xs mt-1 block">
                      {count} recording{count !== 1 ? 's' : ''}{hasSub && ` · ${course.subfolders.length} topics`}
                    </span>
                  </div>
                </div>
                <div className="text-gray-400 ml-4 flex-shrink-0">
                  {isExp ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>

              {isExp && (
                <div className="border-t border-gray-700">
                  {hasSub ? (
                    <div className="divide-y divide-gray-800">
                      {course.subfolders.map(sf => {
                        const sfExp = expandedFolder === sf.id;
                        return (
                          <div key={sf.id}>
                            <button
                              onClick={() => setExpandedFolder(sfExp ? null : sf.id)}
                              className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-800/40 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                {sfExp ? <FolderOpen size={18} className="text-yellow-400 flex-shrink-0" /> : <Folder size={18} className="text-gray-500 flex-shrink-0" />}
                                <div className="text-left">
                                  <p className="text-white text-sm font-medium">{sf.title}</p>
                                  <p className="text-gray-500 text-xs mt-0.5">{sf.recordings.length} recording{sf.recordings.length !== 1 ? 's' : ''}</p>
                                </div>
                              </div>
                              {sfExp ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
                            </button>
                            {sfExp && (
                              <div className="bg-black/20 divide-y divide-gray-800/60">
                                {sf.recordings.map((rec, idx) => (
                                  <VideoRow key={rec.id} rec={rec} idx={idx} formatDate={formatDate} indent onClick={() => openVideo(rec)} />
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-800">
                      {course.recordings.length === 0
                        ? <p className="px-6 py-8 text-center text-gray-500 text-sm">No recordings yet.</p>
                        : course.recordings.map((rec, idx) => (
                            <VideoRow key={rec.id} rec={rec} idx={idx} formatDate={formatDate} onClick={() => openVideo(rec)} />
                          ))
                      }
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

function VideoRow({ rec, idx, formatDate, indent = false, onClick }: {
  rec: Recording; idx: number; formatDate: (s: string | null) => string | null;
  indent?: boolean; onClick: () => void;
}) {
  return (
    <div onClick={onClick}
      className={`flex items-center gap-4 py-4 hover:bg-gray-800/30 transition-colors group cursor-pointer ${indent ? 'px-10' : 'px-6'}`}
    >
      <span className="text-gray-600 text-sm font-mono w-6 flex-shrink-0 text-right">{rec.order_index || idx + 1}</span>
      <div className="w-9 h-9 rounded-full bg-gray-800 group-hover:bg-yellow-400 flex items-center justify-center flex-shrink-0 transition-colors">
        <PlayCircle size={18} className="text-gray-500 group-hover:text-black transition-colors" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-medium truncate group-hover:text-yellow-400 transition-colors">{rec.title}</p>
        {rec.recorded_at && (
          <span className="flex items-center gap-1 text-gray-500 text-xs mt-1">
            <Calendar size={11} />{formatDate(rec.recorded_at)}
          </span>
        )}
      </div>
      <span className="flex-shrink-0 flex items-center gap-1.5 bg-yellow-400/10 group-hover:bg-yellow-400 text-yellow-400 group-hover:text-black px-3 py-1.5 rounded-lg text-xs font-medium transition-all">
        ▶ Play
      </span>
    </div>
  );
}
