import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Userlist from './components/Userlist';
import Update from './components/Update';

function App() {
  return (<>
    <h1>REDUX APP</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Userlist/>} />
        <Route path="/adduser" element={<Add/>} />
        <Route path="/update/:id" element={<Update/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
