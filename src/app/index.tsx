import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    setCount((currentCount) => currentCount - 1);
  };

  const increaseCount = () => {
    setCount((currentCount) => currentCount + 1);
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.content}>
          <ThemedText type="subtitle">Лічильник</ThemedText>
          <ThemedText themeColor="textSecondary">Натискай кнопки, щоб змінити число</ThemedText>

          <ThemedView type="backgroundElement" style={styles.counterCard}>
            <ThemedText style={styles.count}>{count}</ThemedText>

            <ThemedView type="backgroundElement" style={styles.actions}>
              <Pressable
                accessibilityLabel="Зменшити значення"
                accessibilityRole="button"
                onPress={decreaseCount}
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
                <ThemedText style={styles.buttonText}>−</ThemedText>
              </Pressable>

              <Pressable
                accessibilityLabel="Збільшити значення"
                accessibilityRole="button"
                onPress={increaseCount}
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
                <ThemedText style={styles.buttonText}>+</ThemedText>
              </Pressable>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
    paddingHorizontal: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.three,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.two,
  },
  counterCard: {
    width: '100%',
    maxWidth: 360,
    marginTop: Spacing.four,
    padding: Spacing.five,
    borderRadius: Spacing.four,
    alignItems: 'center',
    gap: Spacing.four,
  },
  count: {
    fontSize: 72,
    lineHeight: 80,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    gap: Spacing.three,
  },
  button: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3c87f7',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 32,
    lineHeight: 36,
  },
});
