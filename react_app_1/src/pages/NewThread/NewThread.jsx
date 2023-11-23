import Header from "../../components/Header/Header"
import './NewThread.css'

function NewThread() {

    return (
        <>
            <Header />
            <p className="newThread">スレッド新規作成</p>
            <div className="NewThreadContainer">
                <input type="text" className="newThreadText" />
            </div>
        </>
    )
}

export default NewThread