import { Text, View } from 'react-native';
import { AppProvider } from './providers';

export default function App() {
  return (
    <AppProvider>
      <View className="flex-1 justify-center items-center">
        <Text className="font-semibold">React Native Misium</Text>
      </View>
    </AppProvider>
  );
}
