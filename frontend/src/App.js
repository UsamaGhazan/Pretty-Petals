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
import HomeScreen from './Screens/HomeScreen';
import CasualScreen from './Screens/CasualScreen';

console.log('App is being executed');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/casual" element={<CasualScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
