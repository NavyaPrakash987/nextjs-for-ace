import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { HeartIcon, MessageCircleIcon, ShareIcon, TrendingUpIcon, UserIcon, AwardIcon, PenToolIcon } from "lucide-react"
import { redirect } from "next/dist/server/api-utils"

const CustomScrollArea = ({ children, className = "" }) => (
  <ScrollArea className={`h-full ${className}`}>
    {children}
    <ScrollBar />
  </ScrollArea>
)

export default function Component() {
  const recognize(){
    redirect ('/recognize')
  }
  return (
    <div>
      <main className="flex flex-1 overflow-hidden">
        <CustomScrollArea className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Welcome back, John!</h1>
          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <CardHeader className="pb-0">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={post.avatar} alt={post.name} />
                      <AvatarFallback>{post.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{post.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">@{post.username}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mt-2 text-base">{post.content}</p>
                  {post.image && (
                    <img src={post.image} alt="Post image" className="mt-4 rounded-lg w-full object-cover h-64" />
                  )}
                  <div className="flex items-center space-x-4 mt-4">
                    <Button variant="ghost" size="sm">
                      <HeartIcon className="h-5 w-5 mr-1" />
                      Like
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageCircleIcon className="h-5 w-5 mr-1" />
                      Comment
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ShareIcon className="h-5 w-5 mr-1" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CustomScrollArea>
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
                  <Button className="w-full" variant="secondary" onClick={}>
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
      </main>
    </div>
  )
}

const posts = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    avatar: "/placeholder-avatar.jpg",
    content: "Excited to share my latest design work! Check out the new landing page concept I've been working on.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    name: "Jane Doe",
    username: "janedoe",
    avatar: "/placeholder-avatar.jpg",
    content: "Just finished a great team meeting. We're making good progress on the new project.",
  },
]

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