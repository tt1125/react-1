import './App.css';
import Header from './components/Header/Header';
import Threads from './components/Threads/Threads';

function App() {
  return (
    <>
      <Header />
      <body>
        <p className='newThread'>新着スレッド</p>
        <Threads/><Threads/><Threads/>
    </body >
    </>
  );
}

export default App;
