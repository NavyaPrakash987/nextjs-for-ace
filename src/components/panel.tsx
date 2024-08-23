"use client"
import { UserIcon, TrendingUpIcon, AwardIcon, PenToolIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export default function SidePanel() {
    const CustomScrollArea = ({ children, className = "" }) => (
        <ScrollArea className={`h-full ${className}`}>
          {children}
          <ScrollBar />
        </ScrollArea>
      )
return(
<div className="w-96 bg-background border-l">
          <CustomScrollArea className="p-6">
            <div className="space-y-6">
              <div className="sticky top-0 space-y-6 bg-background pt-6">
                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <UserIcon className="mr-2 h-5 w-5" />
                      User Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-semibold">John Doe</h3>
                        <p className="text-sm opacity-90">Software Engineer</p>
                        <div className="mt-2 flex items-center">
                          <TrendingUpIcon className="h-4 w-4 mr-1" />
                          <span className="font-medium">1,250 points</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="w-full" variant="secondary">
                    <AwardIcon className="mr-2 h-4 w-4" />
                    Recognize Now
                  </Button>
                  <Button className="w-full" variant="secondary">
                    <PenToolIcon className="mr-2 h-4 w-4" />
                    Post an Update
                  </Button>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUpIcon className="mr-2 h-5 w-5" />
                    Leaderboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {scoreboard.map((user, index) => (
                      <li key={user.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className={`text-lg font-bold ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : index === 2 ? 'text-amber-600' : 'text-muted-foreground'}`}>
                            {index + 1}
                          </span>
                          <Avatar>
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.title}</p>
                          </div>
                        </div>
                        <span className="text-sm font-semibold">{user.points} pts</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </CustomScrollArea>
          </div>
)
}

const scoreboard = [
    { id: 1, name: "Alice Johnson", avatar: "/placeholder-avatar.jpg", points: 1500, title: "UX Designer" },
    { id: 2, name: "Bob Smith", avatar: "/placeholder-avatar.jpg", points: 1350, title: "Frontend Developer" },
    { id: 3, name: "Charlie Brown", avatar: "/placeholder-avatar.jpg", points: 1200, title: "Product Manager" },
    { id: 4, name: "David Lee", avatar: "/placeholder-avatar.jpg", points: 1100, title: "Backend Developer" },
    { id: 5, name: "Eve Taylor", avatar: "/placeholder-avatar.jpg", points: 1000, title: "Data Scientist" },
    { id: 6, name: "Frank Wilson", avatar: "/placeholder-avatar.jpg", points: 950, title: "DevOps Engineer" },
    { id: 7, name: "Grace Davis", avatar: "/placeholder-avatar.jpg", points: 900, title: "QA Tester" },
    { id: 8, name: "Henry Martinez", avatar: "/placeholder-avatar.jpg", points: 850, title: "Mobile Developer" },
  ]