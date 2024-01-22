import React, {useState, useEffect} from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import LoginHero from "../components/LoginHero/LoginHero";
import { LoginTile } from "../components/LoginTile/LoginTile";
import axios from 'axios';
import Footer from "../components/Footer";

function LoginPage() {

  //SQL DATA CALL
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <ChakraProvider>
      <Box>
        <Header loggedOut={true} />

        <LoginHero>
          <LoginTile />
        </LoginHero>
        
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default LoginPage;
