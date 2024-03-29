import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Classes from './Modal.module.css'

const Backdrop =(props)=>{
    return <div className={Classes.backdrop}/>;

}
const ModalOverlay =(props)=>{
    return (
        <div className={Classes.modal}>
            <div className={Classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

function Modal(props) {
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop/>,portalElement)}
        {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
        )}
    </Fragment>
  )
}

export default Modal