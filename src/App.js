import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Greeting from './components/Greeting';

//functionalities for the App component

function App() {
  return (
    <>
      <div className="App"> 
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
