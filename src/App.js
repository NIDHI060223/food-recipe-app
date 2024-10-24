import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './Component/Mainpage';
import Mealinfo from './Component/Mealinfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/:mealid' element={<Mealinfo/>}/>
      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
