import mp from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={mp.posts}>
        <Post message='Hey, how are you?' likesCount='20' />
        <Post message='It is my first program' likesCount='15' />
      </div>
    </div>
  )
}

export default MyPosts