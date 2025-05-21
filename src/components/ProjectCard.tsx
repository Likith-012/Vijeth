
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type ProjectStatus = 'pending' | 'inprogress' | 'completed' | 'rejected';

export interface ProjectCardProps {
  id: string;
  title: string;
  client: string;
  category: string;
  jobCardNumber: string;
  shootDate: string;
  status: ProjectStatus;
  progress: number;
  assignedTo?: {
    name: string;
    avatar?: string;
    role: string;
  }[];
  onView?: (id: string) => void;
}

export function ProjectCard({
  id,
  title,
  client,
  category,
  jobCardNumber,
  shootDate,
  status,
  progress,
  assignedTo = [],
  onView,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const statusColorMap: Record<ProjectStatus, string> = {
    pending: 'bg-status-pending',
    inprogress: 'bg-status-inprogress',
    completed: 'bg-status-completed',
    rejected: 'bg-status-rejected',
  };
  
  const statusTextMap: Record<ProjectStatus, string> = {
    pending: 'Pending',
    inprogress: 'In Progress',
    completed: 'Completed',
    rejected: 'Rejected',
  };

  return (
    <Card 
      className={cn(
        "transition-all duration-300 w-full", 
        isHovered ? "shadow-lg transform -translate-y-1" : "shadow-md"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Badge variant="outline" className={`${statusColorMap[status]} text-white`}>
            {statusTextMap[status]}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground">
          Client: {client}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          <div>
            <p className="text-muted-foreground">Job Card</p>
            <p className="font-medium">{jobCardNumber}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Category</p>
            <p className="font-medium">{category}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Shoot Date</p>
            <p className="font-medium">{shootDate}</p>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        {assignedTo.length > 0 && (
          <div className="mt-4">
            <p className="text-xs text-muted-foreground mb-1">Assigned to:</p>
            <div className="flex -space-x-2">
              <TooltipProvider>
                {assignedTo.slice(0, 3).map((person, i) => (
                  <Tooltip key={i}>
                    <TooltipTrigger asChild>
                      <Avatar className="h-6 w-6 border-2 border-background">
                        <AvatarImage src={person.avatar} alt={person.name} />
                        <AvatarFallback>{person.name[0]}</AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{person.name} ({person.role})</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
                {assignedTo.length > 3 && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Avatar className="h-6 w-6 border-2 border-background">
                        <AvatarFallback>+{assignedTo.length - 3}</AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{assignedTo.slice(3).map(p => p.name).join(", ")}</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </TooltipProvider>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full" 
          onClick={() => onView && onView(id)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
