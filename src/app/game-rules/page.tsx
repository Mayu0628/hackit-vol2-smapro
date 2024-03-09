'use client'
import { useState } from "react";

type ModalProps = {
    buttonLabel: string
}

const GameRules: React.FC<ModalProps> = (props) => {
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
                        <h1>遊び方</h1>
                        <p>タイピングしろ</p>
                        <button onClick={toggleModal}>閉じる</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default GameRules