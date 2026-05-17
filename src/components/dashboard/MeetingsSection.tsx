import { useState, useEffect } from 'react';
import { Calendar, ExternalLink, Clock, Video } from 'lucide-react';
import { supabase, Meeting } from '../../lib/supabase';

export default function MeetingsSection() {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMeetings();
  }, []);

  const fetchMeetings = async () => {
    const { data, error } = await supabase
      .from('meetings')
      .select('*')
      .eq('is_active', true)
      .order('scheduled_at', { ascending: true });

    if (!error && data) setMeetings(data);
    setLoading(false);
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const formatTime = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  const isUpcoming = (iso: string) => new Date(iso) > new Date();
  const isToday = (iso: string) => {
    const d = new Date(iso);
    const today = new Date();
    return d.toDateString() === today.toDateString();
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2].map(i => (
          <div key={i} className="bg-gray-800 rounded-xl p-6 animate-pulse">
            <div className="h-4 bg-gray-700 rounded w-1/3 mb-3" />
            <div className="h-3 bg-gray-700 rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (meetings.length === 0) {
    return (
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-10 text-center">
        <Video size={40} className="text-gray-600 mx-auto mb-3" />
        <p className="text-gray-400">No upcoming meetings scheduled.</p>
        <p className="text-gray-600 text-sm mt-1">Check back soon or contact your trainer.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {meetings.map((meeting) => (
        <div
          key={meeting.id}
          className={`bg-gray-900 border rounded-xl p-6 transition-all duration-200 ${
            isToday(meeting.scheduled_at)
              ? 'border-yellow-400 shadow-lg shadow-yellow-400/10'
              : 'border-gray-700 hover:border-gray-600'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                {isToday(meeting.scheduled_at) && (
                  <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                    TODAY
                  </span>
                )}
                {!isUpcoming(meeting.scheduled_at) && (
                  <span className="bg-gray-700 text-gray-400 text-xs px-2 py-0.5 rounded-full">
                    COMPLETED
                  </span>
                )}
              </div>
              <h3 className="text-white font-semibold text-lg">{meeting.title}</h3>
              {meeting.description && (
                <p className="text-gray-400 text-sm mt-1">{meeting.description}</p>
              )}
              <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-yellow-400" />
                  {formatDate(meeting.scheduled_at)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-yellow-400" />
                  {formatTime(meeting.scheduled_at)}
                </span>
              </div>
            </div>

            {isUpcoming(meeting.scheduled_at) && (
              <a
                href={meeting.join_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-5 py-2.5 rounded-xl hover:bg-yellow-300 transition-colors whitespace-nowrap"
              >
                Join Meeting
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
