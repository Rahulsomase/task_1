import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Chart from './Components/Chart';
import Table from './Table';
import Info from './Components/Data';
import Barchart from './Components/Barchart';

function App() {
  
    return(
<BrowserRouter>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/tables" element={<Table />} />
        <Route path="/bar" element={<Barchart />} />
      </Routes>
</BrowserRouter>

    );
    
}

export default App;
