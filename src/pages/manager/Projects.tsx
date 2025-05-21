
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/ProjectCard";
import { useNavigate } from "react-router-dom";

// Sample data
const projects = [
  {
    id: "1",
    title: "Spring Collection Photoshoot",
    client: "Fashion Brand X",
    category: "Fashion",
    jobCardNumber: "JC-2023-001",
    shootDate: "2023-05-15",
    status: "inprogress" as const,
    progress: 65,
    assignedTo: [
      { name: "Alex Kim", role: "Photographer" },
      { name: "Jamie Rivera", role: "Editor" },
    ],
  },
  {
    id: "2",
    title: "Product Catalog Update",
    client: "Home Goods Co.",
    category: "Product",
    jobCardNumber: "JC-2023-002",
    shootDate: "2023-05-18",
    status: "completed" as const,
    progress: 100,
    assignedTo: [
      { name: "Alex Kim", role: "Photographer" },
      { name: "Jamie Rivera", role: "Editor" },
      { name: "Taylor Morgan", role: "QC" },
    ],
  },
  {
    id: "3",
    title: "Corporate Team Headshots",
    client: "Tech Startup Inc.",
    category: "Corporate",
    jobCardNumber: "JC-2023-003",
    shootDate: "2023-05-20",
    status: "pending" as const,
    progress: 25,
    assignedTo: [
      { name: "Alex Kim", role: "Photographer" },
    ],
  },
  {
    id: "4",
    title: "Restaurant Menu Items",
    client: "Gourmet Bistro",
    category: "Food",
    jobCardNumber: "JC-2023-004",
    shootDate: "2023-05-22",
    status: "rejected" as const,
    progress: 80,
    assignedTo: [
      { name: "Alex Kim", role: "Photographer" },
      { name: "Jamie Rivera", role: "Editor" },
      { name: "Taylor Morgan", role: "QC" },
    ],
  }
];

export default function ManagerProjects() {
  const navigate = useNavigate();
  
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <Button onClick={() => navigate("/manager/projects/new")}>Add New Project</Button>
      </div>
      
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(project => (
              <ProjectCard 
                key={project.id}
                {...project}
                onView={(id) => navigate(`/manager/projects/${id}`)}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter(project => project.status === "inprogress")
              .map(project => (
                <ProjectCard 
                  key={project.id}
                  {...project}
                  onView={(id) => navigate(`/manager/projects/${id}`)}
                />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter(project => project.status === "completed")
              .map(project => (
                <ProjectCard 
                  key={project.id}
                  {...project}
                  onView={(id) => navigate(`/manager/projects/${id}`)}
                />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="pending" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter(project => project.status === "pending")
              .map(project => (
                <ProjectCard 
                  key={project.id}
                  {...project}
                  onView={(id) => navigate(`/manager/projects/${id}`)}
                />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
