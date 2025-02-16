import { View, Text, StyleSheet, useColorScheme, ScrollView } from 'react-native';
import { colors, typography, spacing, borderRadius } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';

export default function Dashboard() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const peakPerformanceScore = 85;
  const recoveryStatus = 'Optimal';

  return (
    <ScrollView 
      style={[
        styles.container,
        { backgroundColor: isDark ? colors.darkBackground : colors.background }
      ]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={[
          typography.heading,
          { color: isDark ? colors.darkText : colors.text }
        ]}>
          Dashboard
        </Text>
      </View>

      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.performanceCard}
      >
        <Text style={[typography.subheading, styles.whiteText]}>
          Peak Performance Score
        </Text>
        <Text style={[typography.heading, styles.scoreText]}>
          {peakPerformanceScore}
        </Text>
        <Text style={[typography.body, styles.whiteText]}>
          Recovery Status: {recoveryStatus}
        </Text>
      </LinearGradient>

      <View style={styles.metricsGrid}>
        <View style={[
          styles.metricCard,
          { backgroundColor: isDark ? colors.darkCard : colors.card }
        ]}>
          <Text style={[
            typography.caption,
            { color: isDark ? colors.darkText : colors.text }
          ]}>
            Strength
          </Text>
          <Text style={[
            typography.subheading,
            { color: colors.strength }
          ]}>
            +12%
          </Text>
        </View>

        <View style={[
          styles.metricCard,
          { backgroundColor: isDark ? colors.darkCard : colors.card }
        ]}>
          <Text style={[
            typography.caption,
            { color: isDark ? colors.darkText : colors.text }
          ]}>
            Explosiveness
          </Text>
          <Text style={[
            typography.subheading,
            { color: colors.explosive }
          ]}>
            +8%
          </Text>
        </View>

        <View style={[
          styles.metricCard,
          { backgroundColor: isDark ? colors.darkCard : colors.card }
        ]}>
          <Text style={[
            typography.caption,
            { color: isDark ? colors.darkText : colors.text }
          ]}>
            Endurance
          </Text>
          <Text style={[
            typography.subheading,
            { color: colors.endurance }
          ]}>
            +15%
          </Text>
        </View>

        <View style={[
          styles.metricCard,
          { backgroundColor: isDark ? colors.darkCard : colors.card }
        ]}>
          <Text style={[
            typography.caption,
            { color: isDark ? colors.darkText : colors.text }
          ]}>
            Mobility
          </Text>
          <Text style={[
            typography.subheading,
            { color: colors.mobility }
          ]}>
            +5%
          </Text>
        </View>
      </View>

      <View style={[
        styles.nextWorkoutCard,
        { backgroundColor: isDark ? colors.darkCard : colors.card }
      ]}>
        <Text style={[
          typography.subheading,
          { color: isDark ? colors.darkText : colors.text }
        ]}>
          Next Workout
        </Text>
        <Text style={[
          typography.body,
          { color: isDark ? colors.darkText : colors.text }
        ]}>
          Explosive Strength Training
        </Text>
        <Text style={[
          typography.caption,
          { color: isDark ? colors.darkText : colors.text }
        ]}>
          Today • 5:00 PM
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: spacing.lg,
    paddingTop: spacing.xl + spacing.lg,
  },
  performanceCard: {
    margin: spacing.md,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  whiteText: {
    color: colors.card,
  },
  scoreText: {
    color: colors.card,
    fontSize: 48,
    marginVertical: spacing.sm,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: spacing.md,
    gap: spacing.md,
  },
  metricCard: {
    flex: 1,
    minWidth: '45%',
    padding: spacing.md,
    borderRadius: borderRadius.md,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  nextWorkoutCard: {
    margin: spacing.md,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
});