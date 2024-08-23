"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { HeartIcon, MessageCircleIcon, ShareIcon, TrendingUpIcon, UserIcon, AwardIcon, PenToolIcon } from "lucide-react"

const CustomScrollArea = ({ children, className = "" }) => (
  <ScrollArea className={`h-full ${className}`}>
    {children}
    <ScrollBar />
  </ScrollArea>
)

export default function Component() {
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

