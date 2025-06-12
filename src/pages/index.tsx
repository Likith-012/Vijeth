
import { RoleSelection } from "@/components/RoleSelection";
import { useUser } from "@/context/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { currentUser, isLoading, isDemo } = useUser();
  const navigate = useNavigate();

  // Redirect authenticated users to their role's dashboard
  useEffect(() => {
    if (!isLoading && currentUser && !isDemo) {
      // Studio manager stays on the homepage
      if (currentUser.role === "studioManager") {
        navigate("/manager");
      } else {
        // All other roles go to their specific dashboard
        navigate(`/${currentUser.role}`);
      }
    }
  }, [currentUser, isLoading, navigate, isDemo]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Project Management</h1>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full py-12">
          <RoleSelection />
        </div>
      </main>
      <footer className="bg-white border-t py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            Project Management © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
