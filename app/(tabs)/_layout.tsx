import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDark ? colors.darkCard : colors.card,
          borderTopColor: isDark ? colors.darkBorder : colors.border,
        },
        tabBarActiveTintColor: isDark ? colors.darkPrimary : colors.primary,
        tabBarInactiveTintColor: isDark ? colors.darkText : colors.text,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="stats-chart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="training"
        options={{
          title: 'Training',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="barbell" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="recovery"
        options={{
          title: 'Recovery',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="pulse" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}