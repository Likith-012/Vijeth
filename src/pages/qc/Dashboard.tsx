
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckSquare, FileImage } from "lucide-react";

export default function QCDashboard() {
  const pendingReviews = [
    {
      id: "1",
      projectName: "Product Catalog - Tech Co.",
      editor: "Jamie Rivera",
      imageCount: 68,
      submittedDate: "2025-05-18"
    },
    {
      id: "2",
      projectName: "Real Estate Interior Photos",
      editor: "Alex Thompson",
      imageCount: 54,
      submittedDate: "2025-05-15"
    }
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">QC Team Dashboard</h1>
        <div className="space-x-2">
          <Button variant="outline" size="sm">
            <FileImage className="h-4 w-4 mr-2" />
            View All Reviews
          </Button>
          <Button size="sm">
            <CheckSquare className="h-4 w-4 mr-2" />
            Review Queue
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Pending Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{pendingReviews.length}</div>
            <div className="text-sm text-muted-foreground">Projects waiting for QC</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Approved Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <div className="text-sm text-muted-foreground">Projects approved</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Revision Requested</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1</div>
            <div className="text-sm text-muted-foreground">Projects sent back</div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Review Queue</h2>
        <div className="grid grid-cols-1 gap-4">
          {pendingReviews.map(review => (
            <Card key={review.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-lg">{review.projectName}</CardTitle>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">Pending Review</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>Edited by {review.editor}</span>
                  </div>
                  <div className="flex text-sm">
                    <FileImage className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{review.imageCount} Images</span>
                  </div>
                  <div className="flex text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>Submitted on {new Date(review.submittedDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm" className="ml-2">
                    Start Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              <div className="p-4">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">Summer Collection Lookbook</p>
                    <p className="text-sm text-gray-500">You requested revisions</p>
                  </div>
                  <p className="text-xs text-gray-400">Today at 11:30 AM</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">Furniture Catalog</p>
                    <p className="text-sm text-gray-500">You approved all images</p>
                  </div>
                  <p className="text-xs text-gray-400">Today at 9:15 AM</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">Restaurant Menu Photos</p>
                    <p className="text-sm text-gray-500">You approved all images</p>
                  </div>
                  <p className="text-xs text-gray-400">Yesterday at 4:45 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
