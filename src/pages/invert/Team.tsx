
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Team() {
  const teamMembers = [
    {
      id: "1",
      name: "Jordan Davis",
      role: "Team Lead",
      email: "jordan@example.com",
      activeProjects: 3,
      specialization: ["Fashion", "Corporate"]
    },
    {
      id: "2",
      name: "Morgan Lee",
      role: "Senior Photographer",
      email: "morgan@example.com",
      activeProjects: 2,
      specialization: ["Product", "Food"]
    },
    {
      id: "3",
      name: "Alex Thompson",
      role: "Senior Editor",
      email: "alex@example.com",
      activeProjects: 3,
      specialization: ["Fashion", "Interior"]
    },
    {
      id: "4",
      name: "Jamie Rivera",
      role: "Photographer",
      email: "jamie@example.com",
      activeProjects: 2,
      specialization: ["Corporate", "Product"]
    },
    {
      id: "5",
      name: "Casey Wong",
      role: "Editor",
      email: "casey@example.com",
      activeProjects: 2,
      specialization: ["Food", "Interior"]
    },
    {
      id: "6",
      name: "Taylor Morgan",
      role: "QC Specialist",
      email: "taylor@example.com",
      activeProjects: 4,
      specialization: ["All Categories"]
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getRandomColor = (id: string) => {
    const colors = [
      "bg-blue-100 text-blue-800",
      "bg-green-100 text-green-800",
      "bg-purple-100 text-purple-800",
      "bg-yellow-100 text-yellow-800",
      "bg-pink-100 text-pink-800",
      "bg-indigo-100 text-indigo-800"
    ];
    return colors[parseInt(id) % colors.length];
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Team Members</h1>
        <Button size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <line x1="20" y1="8" x2="20" y2="14"></line>
            <line x1="23" y1="11" x2="17" y2="11"></line>
          </svg>
          Add Team Member
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Members</TabsTrigger>
          <TabsTrigger value="photographers">Photographers</TabsTrigger>
          <TabsTrigger value="editors">Editors</TabsTrigger>
          <TabsTrigger value="qc">QC Team</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map(member => (
              <Card key={member.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full ${getRandomColor(member.id)} flex items-center justify-center mr-3`}>
                      {getInitials(member.name)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <span>{member.email}</span>
                    </div>
                    <div className="flex text-sm">
                      <Users className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{member.activeProjects} Active Projects</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {member.specialization.map((spec, index) => (
                        <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="photographers" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.filter(m => m.role.includes("Photographer")).map(member => (
              <Card key={member.id} className="hover:shadow-md transition-shadow">
                {/* Similar content as 'all' tab */}
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Similar TabsContent for editors and qc tabs */}
      </Tabs>
    </div>
  );
}
