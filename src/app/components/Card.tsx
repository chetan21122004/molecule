import { Heart, MessageCircle, Bookmark, Send,  User } from "lucide-react"

interface CardProps {
  id: number;
  user: string;
  time: string;
  likes: number;
  caption: string;
  mainImage: string;
  additionalImages: string[];
}

export default function Card({id, user, time, likes, caption, mainImage, additionalImages }: CardProps) {
  return (
    <div className="    max-w-md   mx-auto bg-white text-gray-700">
     

      {/* Post */}
      <div className=" my-1 pb-2 border border-gray-200 rounded-md">
        {/* Post Header */}
        <div className="flex items-center p-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <div className="ml-3 flex-1">
            <p className="font-semibold text-sm">{user}</p>
            <p className="text-xs text-gray-500">{time}</p>
          </div>
          <button className="text-gray-500" id={id.toLocaleString() + "menu"}>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <circle cx="5" cy="12" r="1.5" fill="currentColor" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <circle cx="19" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </button>
        </div>

        {/* Main Post Image */}
        <div className="relative w-full aspect-square">
          <img
            src={mainImage}
            alt="Main post"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Caption */}
        <div className="px-3 pt-2">
          <p className="text-sm">
            <span className="font-semibold">{caption}</span> 
          </p>
        </div>

        {/* Additional Images */}
        <div className="flex mt-2">
          {additionalImages.map((image, index) => (
            <div key={index} className="w-1/3 aspect-[4/3] relative">
              <img
                src={image}
                alt={`Additional image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Likes */}
        <div className="px-3 pt-2">
          <p className="text-sm font-semibold">{likes.toLocaleString()} likes</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between px-2 pt-2">
          <div className="flex space-x-4">
            <button className="text-green-400" id={id.toLocaleString() + "like"}>
              <Heart className="h-6 w-6" />
            </button>
            <button className="text-gray-500" id={id.toLocaleString() + "comment"}>
              <MessageCircle className="h-6 w-6" />
            </button>
            <button className="text-gray-500" id={id.toLocaleString() + "share"}>
              <Send className="h-6 w-6" />
            </button>
          </div>
          <button className="text-gray-500" id={id.toLocaleString() + "save"}>
            <Bookmark className="h-6 w-6" />
          </button>
        </div>

        {/* Comments */}
        {/* <div className="px-3 pt-1 pb-2">
          <button className="text-sm text-gray-500">View all comments</button>
        </div> */}

        {/* Add Comment */}
        {/* <div className="flex items-center px-3 py-2 border-t border-gray-100">
          <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-4 w-4 text-gray-500" />
          </div>
          <input type="text"  placeholder="Add a comment..." className="flex-1 ml-3 text-sm border-none outline-none" />
        </div> */}
      </div>

     
    </div>
  )
}

