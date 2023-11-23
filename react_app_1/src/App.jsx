import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewThread from './pages/NewThread/NewThread';
import TopPage from './pages/TopPage/TopPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={TopPage} />
        <Route path="/NewThread" Component={NewThread} />
    </Routes>
    </BrowserRouter >
  );

}

export default App;
