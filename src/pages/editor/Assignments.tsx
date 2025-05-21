
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileImage, CheckSquare } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Assignments() {
  const [assignments, setAssignments] = useState([
    {
      id: "1",
      projectName: "Fashion Catalog Spring",
      imageCount: 145,
      deadline: "2025-05-25",
      priority: "High",
      status: "inProgress"
    },
    {
      id: "2",
      projectName: "Corporate Headshots",
      imageCount: 32,
      deadline: "2025-05-28",
      priority: "Medium",
      status: "notStarted"
    },
    {
      id: "3",
      projectName: "Product Catalog - Tech Co.",
      imageCount: 68,
      deadline: "2025-05-18",
      priority: "Low",
      status: "completed"
    },
    {
      id: "4",
      projectName: "Real Estate Interior Photos",
      imageCount: 54,
      deadline: "2025-05-15",
      priority: "Medium",
      status: "revisionRequested"
    }
  ]);

  const getPriorityClass = (priority: string) => {
    switch(priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "inProgress": return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">In Progress</span>;
      case "notStarted": return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">Not Started</span>;
      case "completed": return <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Completed</span>;
      case "revisionRequested": return <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">Revision</span>;
      default: return null;
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Assignments</h1>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="inProgress">In Progress</TabsTrigger>
          <TabsTrigger value="notStarted">Not Started</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="revision">Needs Revision</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assignments.map(assignment => (
              <Card key={assignment.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle className="text-lg">{assignment.projectName}</CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityClass(assignment.priority)}`}>
                      {assignment.priority}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex text-sm">
                      <FileImage className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{assignment.imageCount} Images</span>
                    </div>
                    <div className="flex text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>Due {new Date(assignment.deadline).toLocaleDateString()}</span>
                    </div>
                    <div className="flex text-sm">
                      <CheckSquare className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{getStatusBadge(assignment.status)}</span>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {assignment.status !== "completed" && (
                      <Button variant="outline" size="sm" className="ml-2">
                        Edit Images
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="inProgress" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assignments.filter(a => a.status === "inProgress").map(assignment => (
              <Card key={assignment.id} className="hover:shadow-md transition-shadow">
                {/* Card content (similar to above) */}
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle className="text-lg">{assignment.projectName}</CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityClass(assignment.priority)}`}>
                      {assignment.priority}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {/* ... similar content ... */}
                    <div className="flex text-sm">
                      <FileImage className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{assignment.imageCount} Images</span>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button variant="outline" size="sm">Edit Images</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Similar TabsContent for other tabs */}
      </Tabs>
    </div>
  );
}
