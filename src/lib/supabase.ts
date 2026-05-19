import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qsauieduxptowsqpjlkb.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_u2zy44gHdAwjcWz00WksNQ_ZdkMpDIm';

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
