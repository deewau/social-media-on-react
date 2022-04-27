import MyPosts from './MyPosts/MyPosts'
import p from './Profile.module.css'

const Profile = () => {
  return (
    <div className={p.content}>
      <div>
        <img
          src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
          alt=""
        />
      </div>
      <div> ava + description</div>
      <MyPosts />
    </div>
  )
}

export default Profile