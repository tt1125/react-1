import './ThreadPosts.css'
import Header from "../../components/Header/Header"
import Posts from '../../components/Posts/Posts'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ThreadPosts() {


    const [sentence, setSentence] = useState("");
    const [posts, setPosts] = useState([]);
    const params = useParams().id;
    const [threadTitle, setThreadTitle] = useState("")
    const [threadId, setThreadId] = useState("")



    const submitNewPost = async () => {
        try {
            const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${params.split('&')[1]}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ post: sentence }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('New post created:', data);
                // 新しい投稿が作成されたら、何かを行う
            } else {
                console.error('Failed to create new post');
                // エラーの場合、エラーを処理するためのコードを追加
            }
        } catch (error) {
            console.error('Error creating new post:', error);
            // ネットワークエラーなどの例外が発生した場合、それを処理する
        }
    };

    const handleButtonClick = () => {
        if (sentence === "") {
            alert("投稿内容を入力してください")
        }
        else {
            submitNewPost();
            window.location.href = `/${threadTitle}&${threadId}`;
        }
    };

    const handleSentenceChange = (e) => {
        const inputValue = e.target.value;
        setSentence(inputValue);
    };

    useEffect(() => {
        console.log("URLからデータを取得しました", params)
        const paramsData = params.split('&')
        console.log("データを分割しました", paramsData);
        setThreadTitle(paramsData[0]);
        setThreadId(paramsData[1]);
        fetch(`https://railway.bulletinboard.techtrain.dev/threads/${paramsData[1]}/posts`)
            .then(res => res.json())
            .then(data => {
                setPosts(data.posts);
                console.log("投稿内容を取得しました", data.posts);
            });
    }, []);

    useEffect(() => {
        console.log("タイトルのstate", threadTitle)
        console.log("IDのState", threadId)
    }, [posts])




    return (
        <>
            <Header />
            <div className="postContainer1">
                <div>
                    <span className="postTitle">{threadTitle}</span>
                    {posts.map((posts, i) => { return (<Posts key={i} post={posts.post} />) })}
                </div>
                <div className='postContainer2'>
                    <input type="text" className='postText' value={sentence} onChange={handleSentenceChange} />
                    <button className='submitPost' onClick={handleButtonClick}>投稿</button>
                </div>
            </div>
        </>
    );
}

export default ThreadPosts