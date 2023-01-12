import styles from './PostCard.module.scss'

import defaultImg from '../../assets/img/default.png'
import Card from '../ui/Card/Card'

export default function PostCard({ post }) {
  return (

    
    <Card>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <img
        src={post.img}
        alt="default"
        width={'100%'}
        height={250}
      />
      </div>

      <p className={styles.postTitle}>{post.title}</p>
      <p className={styles.postBody}>
        {post.body}
      </p>
      <p className={styles.postDate}>{post.date}</p>
    </Card>



  )
}