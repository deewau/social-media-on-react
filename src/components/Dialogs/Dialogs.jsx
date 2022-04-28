import DialogItem from './DialogItem/DialogItem'
import dialogs from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.dialogsItems}>
        <DialogItem name='Andrew' className={dialogs.item} />
        <DialogItem name='Vlad' className={dialogs.item} />
        <DialogItem name='Lexus' className={dialogs.item} />
        <DialogItem name='Oleg' className={dialogs.item} />
        <DialogItem name='Valery' className={dialogs.item} />
      </div>
      <div className={dialogs.messages}>
        <div className={dialogs.message}>
          <p>Hello, how are you</p>
        </div>
        <div className={dialogs.message}>
          <p>Heeeeey</p>
        </div>
        <div className={dialogs.message}>
          <p>Yo</p>
        </div>
        <div className={dialogs.message}>
          <p>What's up body?</p>
        </div>
      </div>
    </div>
  )
}

export default Dialogs