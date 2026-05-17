-- ============================================================
-- NexAIra — Schema v2: Allowed Users + Helper Functions
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- 1. ALLOWED USERS TABLE (trainer manages this manually)
create table if not exists allowed_users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  full_name text,
  account_created boolean default false,  -- flipped to true after first login
  added_at timestamptz default now()
);

-- RLS: authenticated users can only read their own row
alter table allowed_users enable row level security;

create policy "Users can read their own allowed record"
  on allowed_users for select to authenticated
  using (lower(email) = lower(auth.email()));

-- ============================================================
-- 2. HELPER: check if email is whitelisted (callable by anon)
--    Returns: { is_allowed, account_created, full_name }
-- ============================================================
create or replace function check_email_allowed(check_email text)
returns json
language sql
security definer
set search_path = public
as $$
  select json_build_object(
    'is_allowed',       exists(select 1 from allowed_users where lower(email) = lower(check_email)),
    'account_created',  coalesce((select account_created from allowed_users where lower(email) = lower(check_email)), false),
    'full_name',        (select full_name from allowed_users where lower(email) = lower(check_email))
  );
$$;

-- ============================================================
-- 3. HELPER: mark account_created = true after first login
-- ============================================================
create or replace function mark_account_created(user_email text)
returns void
language sql
security definer
set search_path = public
as $$
  update allowed_users set account_created = true where lower(email) = lower(user_email);
$$;

-- ============================================================
-- IMPORTANT: In Supabase Dashboard → Authentication → Providers → Email
-- Turn OFF "Confirm email" so first-time signUp auto-logs users in.
-- ============================================================

-- ============================================================
-- SAMPLE: Add your first learner (replace with real email)
-- ============================================================
-- insert into allowed_users (email, full_name) values
--   ('learner@gmail.com', 'Learner Name');
