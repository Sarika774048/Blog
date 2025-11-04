import React from 'react'
import { ArrowRight } from 'lucide-react'

type Cards = {
    title: string
    author: string
    date: string | Date
    description: string
    image: string
}

const PostCards = ({ title, author, date, description, image }: Cards) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-10 items-stretch bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">

      {/* Text column */}
      <div className="md:w-2/4 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <h3 className="text-xl mb-2">{author}</h3>
        <h2 className="text-gray-600 mb-4">{new Date(date).toLocaleDateString()}</h2>
        <p className="mb-6">{description}</p>
        <button className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">
          Read More <ArrowRight size={16} />
        </button>
      </div>

      {/* Image column */}
      <div className="md:w-3/4 h-96 md:h-auto overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>

    </div>
  )
}

export default PostCards
