import { NavLink } from 'react-router-dom'
import dialogItem from './DialogItem.module.css'

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id
  return (
    <div>
      <NavLink to={path}>
        <p className={dialogItem.dialog}> {props.name} </p>
      </NavLink>
    </div>
  )
}

export default DialogItem