import { BrowserRouter, useNavigate, Route, Routes } from "react-router-dom"
import Header from './Components/Header'
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import Footer from "./Components/Footer";

import { CryptoState } from './CryptoContext';


function App() {
  const { currency, setCurrency, symbol } = CryptoState()


  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} exact />
          <Route path='*' element={<Homepage />} exact />
          <Route path='/coins/:id' element={<CoinPage />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
