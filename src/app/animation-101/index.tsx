import { View, Text } from 'react-native';
import ThemedButton from '../../presentation/shared/ThemedButton';

const Animation101Screen = () => {
  return (
    <View>
      <Text>Animation101Screen</Text>
      <ThemedButton className="my-5" onPress={()=>console.log("Fade In") }>FadeIn</ThemedButton>
      <ThemedButton className="my-5" onPress={()=>console.log("Fade out") }>FadeIn</ThemedButton>
    </View>
  );
};
export default Animation101Screen;
