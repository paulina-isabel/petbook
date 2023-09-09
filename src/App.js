import './App.css';
import HomeView from './components/HomeView/HomeView';
import Form from './components/Forms/Form';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';



function App() {
  
  return (
    <div className="App">
      <Header />
      <Form />
      <Routes>
        <Route path="/" element={<HomeView />}/>
      </Routes>
    </div>
  );
}

export default App;