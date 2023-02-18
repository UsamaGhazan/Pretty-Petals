import { extendTheme, defineStyle, defineStyleConfig } from '@chakra-ui/react';
import '@fontsource/playfair-display';
import '@fontsource/source-sans-pro';


const theme = extendTheme({
  
  fonts: {
    heading: `'Playfair Display', 'sans-serif'`,
    text: `'Source Sans Pro','sans-serif'`,
  },
});

export default theme;
