
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileImage, Folder } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ClientDashboard() {
  const activeProjects = [
    {
      id: "1",
      name: "Spring Collection Photoshoot",
      status: "In Progress",
      imageCount: 145,
      deadline: "2025-05-25",
      completionPercent: 65
    },
    {
      id: "2",
      name: "Corporate Headshots",
      status: "Review Required",
      imageCount: 32,
      deadline: "2025-05-28",
      completionPercent: 100
    }
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Client Dashboard</h1>
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
            Request New Project
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2</div>
            <div className="text-sm text-muted-foreground">Projects in progress</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Completed Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <div className="text-sm text-muted-foreground">Total deliveries</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Images Delivered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,456</div>
            <div className="text-sm text-muted-foreground">All-time total</div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="projects" className="mb-8">
        <TabsList>
          <TabsTrigger value="projects">Current Projects</TabsTrigger>
          <TabsTrigger value="approvals">Waiting Your Approval</TabsTrigger>
          <TabsTrigger value="recent">Recently Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects" className="space-y-4 mt-4">
          {activeProjects.map(project => (
            <Card key={project.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === "In Progress" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <div className="flex">
                      <FileImage className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{project.imageCount} Images</span>
                    </div>
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>Due {new Date(project.deadline).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{project.completionPercent}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${project.completionPercent}%` }}></div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="approvals" className="space-y-4 mt-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <CardTitle className="text-lg">Corporate Headshots</CardTitle>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                  Awaiting Approval
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm">The editing and QC teams have completed work on your corporate headshots. Please review and approve the final images.</p>
                <div className="flex text-sm">
                  <FileImage className="h-4 w-4 mr-2 text-gray-500" />
                  <span>32 Images ready for review</span>
                </div>
                <div className="flex text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>Submitted on May 19, 2025</span>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">Request Changes</Button>
                  <Button size="sm">Approve Images</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recent" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Product Catalog Update</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Completed on May 15, 2025</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Completed
                    </span>
                  </div>
                  <div className="flex text-sm">
                    <FileImage className="h-4 w-4 mr-2 text-gray-500" />
                    <span>64 Images delivered</span>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      Download Images
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Website Banner Photos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Completed on May 10, 2025</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Completed
                    </span>
                  </div>
                  <div className="flex text-sm">
                    <FileImage className="h-4 w-4 mr-2 text-gray-500" />
                    <span>12 Images delivered</span>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      Download Images
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
