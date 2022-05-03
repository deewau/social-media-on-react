import DialogItem from './DialogItem/DialogItem'
import dialogs from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {

  let dialogsElements = props.dialogsData
    .map((dialog, idx) => <DialogItem key={idx} name={dialog.name} id={dialog.id} />)
  let messagesElements = props.messagesData
    .map((message, idx) => <Message key={idx} id={message.id} message={message.message} />)

  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={dialogs.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs