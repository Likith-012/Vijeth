
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Folder, FileImage } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
  id: string;
  name: string;
  description: string;
  status: "pending" | "inProgress" | "review" | "completed";
  imageCount: number;
  deadline?: string;
  completedDate?: string;
  completionPercent: number;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "Spring Collection Photoshoot",
      description: "Product photography for the spring clothing line",
      status: "inProgress",
      imageCount: 145,
      deadline: "2025-05-25",
      completionPercent: 65
    },
    {
      id: "2",
      name: "Corporate Headshots",
      description: "Professional headshots for the executive team",
      status: "review",
      imageCount: 32,
      deadline: "2025-05-28",
      completionPercent: 100
    },
    {
      id: "3",
      name: "Product Catalog Update",
      description: "Updated product images for the summer catalog",
      status: "completed",
      imageCount: 64,
      completedDate: "2025-05-15",
      completionPercent: 100
    },
    {
      id: "4",
      name: "Website Banner Photos",
      description: "Hero images for the website homepage",
      status: "completed",
      imageCount: 12,
      completedDate: "2025-05-10",
      completionPercent: 100
    },
    {
      id: "5",
      name: "Fall Collection Planning",
      description: "Initial concept planning for fall catalog",
      status: "pending",
      imageCount: 0,
      deadline: "2025-07-15",
      completionPercent: 0
    }
  ]);

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "pending":
        return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">Not Started</span>;
      case "inProgress":
        return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">In Progress</span>;
      case "review":
        return <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">Review Required</span>;
      case "completed":
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Completed</span>;
      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
          Request New Project
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="review">Waiting Review</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map(project => (
              <Card key={project.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    {getStatusBadge(project.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">{project.description}</p>
                    
                    {project.status !== "pending" && (
                      <div className="flex text-sm">
                        <FileImage className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{project.imageCount} Images</span>
                      </div>
                    )}
                    
                    {project.deadline && (
                      <div className="flex text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>Due {new Date(project.deadline).toLocaleDateString()}</span>
                      </div>
                    )}
                    
                    {project.completedDate && (
                      <div className="flex text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>Completed {new Date(project.completedDate).toLocaleDateString()}</span>
                      </div>
                    )}
                    
                    {project.status !== "completed" && project.status !== "pending" && (
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{project.completionPercent}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${project.completionPercent}%` }}></div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-end mt-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      
                      {project.status === "review" && (
                        <Button size="sm" className="ml-2">
                          Review Images
                        </Button>
                      )}
                      
                      {project.status === "completed" && (
                        <Button size="sm" className="ml-2">
                          Download Images
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="active" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.filter(p => p.status === "inProgress").map(project => (
              <Card key={project.id} className="hover:shadow-md transition-shadow">
                {/* Similar content as 'all' tab */}
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Similar TabsContent for review and completed tabs */}
      </Tabs>
    </div>
  );
}
