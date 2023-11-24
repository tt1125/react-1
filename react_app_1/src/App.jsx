import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewThread from './pages/NewThread/NewThread';
import TopPage from './pages/TopPage/TopPage';
import ThreadPosts from './pages/ThreadPosts/ThreadPosts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/NewThread" element={<NewThread />} />
        <Route path="/:id" element={<ThreadPosts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
