import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Threads from './components/Threads/Threads';

function App() {

const [ThreadsData , setThreadsData] = useState([])

  useEffect(()=>{
    fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=0")
   .then(response => response.json())
   .then(result => { console.log("APIを取得しました",result); setThreadsData(result) ;})
  },[])

  return (
    <>
      <Header />
      <body>
        <p className='newThread'>新着スレッド</p>
        {ThreadsData.map( (ThreadData) => {return (<Threads title = {ThreadData.title}/>)})}
    </body >
    </>
  );
}

export default App;
