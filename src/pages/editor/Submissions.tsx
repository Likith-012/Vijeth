
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckSquare, FileImage } from "lucide-react";

interface Submission {
  id: string;
  projectName: string;
  imageCount: number;
  submittedDate: string;
  status: "pending" | "approved" | "rejected";
  comments?: string;
}

export default function Submissions() {
  const [submissions, setSubmissions] = useState<Submission[]>([
    {
      id: "1",
      projectName: "Product Catalog - Tech Co.",
      imageCount: 68,
      submittedDate: "2025-05-18",
      status: "approved"
    },
    {
      id: "2",
      projectName: "Real Estate Interior Photos",
      imageCount: 54,
      submittedDate: "2025-05-15",
      status: "pending"
    },
    {
      id: "3",
      projectName: "Summer Collection Lookbook",
      imageCount: 120,
      submittedDate: "2025-05-10",
      status: "rejected",
      comments: "Need more consistency in lighting and white balance. Please revise."
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Submissions</h1>
        <Button size="sm">
          <CheckSquare className="h-4 w-4 mr-2" />
          New Submission
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-8">
        {submissions.map(submission => (
          <Card key={submission.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <CardTitle className="text-lg">{submission.projectName}</CardTitle>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                  {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex text-sm">
                  <FileImage className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{submission.imageCount} Images</span>
                </div>
                <div className="flex text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>Submitted on {new Date(submission.submittedDate).toLocaleDateString()}</span>
                </div>
                {submission.comments && (
                  <div className="mt-2 p-3 bg-gray-50 rounded-md">
                    <p className="text-sm font-medium">Feedback:</p>
                    <p className="text-sm">{submission.comments}</p>
                  </div>
                )}
              </div>
              <div className="flex justify-end mt-4">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                {submission.status === "rejected" && (
                  <Button variant="outline" size="sm" className="ml-2">
                    Revise Submission
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
