import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Sales from './pages/sales/Sales';
import Client from './pages/client/Client';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/client" element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
