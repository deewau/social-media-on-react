import n from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={n.nav}>
      <div>
        <a href="" className={n.item}>Profile</a>
      </div>
      <div>
        <a href="" className={n.item}>Messages</a>
      </div>
      <div>
        <a href="" className={n.item}>News</a>
      </div>
      <div>
        <a href="" className={n.item}>Music</a>
      </div>
      <div>
        <a href="" className={n.item}>Settings</a>
      </div>
    </nav>
  )
}

export default Navbar