'use client'
import { useState } from "react";
import './popup.css';


type ModalProps = {
    buttonLabel: string
    techName: string
    techDesc: string
    sourceCode: string
    codeDesc: string
    result: string
    docLink: string
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
                    <div className="modal_result">
                        <h1>解説</h1>
                        <h2>{props.techName}</h2>
                        <p>{props.techDesc}</p>
                        <h3>コード</h3>
                        <p className="codeblok">{props.sourceCode}</p>
                        <h3>実行結果</h3>
                        <p className="codeblok">{props.result}</p>
                        <h3>コード解説</h3>
                        <p>{props.codeDesc}</p>
                        <h3>公式ドキュメント</h3>
                        <p>{props.docLink}</p>
                        <button className="closeBtn" onClick={toggleModal}>閉じる</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Popup