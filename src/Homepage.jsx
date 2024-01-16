import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Header } from './frontend/components/Header/Header'
export const Homepage = () => {
  return (
    
    <ChakraProvider>
        <Header/>
    </ChakraProvider>
  )
}
