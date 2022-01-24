import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { RestaurantProvider } from './src/services/restaurants/restaurant-context';
import { LocationProvider } from './src/services/location/location.context';

import Navigator from './src/infrastructure/navigation';

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationProvider>
          <RestaurantProvider>
            <Navigator />
            <ExpoStatusBar style="auto" />
          </RestaurantProvider>
        </LocationProvider>
      </ThemeProvider>
    </>
  );
}
