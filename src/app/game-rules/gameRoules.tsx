'use client'
import { useState } from "react";
import './gemeRoules.css'
import '@/styles/global.css'

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
            <button onClick={toggleModal} className="subBtn">
                {props.buttonLabel}
            </button>
            {isOpen && (
                <div className="overlay">
                    <div className="modal">
                        <h1>遊び方</h1>
                        <>
                            <br />
                            <strong>コドネコは、技術好きのためのタイピングとクイズを組み合わせたゲームです。<br /><br />
                            <strong>ルール</strong><br />
                            出題されるのは、ある技術に関するソースコード<br />
                            ソースコードをタイピングし、そのコードが何の技術か当てる<br /><br />
                            <strong>スコア獲得方法</strong><br />
                            1タイプ：10スコア<br /><br />
                            ( クイズ正解で追加スコア獲得 )<br />
                            easyコースのクイズ     ：100スコア<br />
                            normalコーズのクイズ：200スコア<br />
                            hardコースのクイズ     ：300スコア<br /><br />
                            制限時間内で最大のタイピング＆クイズ正解を目指そう！</strong><br /><br />
                        </>
                        <button className="closeBtn" onClick={toggleModal}>閉じる</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default GameRules
