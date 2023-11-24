import './ThreadPosts.css'
import Header from "../../components/Header/Header"
import Posts from '../../components/Posts/Posts'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ThreadPosts() {

    const [ThreadsData, setThreadsData] = useState([])
    const [sentence, setSentence] = useState("");
    const [posts, setPosts] = useState([]);
    const { id } = useParams();
    const [title, setTitle] = useState("")
    const [titleName, setTitleName] = useState("")

    useEffect(() => {
        fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=0")
            .then(response => response.json())
            .then(result => {
                setThreadsData(result);
                const findTitle = result.find(threads => threads.id === id);
                if (findTitle) {
                    setTitle(findTitle.title);
                    setTitleName(findTitle.title); // titleNameにも設定
                }
            })
            .catch(error => console.error('スレッド情報の取得エラー:', error));
    }, [id]);

    useEffect(() => {
        console.log("test", ThreadsData);
        const findTitle = ThreadsData.find(threads => threads.id === id);
        setTitle(findTitle);
        console.log("タイトルです", title); 
    }, [ThreadsData])

    const submitNewPost = async () => {
        try {
            const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${id}/posts`, {
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
        submitNewPost();
        window.location.href = `/${id}`;
    };

    const handleSentenceChange = (e) => {
        const inputValue = e.target.value;
        setSentence(inputValue);
    };

    useEffect(() => {
        fetch(`https://railway.bulletinboard.techtrain.dev/threads/${id}/posts`)
            .then(res => res.json())
            .then(data => {
                setPosts(data.posts);
                console.log("投稿内容を取得しました", data.posts);
            });
    }, [id]); // idが変更された場合に再度実行される




    return (
        <>
            <Header />
            <div className="postContainer1">
                <div>
                    <span className="postTitle">{}</span>
                    {posts.map((posts) => { return (<Posts post={posts.post} />) })}
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