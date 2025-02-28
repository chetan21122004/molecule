import type React from "react"
import "./global.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Heart, Home, Search, PlusSquare, User } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Social Media App",
  description: "A social media interface built with Next.js and Tailwind CSS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <div className=" p-1  ">
         {/* Header */}
         <div className="flex w-sm sticky z-10  bg-white border border-gray-200 rounded  top-0  mx-auto items-center justify-between p-4">
          <div className="text-2xl font-bold text-green-400">m</div>
          <div className="flex-1 mx-4">
            <div className="relative flex items-center">
              <Search className="absolute left-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-100 rounded-full py-1.5 pl-10 pr-4 text-sm text-gray-700"
              />
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-5 w-5 text-gray-500" />
          </div>
        </div>
        {children}


        {/* Bottom Navigation */}
        <div className="flex w-sm mx-auto z-10 bg-gray-50 sticky bottom-0 gap-x-3  justify-between px-6 py-1 border border-gray-200 rounded">
          <button className="flex flex-col items-center">
            <Home className="h-6 w-6 text-green-400" />
            <span className="text-xs text-green-400 mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center">
            <Search className="h-6 w-6 text-gray-500" />
            <span className="text-xs text-gray-500 mt-1">Explore</span>
          </button>
          <button className="flex flex-col items-center">
            <PlusSquare className="h-6 w-6 text-gray-500" />
            <span className="text-xs text-gray-500 mt-1">Post</span>
          </button>
          <button className="flex flex-col items-center">
            <Heart className="h-6 w-6 text-gray-500" />
            <span className="text-xs text-gray-500 mt-1">Activity</span>
          </button>
          <button className="flex flex-col items-center">
            <User className="h-6 w-6 text-gray-500" />
            <span className="text-xs text-gray-500 mt-1">Profile</span>
          </button>
        </div>
       </div>
      </body>
    </html>
  )
}

