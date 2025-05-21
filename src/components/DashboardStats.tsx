import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Folder, Users, X } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ReactNode;
  className?: string;
}

export function StatCard({ title, value, description, icon, className }: StatCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </CardContent>
    </Card>
  );
}

export interface DashboardStatsProps {
  stats: {
    totalProjects: number;
    pendingApproval: number;
    completedProjects: number;
    rejectedProjects: number;
    teamMembers?: number;
  };
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Projects"
        value={stats.totalProjects}
        icon={<Folder className="h-4 w-4 text-muted-foreground" />}
      />
      <StatCard
        title="Pending Approval"
        value={stats.pendingApproval}
        icon={<Clock className="h-4 w-4 text-amber-500" />}
      />
      <StatCard
        title="Completed"
        value={stats.completedProjects}
        icon={<Check className="h-4 w-4 text-green-500" />}
      />
      <StatCard
        title="Rejected"
        value={stats.rejectedProjects}
        icon={<X className="h-4 w-4 text-red-500" />}
      />
      {stats.teamMembers !== undefined && (
        <StatCard
          title="Team Members"
          value={stats.teamMembers}
          icon={<Users className="h-4 w-4 text-blue-500" />}
        />
      )}
    </div>
  );
}