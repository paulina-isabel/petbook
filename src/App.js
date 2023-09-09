import './App.css';
import HomeView from './components/HomeView/HomeView';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeView />}/>
      </Routes>
    </div>
  );
}

export default App;