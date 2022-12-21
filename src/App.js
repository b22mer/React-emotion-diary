
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import New from './pages/New';
import Diary from './pages/Diary';
import './App.css';
import RouterTest from './components/RouterTest';


function App() {
  return (
<BrowserRouter>
    <div className="App">
      <h1>app test</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/diary" element={<Diary/>}/>
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
      <RouterTest></RouterTest>
    </div>
</BrowserRouter>
  );
}

export default App;
