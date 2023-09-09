import './App.css';
import HomeView from './components/HomeView/HomeView';

import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomeView />}/>
      </Routes>
    </div>
  );
}

export default App;