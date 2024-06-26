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
            } else {
                console.error('Failed to create new thread');
            }
        } catch (error) {
            console.error('Error creating new thread:', error);
        }
    };

    const handleButtonClick = () => {
        if (title === "") {
            alert("タイトルを入力してください")
        }
        else {
            postNewThread(title);
            window.location.href = "/";
        }
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
