import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Link, router } from 'expo-router';
import { View, Text } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView>
      {/* llamar al modal con un Link */}
      <Link asChild href="/modal/modal-window" className="mx-4">
        <Text className="text-light-text dark:text-dark-text my-2 text-xl">
          Abrir Modal 1
        </Text>
      </Link>
      {/* Abrir el modal con un botton ejecutando el metodo onPress */}
      <ThemedButton
        onPress={() => router.push('/modal/modal-window')}
        className="mx-4"
      >
        Abrir modal 1
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;