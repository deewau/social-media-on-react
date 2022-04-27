import post from './Post.module.css'

const Post = (props) => {
  return (
    <div className={post.item}>
      <img src="https://www.coogfans.com/uploads/db5902/original/3X/8/1/81173237ffa580ef710b0862fdddaac163274db1.jpeg" alt="" />
      {props.message}
      <div>
        <span>Like - {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post


