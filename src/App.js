import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Home';
import ToyForm from './ToyForm';

import OrdersForm from './OrdersForm';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add-toy" element={<ToyForm/>}/>
      <Route path="/:id/update-toy" element={<OrdersForm/>}/>

    </Routes>
       
    </BrowserRouter>
  );
}

export default App;
