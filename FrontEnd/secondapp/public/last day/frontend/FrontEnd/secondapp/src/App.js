
import './App.css';
import Navbar from './Components/Navbar';
import Add from './Components/Add';
import View from './Components/View';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
        <Navbar/>
        
        <Routes>


        
        <Route path='/add' element={<Add data={{ename:"",eposition:"",esalary:""}}method="post"/>}/>
        <Route path='/vi' element={<View/>}/>

        </Routes>
    
    </div>
  );
}

export default App;
