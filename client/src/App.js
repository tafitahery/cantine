import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Sales from './pages/sales/Sales';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
