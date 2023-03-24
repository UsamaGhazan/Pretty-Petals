import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  Container,
  Divider,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './Components/Navbar';
import HomeScreen from './Screens/HomeScreen';
import CasualScreen from './Screens/CasualScreen';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/casual" element={<CasualScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
