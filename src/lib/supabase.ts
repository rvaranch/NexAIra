import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase project URL and anon key
// from https://app.supabase.com → Project Settings → API
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type UserProfile = {
  id: string;
  email: string;
  full_name: string;
  enrolled_courses: string[];
  created_at: string;
};

export type Meeting = {
  id: string;
  title: string;
  description: string;
  join_url: string;
  scheduled_at: string;
  course_id: string;
  is_active: boolean;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string;
  recordings: Recording[];
};

export type Recording = {
  id: string;
  course_id: string;
  title: string;
  description: string;
  zoho_drive_url: string;
  duration_minutes: number;
  recorded_at: string;
  order_index: number;
};
