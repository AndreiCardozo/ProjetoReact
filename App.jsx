import { useState } from 'react';
import { Header } from './components/Header';
import { Body } from './components/Body';

import styles from '../src/App.module.css';

import './global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { Home } from './pages/Home/Home';
import { Carro } from './pages/Carro/Carro';
import { Moto } from './pages/Moto/Moto';
import { Mansoes } from './pages/Mansoes/Mansoes';
import { Vips } from './pages/Vips/Vips';
import { Outros } from './pages/Outros/Outros';
import { Carrinho } from './pages/Carrinho/Carrinho';

export function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <ChakraProvider>
      <Router>
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carros" element={<Carro carrinho={carrinho} setCarrinho={setCarrinho} />} />
            <Route path="/motos" element={<Moto />} />
            <Route path="/mansoes" element={<Mansoes />} />
            <Route path="/vips" element={<Vips />} />
            <Route path="/outros" element={<Outros />} />
            <Route path="/carrinho" element={<Carrinho carrinho={carrinho} />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  )
}
