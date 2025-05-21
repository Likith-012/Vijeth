
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileImage, Upload } from "lucide-react";

interface Shoot {
  id: string;
  title: string;
  date: string;
  location: string;
  status: "upcoming" | "completed" | "canceled";
  imageCount?: number;
}

export default function Shoots() {
  const [shoots, setShoots] = useState<Shoot[]>([
    {
      id: "1",
      title: "Product Catalog - Summer Collection",
      date: "2025-06-15",
      location: "Studio A",
      status: "upcoming"
    },
    {
      id: "2",
      title: "Corporate Headshots - Tech Co.",
      date: "2025-05-28",
      location: "Client Office",
      status: "upcoming"
    },
    {
      id: "3",
      title: "E-commerce Fashion Shoot",
      date: "2025-05-10",
      location: "Studio B",
      status: "completed",
      imageCount: 145
    },
    {
      id: "4",
      title: "Real Estate Interior Photos",
      date: "2025-04-22",
      location: "Cityview Apartments",
      status: "completed",
      imageCount: 68
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "canceled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Shoots</h1>
        <div className="space-x-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            View Calendar
          </Button>
          <Button size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Upload Images
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {shoots.map(shoot => (
          <Card key={shoot.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <CardTitle className="text-lg">{shoot.title}</CardTitle>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(shoot.status)}`}>
                  {shoot.status.charAt(0).toUpperCase() + shoot.status.slice(1)}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{new Date(shoot.date).toLocaleDateString(undefined, { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{shoot.location}</span>
                </div>
                {shoot.imageCount !== undefined && (
                  <div className="flex text-sm">
                    <FileImage className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{shoot.imageCount} Images</span>
                  </div>
                )}
              </div>
              <div className="flex justify-end mt-4">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                {shoot.status === "completed" && (
                  <Button variant="outline" size="sm" className="ml-2">
                    View Images
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
