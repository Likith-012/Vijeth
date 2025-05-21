
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Archive, Folder, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function InvertDashboard() {
  const recentProjects = [
    {
      id: "1",
      name: "Spring Collection Photoshoot",
      client: "Fashion Brand X",
      status: "In Progress",
      teamMembers: 4,
      lastUpdate: "2025-05-18"
    },
    {
      id: "2",
      name: "Product Catalog Update",
      client: "Tech Co.",
      status: "Completed",
      teamMembers: 3,
      lastUpdate: "2025-05-15"
    },
    {
      id: "3",
      name: "Corporate Headshots",
      client: "Financial Services Inc.",
      status: "In Progress",
      teamMembers: 2,
      lastUpdate: "2025-05-20"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Completed": return "bg-green-100 text-green-800";
      case "On Hold": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Invert Team Dashboard</h1>
        <div className="space-x-2">
          <Button variant="outline" size="sm">
            <Folder className="h-4 w-4 mr-2" />
            View All Projects
          </Button>
          <Button size="sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            New Project
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8</div>
            <div className="text-sm text-muted-foreground">Currently in progress</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">42</div>
            <div className="text-sm text-muted-foreground">This quarter</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <div className="text-sm text-muted-foreground">Across all projects</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Archived</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">124</div>
            <div className="text-sm text-muted-foreground">Total projects archived</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="projects" className="mb-8">
        <TabsList>
          <TabsTrigger value="projects">Recent Projects</TabsTrigger>
          <TabsTrigger value="team">Team Activity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentProjects.map(project => (
              <Card key={project.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                      <span>Client: {project.client}</span>
                    </div>
                    <div className="flex text-sm">
                      <Users className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{project.teamMembers} Team Members</span>
                    </div>
                    <div className="flex text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>Updated {new Date(project.lastUpdate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="team" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="p-4">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-3">
                        JD
                      </div>
                      <div>
                        <p className="font-medium">Jordan Davis</p>
                        <p className="text-sm text-gray-500">Updated project status for Spring Collection</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">Today at 11:30 AM</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-3">
                        ML
                      </div>
                      <div>
                        <p className="font-medium">Morgan Lee</p>
                        <p className="text-sm text-gray-500">Completed Corporate Headshots editing</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">Today at 9:45 AM</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center mr-3">
                        AT
                      </div>
                      <div>
                        <p className="font-medium">Alex Thompson</p>
                        <p className="text-sm text-gray-500">Archived Product Catalog project</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">Yesterday at 4:30 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
