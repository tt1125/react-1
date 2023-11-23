import { useState } from "react";
import Header from "../../components/Header/Header";
import './NewThread.css';

function NewThread() {
    const [title, setTitle] = useState("");

    const handleTitleChange = (e) => {
        const inputValue = e.target.value;
        setTitle(inputValue);
    };

    const postNewThread = async (threadTitle) => {
        try {
            const response = await fetch('https://railway.bulletinboard.techtrain.dev/threads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: threadTitle }),
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('New thread created:', data);
                // 新しいスレッドが作成されたら、dataには作成されたスレッドに関する情報が含まれることがあります
            } else {
                console.error('Failed to create new thread');
                // エラーの場合、エラーを処理するためのコードをここに追加します
            }
        } catch (error) {
            console.error('Error creating new thread:', error);
            // ネットワークエラーなどの例外が発生した場合、ここでそれを処理します
        }
    };

    const handleButtonClick = () => {
        postNewThread(title);
    };
    
    return (
        <>
            <Header />
            <p className="newThread">スレッド新規作成</p>
            <div className="NewThreadContainer">
                <input type="text" className="newThreadText" value={title} onChange={handleTitleChange} />
            </div>
            <div className="NewThreadContainer2">
                <a href="/" className="ToTop">Topに戻る</a>
                <button className="postButton" onClick={handleButtonClick}>作成</button>
            </div>
        </>
    );
}

export default NewThread;
