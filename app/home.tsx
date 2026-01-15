import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function Home() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Dashboard test again </Text>
      <Button title="Logout" onPress={() => router.replace('/')} />
    </View>
  );
}
