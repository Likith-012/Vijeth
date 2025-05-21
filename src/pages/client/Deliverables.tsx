
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileImage } from "lucide-react";

interface Deliverable {
  id: string;
  projectName: string;
  deliveryDate: string;
  imageCount: number;
  downloadStatus: "downloaded" | "notDownloaded";
  fileSize: string;
}

export default function Deliverables() {
  const [deliverables, setDeliverables] = useState<Deliverable[]>([
    {
      id: "1",
      projectName: "Product Catalog Update",
      deliveryDate: "2025-05-15",
      imageCount: 64,
      downloadStatus: "downloaded",
      fileSize: "245 MB"
    },
    {
      id: "2",
      projectName: "Website Banner Photos",
      deliveryDate: "2025-05-10",
      imageCount: 12,
      downloadStatus: "downloaded",
      fileSize: "86 MB"
    },
    {
      id: "3",
      projectName: "Corporate Headshots",
      deliveryDate: "2025-05-20",
      imageCount: 32,
      downloadStatus: "notDownloaded",
      fileSize: "120 MB"
    }
  ]);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Deliverables</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {deliverables.map(deliverable => (
          <Card key={deliverable.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <CardTitle className="text-lg">{deliverable.projectName}</CardTitle>
                {deliverable.downloadStatus === "downloaded" ? (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Downloaded
                  </span>
                ) : (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    Ready for Download
                  </span>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex text-sm">
                  <FileImage className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{deliverable.imageCount} Images</span>
                </div>
                <div className="flex text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>Delivered on {new Date(deliverable.deliveryDate).toLocaleDateString()}</span>
                </div>
                <div className="flex text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>{deliverable.fileSize}</span>
                </div>
                <div className="flex justify-end mt-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm" className="ml-2">
                    {deliverable.downloadStatus === "downloaded" ? "Download Again" : "Download"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
