
-- This function safely gets a user profile by ID without recursion issues
-- Copy this to the Supabase SQL editor and run it
CREATE OR REPLACE FUNCTION public.get_profile_by_id(user_id UUID)
RETURNS SETOF public.profiles
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT * FROM public.profiles WHERE id = user_id;
$$;
