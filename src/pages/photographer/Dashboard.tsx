
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileImage, Upload, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PhotographerDashboard() {
  const navigate = useNavigate();
  
  // Example stats
  const stats = [
    {
      title: "Upcoming Shoots",
      value: "2",
      description: "Next: June 15, 2025",
      icon: <Calendar className="h-5 w-5" />,
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "Images Uploaded",
      value: "213",
      description: "Last 30 days",
      icon: <FileImage className="h-5 w-5" />,
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      title: "Pending Submissions",
      value: "1",
      description: "Due in 3 days",
      icon: <Clock className="h-5 w-5" />,
      color: "text-amber-500",
      bgColor: "bg-amber-50"
    }
  ];

  // Example recent shoots
  const recentShoots = [
    {
      id: "1",
      title: "E-commerce Fashion Shoot",
      date: "May 10, 2025",
      imageCount: 145,
      status: "Completed"
    },
    {
      id: "2",
      title: "Real Estate Interior Photos",
      date: "April 22, 2025",
      imageCount: 68,
      status: "Completed"
    }
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Photographer Dashboard</h1>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={() => navigate('/photographer/calendar')}>
            <Calendar className="h-4 w-4 mr-2" />
            View Calendar
          </Button>
          <Button size="sm" onClick={() => navigate('/photographer/upload')}>
            <Upload className="h-4 w-4 mr-2" />
            Upload Images
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`p-2 rounded-full ${stat.bgColor}`}>
                <span className={stat.color}>{stat.icon}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate('/photographer/shoots')}>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <FileImage className="h-10 w-10 text-primary mb-3" />
            <CardTitle className="text-center">My Shoots</CardTitle>
            <CardDescription className="text-center">View all assigned shoots</CardDescription>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate('/photographer/upload')}>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Upload className="h-10 w-10 text-primary mb-3" />
            <CardTitle className="text-center">Upload Images</CardTitle>
            <CardDescription className="text-center">Upload new shoot images</CardDescription>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate('/photographer/calendar')}>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Calendar className="h-10 w-10 text-primary mb-3" />
            <CardTitle className="text-center">Calendar</CardTitle>
            <CardDescription className="text-center">View upcoming schedule</CardDescription>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <CardTitle className="text-center">Locations</CardTitle>
            <CardDescription className="text-center">Manage shoot locations</CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Recent Shoots */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Shoots</h2>
          <Button variant="ghost" size="sm" onClick={() => navigate('/photographer/shoots')}>
            View all
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentShoots.map(shoot => (
            <Card key={shoot.id}>
              <CardHeader>
                <CardTitle className="text-lg">{shoot.title}</CardTitle>
                <CardDescription>{shoot.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{shoot.imageCount} Images</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    {shoot.status}
                  </span>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
