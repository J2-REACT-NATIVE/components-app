import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Alert } from 'react-native';

const AlertsScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Two Button Alert', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Three Button Alert', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        //!style: 'cancel',
        style: 'destructive', //destructive no aplica para android, en android solo aplica cancel
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  return (
    <ThemedView margin>
      <ThemedButton className="my-5" onPress={createTwoButtonAlert}>
        2-Button Alert
      </ThemedButton>
      <ThemedButton className="mb-5" onPress={createThreeButtonAlert}>
        3-Button Alert
      </ThemedButton>
    </ThemedView>
  );
};
export default AlertsScreen;
