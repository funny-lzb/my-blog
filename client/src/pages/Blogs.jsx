import BlogItems from '../components/BlogItems'
import BlogSearchBar from '../components/BlogSearchBar'

export default function Blogs() {
  return (
    <div className='blog'>
      <BlogSearchBar />
      <BlogItems />
    </div>
  )
}
