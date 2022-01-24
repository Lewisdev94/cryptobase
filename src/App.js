import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Header from './Components/Header'
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import Footer from "./Components/Footer";



function App() {



  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} exact />
          <Route path='/coins' element={<Navigate to="/" />} exact />
          <Route path='*' element={<Navigate to="/" />} exact />





          <Route path='/coins/:id' element={<CoinPage />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
