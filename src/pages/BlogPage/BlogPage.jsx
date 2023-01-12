import styles from './BlogPage.module.scss'
import { useEffect } from "react"
import PostCard from "../../components/PostCard/PostCard"
import { useLazyGetPostsQuery } from "../../store/posts/posts.api"
import Loader from '../../components/Loader/Loader'

export default function BlogPage() {

  const [getPosts, { isLoading, data: posts }] = useLazyGetPostsQuery()

  useEffect(() => {
    getPosts()
  }, [posts, getPosts])

  return (
    <>
      {isLoading ? <Loader />
        : 
        <div>
          <h1 className={styles.pageTitle}>Блог</h1>
          <div className={styles.postList}>
            {posts?.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      }
    </>
  )
}