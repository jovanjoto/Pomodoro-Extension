
import { useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import "./App.css";
import TimeButton from "./components/TimeButton";
import Header from "./components/Header";
import Body from "./components/Body";



function App() {

  return (
    <main className="flex flex-col items-center justify-center">
        <div className="flex items-center bg-red-500 h-12 w-full px-5 "><Header/></div>
        <div><Body/></div>
    </main>
  );
}
// className="flex items-center justify-center flex-col h-16 bg-red-500 
export default App;
