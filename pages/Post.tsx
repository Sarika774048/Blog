
import PostCards from '../components/PostCards'
import img1 from '../public/img1.png'
import img2 from '../public/img2.jpeg'

const Post = () => {
  return (
    <div className="space-y-10 p-10">
      <PostCards
        title="Building My First React App"
        author="John Doe"
        date="2025-11-05"
        description="I’ll walk you through how I built my first React project and what I learned along the way."
        image={img1}
      />

      <PostCards
        title="Tailwind CSS Tips for Beginners"
        author="Jane Smith"
        date="2025-10-20"
        description="Here are some beginner-friendly Tailwind tips that can help you style faster and cleaner."
        image={img2}
      />
    </div>
  )
}

export default Post
