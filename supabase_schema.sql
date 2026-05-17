-- ============================================================
-- NexAIra Learner Portal — Supabase Database Schema
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- 1. COURSES TABLE
create table if not exists courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  thumbnail_url text,
  created_at timestamptz default now()
);

-- 2. RECORDINGS TABLE (linked to courses)
create table if not exists recordings (
  id uuid primary key default gen_random_uuid(),
  course_id uuid references courses(id) on delete cascade,
  title text not null,
  description text,
  zoho_drive_url text not null,  -- paste the Zoho WorkDrive share link here
  duration_minutes int default 0,
  recorded_at date,
  order_index int default 0,     -- controls the display order within a course
  created_at timestamptz default now()
);

-- 3. MEETINGS TABLE
create table if not exists meetings (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  join_url text not null,        -- paste the Zoho Meeting join link here
  scheduled_at timestamptz not null,
  course_id uuid references courses(id) on delete set null,
  is_active boolean default true,
  created_at timestamptz default now()
);

-- ============================================================
-- ROW LEVEL SECURITY (RLS) — logged-in users can read; only admins write
-- ============================================================

alter table courses enable row level security;
alter table recordings enable row level security;
alter table meetings enable row level security;

-- Allow any authenticated user to READ
create policy "Authenticated users can read courses"
  on courses for select to authenticated using (true);

create policy "Authenticated users can read recordings"
  on recordings for select to authenticated using (true);

create policy "Authenticated users can read meetings"
  on meetings for select to authenticated using (true);

-- ============================================================
-- SAMPLE DATA — add your first course and meeting to test
-- ============================================================

-- Insert a sample course
insert into courses (title, description) values
  ('Artificial Intelligence Fundamentals', 'Master AI and ML with hands-on training'),
  ('Java Full Stack Development', 'Build robust web apps with Java backend and React frontend'),
  ('DevOps & Cloud', 'CI/CD pipelines, Docker, Kubernetes and cloud infrastructure');

-- Insert a sample meeting (replace join_url with your actual Zoho Meeting link)
insert into meetings (title, description, join_url, scheduled_at, is_active) values
  (
    'AI Batch — Session 12',
    'Topic: Neural Networks & Deep Learning fundamentals',
    'https://meeting.zoho.in/meeting/join/your-meeting-id',  -- REPLACE THIS
    now() + interval '2 days',
    true
  );

-- Insert a sample recording (replace zoho_drive_url with your actual Zoho WorkDrive link)
-- First get the course id:
-- select id from courses where title = 'Artificial Intelligence Fundamentals';
-- Then insert:
-- insert into recordings (course_id, title, description, zoho_drive_url, duration_minutes, recorded_at, order_index)
-- values ('paste-course-id-here', 'Session 1: Introduction to AI', 'Overview of AI, ML, and Deep Learning', 'https://workdrive.zoho.in/file/your-file-id', 65, '2025-01-10', 1);
