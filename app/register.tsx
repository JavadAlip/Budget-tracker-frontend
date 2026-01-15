import { View, Text, TextInput, Button } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Register</Text>

      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />

      <Button title="Send OTP" onPress={() => router.push('/otp')} />
    </View>
  );
}
