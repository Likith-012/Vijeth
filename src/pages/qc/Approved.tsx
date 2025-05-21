
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckSquare, FileImage } from "lucide-react";

interface ApprovedProject {
  id: string;
  projectName: string;
  editor: string;
  imageCount: number;
  approvedDate: string;
  client: string;
  reviewedBy: string;
}

export default function Approved() {
  const [approvedProjects, setApprovedProjects] = useState<ApprovedProject[]>([
    {
      id: "1",
      projectName: "Furniture Catalog",
      editor: "Jamie Rivera",
      imageCount: 42,
      approvedDate: "2025-05-20",
      client: "Home Goods Co.",
      reviewedBy: "Taylor Morgan"
    },
    {
      id: "2",
      projectName: "Restaurant Menu Photos",
      editor: "Alex Thompson",
      imageCount: 28,
      approvedDate: "2025-05-19",
      client: "Gourmet Bistro",
      reviewedBy: "Taylor Morgan"
    },
    {
      id: "3",
      projectName: "Jewelry Collection",
      editor: "Sam Williams",
      imageCount: 36,
      approvedDate: "2025-05-17",
      client: "Luxury Accessories",
      reviewedBy: "Jordan Chen"
    }
  ]);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Approved Projects</h1>
        <Button variant="outline" size="sm">
          <FileImage className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {approvedProjects.map(project => (
          <Card key={project.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <CardTitle className="text-lg">{project.projectName}</CardTitle>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  Approved
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>Edited by {project.editor}</span>
                </div>
                <div className="flex text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>Reviewed by {project.reviewedBy}</span>
                </div>
                <div className="flex text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                  <span>Client: {project.client}</span>
                </div>
                <div className="flex text-sm">
                  <FileImage className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{project.imageCount} Images</span>
                </div>
                <div className="flex text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>Approved on {new Date(project.approvedDate).toLocaleDateString()}</span>
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
    </div>
  );
}
