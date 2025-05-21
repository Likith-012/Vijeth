
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckSquare, X } from "lucide-react";

// Sample data
const approvalsData = [
  { 
    id: "1", 
    title: "Spring Collection Photoshoot", 
    requestedBy: "Taylor Morgan", 
    role: "QC Team",
    date: "2025-05-17",
    description: "Final photographs need approval before client delivery",
    type: "images"
  },
  { 
    id: "2", 
    title: "Restaurant Menu Items", 
    requestedBy: "Taylor Morgan", 
    role: "QC Team",
    date: "2025-05-18",
    description: "Edited food photography ready for final review",
    type: "images"
  },
  { 
    id: "3", 
    title: "Product Catalog", 
    requestedBy: "Jamie Rivera", 
    role: "Editor",
    date: "2025-05-19",
    description: "Additional time needed for complex retouching",
    type: "deadline_extension"
  },
  { 
    id: "4", 
    title: "Corporate Event Photography", 
    requestedBy: "Morgan Price", 
    role: "Accounts",
    date: "2025-05-20",
    description: "Revised contract with updated payment terms",
    type: "contract"
  },
];

export default function ManagerApprovals() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Pending Approvals</h1>
      </div>

      <div className="space-y-4">
        {approvalsData.map((approval) => (
          <Card key={approval.id}>
            <CardHeader>
              <div className="flex justify-between">
                <div>
                  <CardTitle>{approval.title}</CardTitle>
                  <CardDescription>
                    Requested by {approval.requestedBy} ({approval.role}) on {new Date(approval.date).toLocaleDateString()}
                  </CardDescription>
                </div>
                <Badge 
                  className={approval.type === "images" ? "bg-blue-100 text-blue-800" :
                            approval.type === "deadline_extension" ? "bg-amber-100 text-amber-800" :
                            "bg-purple-100 text-purple-800"}
                >
                  {approval.type.replace("_", " ")}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{approval.description}</p>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">
                  <X className="h-4 w-4 mr-2" />
                  Reject
                </Button>
                <Button>
                  <CheckSquare className="h-4 w-4 mr-2" />
                  Approve
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Missing Badge component, let's add it
function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${className || "bg-gray-100 text-gray-800"}`}>
      {children}
    </span>
  );
}
