
import { supabase } from '@/integrations/supabase/client';
import { UserRole } from '@/context/UserContext';

// Helper function to clean up auth state
export const cleanupAuthState = () => {
  localStorage.removeItem('supabase.auth.token');
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
      localStorage.removeItem(key);
    }
  });
  Object.keys(sessionStorage || {}).forEach((key) => {
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
      sessionStorage.removeItem(key);
    }
  });
};

// Type for the user profile
export interface UserProfile {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  avatar?: string;
}

// Sign in with email and password
export const signIn = async (email: string, password: string): Promise<{ user: UserProfile | null; error: string | null }> => {
  try {
    // Clean up existing auth state
    cleanupAuthState();
    
    // Attempt sign out first to clear any existing sessions
    try {
      await supabase.auth.signOut({ scope: 'global' });
    } catch (err) {
      console.error("Error during pre-signin cleanup:", err);
      // Continue even if this fails
    }
    
    console.log("Attempting to sign in with:", email);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) {
      console.error("Sign in error:", error);
      return { user: null, error: error.message };
    }
    
    console.log("Sign in successful, user data:", data.user);
    
    if (!data.user) {
      return { user: null, error: 'No user returned from authentication' };
    }
    
    try {
      const profile = await fetchUserProfile(data.user.id);
      return { user: profile, error: null };
    } catch (err: any) {
      console.error("Error processing login after successful authentication:", err);
      
      // Force a clean signout if profile fetch fails
      try {
        await supabase.auth.signOut({ scope: 'global' });
        cleanupAuthState();
      } catch (signOutErr) {
        console.error("Error during cleanup after failed login:", signOutErr);
      }
      
      return { user: null, error: err.message || 'Error processing login' };
    }
  } catch (error: any) {
    console.error("Unexpected error during sign in:", error);
    return { user: null, error: error.message || 'Failed to sign in' };
  }
};

// Sign up with email and password
export const signUp = async (
  email: string, 
  password: string, 
  role: UserRole, 
  name: string
): Promise<{ success: boolean; error: string | null; session: boolean }> => {
  try {
    // Clean up existing auth state
    cleanupAuthState();
    
    console.log("Signing up with:", { email, role, name });
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { 
          role,
          name 
        }
      }
    });
    
    if (error) {
      console.error("Sign up error:", error);
      return { success: false, error: error.message, session: false };
    }
    
    console.log("Sign up response:", data);
    
    // Check if email confirmation is required
    if (data.session) {
      console.log("Session available, user can login immediately");
      // User can login immediately (email confirmation disabled)
      try {
        // We don't need to fetch the profile here as the trigger will create it
        return { success: true, error: null, session: true };
      } catch (err: any) {
        console.error("Error fetching profile after signup:", err);
        return { success: true, error: null, session: false };
      }
    } else {
      console.log("No session available, email confirmation may be required");
      return { success: true, error: null, session: false };
    }
  } catch (error: any) {
    console.error("Unexpected error during sign up:", error);
    return { success: false, error: error.message || 'Failed to sign up', session: false };
  }
};

// Sign out
export const signOut = async (): Promise<{ success: boolean; error: string | null }> => {
  try {
    console.log("Signing out...");
    
    // Clean up auth state
    cleanupAuthState();
    
    await supabase.auth.signOut({ scope: 'global' });
    
    console.log("Sign out successful");
    return { success: true, error: null };
  } catch (error: any) {
    console.error("Error during sign out:", error);
    return { success: false, error: error.message || 'Failed to sign out' };
  }
};

// Fetch user profile from Supabase with proper error handling
export const fetchUserProfile = async (userId: string): Promise<UserProfile> => {
  console.log("Fetching profile for user ID:", userId);
  
  try {
    // First, try a direct query to profiles table
    const profileQuery = await supabase
      .from('profiles')
      .select()
      .eq('id', userId)
      .maybeSingle();
    
    if (profileQuery.error) {
      console.error("Error fetching profile:", profileQuery.error);
      throw new Error(profileQuery.error.message || 'Failed to load user profile');
    }
    
    if (!profileQuery.data) {
      console.log("No profile found for user ID:", userId);
      throw new Error('User profile not found');
    }
    
    const userData = profileQuery.data;
    console.log("Profile data:", userData);
    
    const userWithProfile: UserProfile = {
      id: userData.id,
      name: userData.name || '',
      role: userData.role as UserRole,
      email: userData.email,
      avatar: userData.avatar,
    };
    
    console.log("User profile loaded:", userWithProfile);
    return userWithProfile;
  } catch (error: any) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Get the current session
export const getCurrentSession = async () => {
  return await supabase.auth.getSession();
};

// Listen for auth changes
export const onAuthStateChange = (callback: (event: any, session: any) => void) => {
  return supabase.auth.onAuthStateChange(callback);
};
