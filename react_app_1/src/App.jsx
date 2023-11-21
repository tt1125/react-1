import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Threads from './components/Threads/Threads';

function App() {

const [ThreadsData , setThreadsData] = useState([])

  useEffect(()=>{
    fetch("http://127.0.0.1:3658/m1/416276-0-default/threads?offset=20")
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
