import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Onboarding } from '../components/Onboarding';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

declare global {
  interface Window {
    frameworkReady?: () => void;
  }
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Check if it's the first launch
        const hasLaunched = await AsyncStorage.getItem('hasLaunched');
        setIsFirstLaunch(hasLaunched === null);
        
        // Artificially delay for a smoother splash screen
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setIsReady(true);
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    window.frameworkReady?.();
  }, []);

  if (!isReady || isFirstLaunch === null) {
    return null;
  }

  if (isFirstLaunch) {
    return <Onboarding onComplete={() => setIsFirstLaunch(false)} />;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </>
  );
}