
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Sample data
const projectsData = [
  { month: "Jan", completed: 8, pending: 3 },
  { month: "Feb", completed: 10, pending: 5 },
  { month: "Mar", completed: 15, pending: 4 },
  { month: "Apr", completed: 12, pending: 6 },
  { month: "May", completed: 18, pending: 7 },
];

const teamData = [
  { name: "Photographer", projects: 24, hours: 120 },
  { name: "Editor", projects: 35, hours: 175 },
  { name: "QC", projects: 42, hours: 105 },
  { name: "Invert", projects: 18, hours: 90 },
];

const clientData = [
  { name: "Fashion Brand X", projects: 8, revenue: 12000 },
  { name: "Tech Co.", projects: 5, revenue: 8500 },
  { name: "Gourmet Bistro", projects: 3, revenue: 4500 },
  { name: "Home Goods Co.", projects: 6, revenue: 9000 },
  { name: "Tech Startup Inc.", projects: 4, revenue: 6000 },
];

export default function ManagerReports() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Select Date Range
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Reports
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="team">Team Performance</TabsTrigger>
          <TabsTrigger value="clients">Clients</TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Completion Rate</CardTitle>
              <CardDescription>Monthly overview of completed vs pending projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={projectsData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="completed" fill="#16a34a" name="Completed" />
                    <Bar dataKey="pending" fill="#f59e0b" name="Pending" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <Card>
                  <CardHeader className="pb-1">
                    <CardDescription>Average Completion Time</CardDescription>
                    <CardTitle className="text-2xl">4.2 days</CardTitle>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="pb-1">
                    <CardDescription>On-time Delivery Rate</CardDescription>
                    <CardTitle className="text-2xl">92%</CardTitle>
                  </CardHeader>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Performance</CardTitle>
              <CardDescription>Projects completed and hours logged by role</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={teamData}>
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#16a34a" />
                    <YAxis yAxisId="right" orientation="right" stroke="#2563eb" />
                    <Tooltip />
                    <Bar yAxisId="left" dataKey="projects" fill="#16a34a" name="Projects" />
                    <Bar yAxisId="right" dataKey="hours" fill="#2563eb" name="Hours" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="clients" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Client Performance</CardTitle>
              <CardDescription>Projects and revenue by client</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={clientData}>
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#16a34a" />
                    <YAxis yAxisId="right" orientation="right" stroke="#2563eb" />
                    <Tooltip />
                    <Bar yAxisId="left" dataKey="projects" fill="#16a34a" name="Projects" />
                    <Bar yAxisId="right" dataKey="revenue" fill="#2563eb" name="Revenue ($)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
