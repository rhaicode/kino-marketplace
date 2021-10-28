import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../config/styles/theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
