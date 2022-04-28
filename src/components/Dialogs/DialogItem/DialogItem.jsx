import dialogitem from './DialogItem.module.css'

const DialogItem = (props) => {
  return (
    <div>
      <p className={dialogitem.name}>{props.name}</p>
    </div>
  )
}

export default DialogItem