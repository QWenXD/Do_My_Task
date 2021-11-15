import CreateGame from './create-game/CreateGame'
import './ModalWindowContainer.css'
import CommonButton from './CommonButton'
import {useState} from 'react'
import Modal from '@material-ui/core/Modal';
import CancelIcon from '@material-ui/icons/Cancel';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

const ModalWindowContainer = ({modalContent, open, setOpen}) => {
    const [hover, setHover] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        setOpen(false)
        console.log("close triggered")
    }


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className="modal-content-container">
                    <div className="modal-content">
                        <div className="close-btn">
                            <div className="close-icon" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                                {!hover?
                                    <HighlightOffIcon fontSize="large" onClick={handleClose}/>
                                    :
                                    <CancelIcon fontSize="large" onClick={handleClose}/>}
                            </div>
                        </div>

                        {modalContent()}

                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default ModalWindowContainer
