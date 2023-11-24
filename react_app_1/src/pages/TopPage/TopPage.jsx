import { useEffect, useState } from 'react';
import './TopPage.css';
import Header from '../../components/Header/Header';
import Threads from '../../components/Threads/Threads';


function TopPage (){
    const [ThreadsData , setThreadsData] = useState([])

  useEffect(()=>{
    fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=0")
   .then(response => response.json())
   .then(result => { console.log("APIを取得しました",result); setThreadsData(result) ;})
  },[])

  return (
    <>
      <Header/>
      <body>
        <p className='newThread'>新着スレッド</p>
        {ThreadsData.map( (ThreadData) => {return (<Threads title = {ThreadData.title} ThreadId={ThreadData.id}/>)})}
    </body >
    </>
  );
}

export default TopPage