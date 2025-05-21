import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "@/components/MainLayout";
import { UserProvider } from "@/context/UserContext";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";

// Studio Manager pages
import ManagerDashboard from "./pages/ManagerDashboard";
import ManagerProjects from "./pages/manager/Projects";
import ManagerTeam from "./pages/manager/Team";
import ManagerApprovals from "./pages/manager/Approvals";
import ManagerReports from "./pages/manager/Reports";

// Photographer pages
import PhotographerDashboard from "./pages/photographer/Dashboard";
import PhotographerShoots from "./pages/photographer/Shoots";
import PhotographerUpload from "./pages/photographer/Upload";
import PhotographerCalendar from "./pages/photographer/Calendar";

// Editor pages
import EditorDashboard from "./pages/editor/Dashboard";
import Assignments from "./pages/editor/Assignments";
import Submissions from "./pages/editor/Submissions";

// QC Team pages
import QCDashboard from "./pages/qc/Dashboard";
import PendingReview from "./pages/qc/Pending";
import Approved from "./pages/qc/Approved";
import Rejected from "./pages/qc/Rejected";

// Client pages
import ClientDashboard from "./pages/client/Dashboard";
import Projects from "./pages/client/Projects";
import Deliverables from "./pages/client/Deliverables";

// Accounts Team pages
import AccountsDashboard from "./pages/accounts/Dashboard";
import Invoices from "./pages/accounts/Invoices";
import Payments from "./pages/accounts/Payments";

// Invert Team pages
import InvertDashboard from "./pages/invert/Dashboard";
import NewProjects from "./pages/invert/New";
import Archives from "./pages/invert/Archives";
import Team from "./pages/invert/Team";
import Reports from "./pages/invert/Reports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Role-based routes using the MainLayout with sidebar */}
            <Route path="/" element={<MainLayout />}>
              {/* Studio Manager Routes */}
              <Route path="manager" element={<ManagerDashboard />} />
              <Route path="manager/projects" element={<ManagerProjects />} />
              <Route path="manager/team" element={<ManagerTeam />} />
              <Route path="manager/approvals" element={<ManagerApprovals />} />
              <Route path="manager/reports" element={<ManagerReports />} />
              
              {/* Photographer Routes */}
              <Route path="photographer" element={<PhotographerDashboard />} />
              <Route path="photographer/shoots" element={<PhotographerShoots />} />
              <Route path="photographer/upload" element={<PhotographerUpload />} />
              <Route path="photographer/calendar" element={<PhotographerCalendar />} />
              
              {/* Editor Routes */}
              <Route path="editor" element={<EditorDashboard />} />
              <Route path="editor/assignments" element={<Assignments />} />
              <Route path="editor/submissions" element={<Submissions />} />
              
              {/* QC Team Routes */}
              <Route path="qc" element={<QCDashboard />} />
              <Route path="qc/pending" element={<PendingReview />} />
              <Route path="qc/approved" element={<Approved />} />
              <Route path="qc/rejected" element={<Rejected />} />
              
              {/* Client Routes */}
              <Route path="client" element={<ClientDashboard />} />
              <Route path="client/projects" element={<Projects />} />
              <Route path="client/deliverables" element={<Deliverables />} />
              
              {/* Accounts Team Routes */}
              <Route path="accounts" element={<AccountsDashboard />} />
              <Route path="accounts/invoices" element={<Invoices />} />
              <Route path="accounts/payments" element={<Payments />} />
              
              {/* Invert Team Routes */}
              <Route path="invert" element={<InvertDashboard />} />
              <Route path="invert/new" element={<NewProjects />} />
              <Route path="invert/archives" element={<Archives />} />
              <Route path="invert/team" element={<Team />} />
              <Route path="invert/reports" element={<Reports />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
