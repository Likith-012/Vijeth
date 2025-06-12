
-- Run this in the Supabase SQL editor to create the RPC function
-- This function allows us to safely fetch profiles without running into RLS issues

CREATE OR REPLACE FUNCTION public.get_profile_by_id(user_id UUID)
RETURNS SETOF profiles
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT * FROM public.profiles WHERE id = user_id;
$$;

-- Set RLS policies on profiles table to avoid recursion issues
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to see their own profile
CREATE POLICY "Users can view their own profile" 
  ON public.profiles 
  FOR SELECT 
  USING (auth.uid() = id);

-- Create policy that allows users to update their own profile
CREATE POLICY "Users can update their own profile" 
  ON public.profiles 
  FOR UPDATE 
  USING (auth.uid() = id);

-- Studio managers can view any profile
CREATE POLICY "Studio managers can view all profiles" 
  ON public.profiles 
  FOR SELECT 
  USING (
    auth.uid() IN (
      SELECT id FROM public.profiles 
      WHERE role = 'studioManager'
    )
  );
