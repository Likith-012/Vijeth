
import { useState } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Event {
  id: string;
  title: string;
  date: Date;
  type: "shoot" | "deadline" | "meeting";
}

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Example events data
  const events: Event[] = [
    { 
      id: "1", 
      title: "Product Catalog Shoot",
      date: new Date(2025, 5, 15), // June 15, 2025
      type: "shoot" 
    },
    { 
      id: "2", 
      title: "Corporate Headshots",
      date: new Date(2025, 4, 28), // May 28, 2025
      type: "shoot" 
    },
    { 
      id: "3", 
      title: "Client Meeting",
      date: new Date(2025, 4, 22), // May 22, 2025
      type: "meeting" 
    },
    { 
      id: "4", 
      title: "Submission Deadline",
      date: new Date(2025, 4, 25), // May 25, 2025
      type: "deadline" 
    }
  ];
  
  // Get events for selected date
  const selectedDateEvents = events.filter(
    event => date && event.date.toDateString() === date.toDateString()
  );
  
  // Function to determine if a date has an event
  const dateHasEvent = (day: Date) => {
    return events.some(event => event.date.toDateString() === day.toDateString());
  };
  
  // Function to get badge color for event type
  const getEventBadgeColor = (type: string) => {
    switch (type) {
      case "shoot":
        return "bg-blue-500 hover:bg-blue-600";
      case "deadline":
        return "bg-red-500 hover:bg-red-600";
      case "meeting":
        return "bg-green-500 hover:bg-green-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Calendar</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Shoot Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                modifiersStyles={{
                  selected: {
                    backgroundColor: "var(--primary)",
                    color: "white"
                  }
                }}
                components={{
                  DayContent: ({ date }) => (
                    <div className="relative">
                      <div>{date.getDate()}</div>
                      {dateHasEvent(date) && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                      )}
                    </div>
                  ),
                }}
              />
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Events</span>
                {date && (
                  <span className="text-sm font-normal text-gray-500">
                    {date.toLocaleDateString(undefined, {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedDateEvents.length > 0 ? (
                <div className="space-y-4">
                  {selectedDateEvents.map(event => (
                    <div key={event.id} className="flex items-start space-x-3">
                      <Badge className={cn(getEventBadgeColor(event.type))}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </Badge>
                      <div>
                        <h3 className="text-sm font-medium">{event.title}</h3>
                        <p className="text-xs text-gray-500">
                          {event.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-gray-500">
                  No events scheduled for this date
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
