
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Archive, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ArchivedProject {
  id: string;
  name: string;
  client: string;
  completedDate: string;
  archivedDate: string;
  imageCount: number;
  category: string;
}

export default function Archives() {
  const [archivedProjects, setArchivedProjects] = useState<ArchivedProject[]>([
    {
      id: "1",
      name: "Winter Collection Catalog",
      client: "Fashion Brand X",
      completedDate: "2025-02-15",
      archivedDate: "2025-03-01",
      imageCount: 156,
      category: "Fashion"
    },
    {
      id: "2",
      name: "Office Interior Photos",
      client: "Tech Co.",
      completedDate: "2025-01-28",
      archivedDate: "2025-02-15",
      imageCount: 42,
      category: "Interior"
    },
    {
      id: "3",
      name: "Product Launch Photos",
      client: "Home Goods Co.",
      completedDate: "2025-01-15",
      archivedDate: "2025-02-01",
      imageCount: 87,
      category: "Product"
    },
    {
      id: "4",
      name: "Annual Report Portraits",
      client: "Financial Services Inc.",
      completedDate: "2024-12-20",
      archivedDate: "2025-01-15",
      imageCount: 24,
      category: "Corporate"
    },
    {
      id: "5",
      name: "Fall Menu Photography",
      client: "Gourmet Bistro",
      completedDate: "2024-11-10",
      archivedDate: "2024-12-01",
      imageCount: 36,
      category: "Food"
    }
  ]);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Archives</h1>
        <div className="flex space-x-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search archives..."
              className="pl-8 h-9 rounded-md border border-input px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
          <Button variant="outline" size="sm">
            <Archive className="h-4 w-4 mr-2" />
            Archive Project
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Archives</TabsTrigger>
          <TabsTrigger value="fashion">Fashion</TabsTrigger>
          <TabsTrigger value="product">Product</TabsTrigger>
          <TabsTrigger value="corporate">Corporate</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {archivedProjects.map(project => (
              <Card key={project.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
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
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{project.imageCount} Images</span>
                    </div>
                    <div className="flex text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>Completed {new Date(project.completedDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex text-sm">
                      <Archive className="h-4 w-4 mr-2 text-gray-500" />
                      <span>Archived {new Date(project.archivedDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button variant="outline" size="sm">
                      View Archive
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="fashion" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {archivedProjects.filter(p => p.category === "Fashion").map(project => (
              <Card key={project.id} className="hover:shadow-md transition-shadow">
                {/* Similar content as 'all' tab */}
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Similar TabsContent for product and corporate tabs */}
      </Tabs>
    </div>
  );
}
