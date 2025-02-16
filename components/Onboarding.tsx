import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { colors, typography, spacing, borderRadius } from '../app/theme';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const handleComplete = async () => {
    await AsyncStorage.setItem('hasLaunched', 'true');
    onComplete();
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={StyleSheet.absoluteFill}
      />
      
      <Animated.View 
        entering={FadeIn.duration(1000)}
        exiting={FadeOut}
        style={styles.content}
      >
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2874&auto=format&fit=crop' }}
          style={styles.backgroundImage}
        />
        
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome to Ascend</Text>
          
          <View style={styles.features}>
            <FeatureItem
              title="Track Your Progress"
              description="Monitor strength, endurance, and mobility gains"
              icon="📈"
            />
            <FeatureItem
              title="Smart Recovery"
              description="Optimize rest periods with AI-powered insights"
              icon="🔄"
            />
            <FeatureItem
              title="Performance Analytics"
              description="Get detailed insights into your training"
              icon="📊"
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleComplete}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

function FeatureItem({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <Animated.View
      entering={FadeIn.duration(1000).delay(500)}
      style={styles.featureItem}
    >
      <Text style={styles.featureIcon}>{icon}</Text>
      <View style={styles.featureText}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>{description}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width,
    height,
    opacity: 0.5,
  },
  content: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: spacing.xl,
    justifyContent: 'space-between',
  },
  title: {
    ...typography.heading,
    fontSize: 42,
    color: colors.card,
    textAlign: 'center',
    marginTop: height * 0.15,
    marginBottom: spacing.xl,
  },
  features: {
    gap: spacing.lg,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    gap: spacing.md,
  },
  featureIcon: {
    fontSize: 24,
  },
  featureText: {
    flex: 1,
  },
  featureTitle: {
    ...typography.subheading,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  featureDescription: {
    ...typography.body,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.card,
    padding: spacing.lg,
    borderRadius: borderRadius.round,
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  buttonText: {
    ...typography.subheading,
    color: colors.primary,
  },
});