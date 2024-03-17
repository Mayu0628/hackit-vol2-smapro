'use client'
import { useState } from "react";
import './popup.css';


type ModalProps = {
    buttonLabel: string
}

const Popup: React.FC<ModalProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button onClick={toggleModal}>
                {props.buttonLabel}
            </button>
            {isOpen && (
                <div className="overlay">
                    <div className="modal">
                        <h1>解説</h1>
                        <p>以下解説</p>
                        <button className="closeBtn" onClick={toggleModal}>閉じる</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Popup