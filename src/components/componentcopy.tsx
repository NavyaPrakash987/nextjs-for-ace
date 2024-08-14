'use client'

import { BellIcon, CalendarIcon, MapPinIcon, SearchIcon, UserIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { useState } from "react"

export function ComponentCopy(){
  const [user, setUser] =useState("")
  return (
    <div className="flex flex-col h-screen">
       {/* <div className="flex flex-col items-center min-h-screen bg-white"> */}
      <header className="flex bg-primary text-primary-foreground justify-between w-full p-4 border-b">
        <Image src="/npcilogo.png" alt="NPCI Logo" width={150} height={100} />
        <Image src="/togetherWebuild.jpg" alt="Together We Build Logo" width={150} height={100} />
      </header>
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="text-2xl font-bold" prefetch={false}>
           Welcome <Link
              href="#"
              className="flex gap-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            > <UserIcon className="w-5 h-5" />
              {user}!
            </Link>
        </Link>
        <div className="flex flex-row gap-4">
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <SearchIcon className="w-5 h-5" />
              My Account
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <MapPinIcon className="w-5 h-5" />
              Reedemption
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <CalendarIcon className="w-5 h-5" />
              My Award
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <UserIcon className="w-5 h-5" />
              My Profile
            </Link>
          </div>
        {/* <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <SearchIcon className="w-6 h-6" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <BellIcon className="w-6 h-6" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div> */}
      </header>
      <div className="flex-1 grid grid-cols-[240px_1fr] overflow-hidden">
        <nav className="bg-muted p-4 border-r">
          <div className="flex flex-row gap-4">
            {/* <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <SearchIcon className="w-5 h-5" />
              Find Travel Companions
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <MapPinIcon className="w-5 h-5" />
              Explore Destinations
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <CalendarIcon className="w-5 h-5" />
              My Itinerary
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              <UserIcon className="w-5 h-5" />
              My Profile
            </Link> */}
          </div>
        </nav>
        </div>
  {/* </div> */}
  </div>
  )}