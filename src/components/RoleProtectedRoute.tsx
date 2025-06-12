
import { Navigate, Outlet } from 'react-router-dom';
import { useUser, UserRole } from '@/context/UserContext';
import { Loader2 } from 'lucide-react';

interface RoleProtectedRouteProps {
  allowedRole: UserRole;
}

export function RoleProtectedRoute({ allowedRole }: RoleProtectedRouteProps) {
  const { currentUser, isLoading, isDemo } = useUser();
  
  // Allow demo mode to bypass role restrictions 
  if (isDemo) {
    return <Outlet />;
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-lg">Loading...</span>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!currentUser) {
    return <Navigate to="/auth" replace />;
  }

  // Check if user can access this role (studio manager can access all roles)
  if (currentUser.role === 'studioManager' || currentUser.role === allowedRole) {
    return <Outlet />;
  }

  // Redirect user to their assigned role page
  return <Navigate to={`/${currentUser.role}`} replace />;
}
