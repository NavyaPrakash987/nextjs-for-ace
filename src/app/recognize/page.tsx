"use client"

import Headers from "@/components/header"
import Recognize from "@/components/recognize"

export default function Recognize_page() {
    return (
        <>
        <Headers />
        <div className="flex flex-col items-center min-h-screen bg-white">
        <Recognize />
        </div>
        </>
    )
}