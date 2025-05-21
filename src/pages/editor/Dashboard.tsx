
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileImage, CheckSquare } from "lucide-react";

export default function EditorDashboard() {
  const pendingAssignments = [
    {
      id: "1",
      projectName: "Fashion Catalog Spring",
      imageCount: 145,
      deadline: "2025-05-25",
      priority: "High"
    },
    {
      id: "2",
      projectName: "Corporate Headshots",
      imageCount: 32,
      deadline: "2025-05-28",
      priority: "Medium"
    }
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Editor Dashboard</h1>
        <div className="space-x-2">
          <Button variant="outline" size="sm">
            <FileImage className="h-4 w-4 mr-2" />
            View All Assignments
          </Button>
          <Button size="sm">
            <CheckSquare className="h-4 w-4 mr-2" />
            Submit Completed Work
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pending Assignments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingAssignments.map(assignment => (
                <div key={assignment.id} className="border-b pb-3">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{assignment.projectName}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      assignment.priority === "High" 
                        ? "bg-red-100 text-red-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {assignment.priority}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <div className="flex items-center mt-1">
                      <FileImage className="h-4 w-4 mr-2" />
                      <span>{assignment.imageCount} Images</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Due {new Date(assignment.deadline).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Button size="sm" variant="outline">Start Editing</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h3 className="font-medium">Product Catalog - Tech Co.</h3>
                <p className="text-sm text-gray-500">You completed editing 68 images</p>
                <p className="text-xs text-gray-400">Yesterday at 4:30 PM</p>
              </div>
              <div className="border-b pb-3">
                <h3 className="font-medium">Real Estate Interior Photos</h3>
                <p className="text-sm text-gray-500">QC team approved your edits</p>
                <p className="text-xs text-gray-400">May 18, 2025 at 11:20 AM</p>
              </div>
              <div className="border-b pb-3">
                <h3 className="font-medium">Corporate Team Event</h3>
                <p className="text-sm text-gray-500">New revision requested by client</p>
                <p className="text-xs text-gray-400">May 16, 2025 at 2:45 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">Editing Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Fashion Catalog Spring</span>
                <span>45% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Corporate Headshots</span>
                <span>10% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
