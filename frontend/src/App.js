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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './Components/Navbar';
import HomeScreen from './Screens/HomeScreen';
import CasualScreen from './Screens/CasualScreen';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/casual" element={<CasualScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
