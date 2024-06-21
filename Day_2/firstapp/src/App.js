import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Listmap from './components/Listmap';
import Api from './components/Api';
import SampleUse from './components/SampleUse';
import Cardget from './components/Cardget';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/sign' element={<Signup/>}/>
        <Route path='/sb' element={<StateBasics/>}/>
        <Route path='/ct' element={<Counter/>}/>
        <Route path='/list' element={<Listmap/>}/>
        <Route path='/api' element={<Api/>}/>
        <Route path='/use' element={<SampleUse/>}/>
        <Route path='/card' element={<Cardget/>}/>

        

        


        





    

      </Routes>

    </div>
  );
}

export default App;
