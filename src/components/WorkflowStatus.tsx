
import { Check, Clock, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type WorkflowStep = {
  id: string;
  title: string;
  role: string;
  status: 'pending' | 'inprogress' | 'completed' | 'rejected';
  completedAt?: string;
  comments?: string;
};

interface WorkflowStatusProps {
  steps: WorkflowStep[];
  currentStepId: string;
}

export function WorkflowStatus({ steps, currentStepId }: WorkflowStatusProps) {
  const statusIconMap = {
    pending: <Clock className="h-4 w-4" />,
    inprogress: <Clock className="h-4 w-4 text-blue-500" />,
    completed: <Check className="h-4 w-4 text-green-500" />,
    rejected: <X className="h-4 w-4 text-red-500" />,
  };
  
  const statusColorMap = {
    pending: 'bg-gray-200',
    inprogress: 'bg-blue-500',
    completed: 'bg-green-500',
    rejected: 'bg-red-500',
  };
  
  return (
    <div className="flex flex-col space-y-4">
      {steps.map((step, index) => {
        const isCurrentStep = step.id === currentStepId;
        const isPastStep = steps.findIndex(s => s.id === currentStepId) > index;
        
        return (
          <div 
            key={step.id} 
            className={cn(
              "flex items-start",
              isCurrentStep ? "animate-fade-in" : ""
            )}
          >
            <div className="flex flex-col items-center mr-4">
              <div 
                className={cn(
                  "rounded-full p-1",
                  isCurrentStep ? "ring-2 ring-blue-500" : "",
                  statusColorMap[step.status] 
                )}
              >
                {statusIconMap[step.status]}
              </div>
              {index < steps.length - 1 && (
                <div 
                  className={cn(
                    "w-0.5 h-full bg-gray-200 my-1",
                    (isCurrentStep || isPastStep) ? "bg-blue-200" : "bg-gray-200"
                  )}
                />
              )}
            </div>
            <div className="flex-1">
              <div className="flex flex-col">
                <span className="text-sm font-medium">{step.title}</span>
                <span className="text-xs text-gray-500">{step.role}</span>
                {step.completedAt && (
                  <span className="text-xs text-gray-500 mt-1">
                    {step.status === 'completed' ? 'Completed' : step.status === 'rejected' ? 'Rejected' : 'Updated'}: {step.completedAt}
                  </span>
                )}
                {step.comments && (
                  <p className="text-xs mt-1 text-gray-700 bg-gray-50 p-2 rounded-md">
                    {step.comments}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
