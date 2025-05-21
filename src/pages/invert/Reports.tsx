
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Reports() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Reports & Analytics</h1>
        <Button variant="outline" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Export Data
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Projects Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">42</div>
            <div className="text-sm text-green-600">+8% from last quarter</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Average Turnaround</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3.2 days</div>
            <div className="text-sm text-green-600">-0.5 days from last quarter</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Client Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">92%</div>
            <div className="text-sm text-green-600">+3% from last quarter</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="productivity" className="mb-8">
        <TabsList>
          <TabsTrigger value="productivity">Team Productivity</TabsTrigger>
          <TabsTrigger value="projects">Project Analysis</TabsTrigger>
          <TabsTrigger value="clients">Client Analysis</TabsTrigger>
        </TabsList>
        
        <TabsContent value="productivity" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Productivity by Team Member</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <div className="flex h-full items-center justify-center">
                  <p className="text-muted-foreground">Chart visualization would be here</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tasks Completed Over Time</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <div className="flex h-full items-center justify-center">
                  <p className="text-muted-foreground">Chart visualization would be here</p>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Top Performers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Team Member
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Projects Completed
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Avg. Turnaround
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Quality Score
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Morgan Lee</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Senior Photographer</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.8 days</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">94%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Alex Thompson</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Senior Editor</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">22</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.1 days</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">92%</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">Jamie Rivera</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Photographer</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">16</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.2 days</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">90%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="projects" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Projects by Category</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <div className="flex h-full items-center justify-center">
                  <p className="text-muted-foreground">Chart visualization would be here</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Project Timeline Analysis</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <div className="flex h-full items-center justify-center">
                  <p className="text-muted-foreground">Chart visualization would be here</p>
                </div>
              </CardContent>
            </Card>
            {/* Additional project analysis content */}
          </div>
        </TabsContent>
        
        <TabsContent value="clients" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Projects by Client</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <div className="flex h-full items-center justify-center">
                  <p className="text-muted-foreground">Chart visualization would be here</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Client Satisfaction Trends</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <div className="flex h-full items-center justify-center">
                  <p className="text-muted-foreground">Chart visualization would be here</p>
                </div>
              </CardContent>
            </Card>
            {/* Additional client analysis content */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
