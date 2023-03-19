import {
  extendTheme,
  defineStyle,
  defineStyleConfig,
  withDefaultColorScheme,
} from '@chakra-ui/react';
import '@fontsource/playfair-display';
import '@fontsource/source-sans-pro';

const theme = extendTheme({
  colors: {
    pretty: {
      50: '#FEFFED',
    },
  },
  fonts: {
    heading: `'Playfair Display', 'sans-serif'`,
    text: `'Source Sans Pro','sans-serif'`,
  },
});

withDefaultColorScheme({
  colorScheme: 'pretty',
});

export default theme;
