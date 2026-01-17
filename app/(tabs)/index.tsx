import { ScrollView, View, Text } from 'react-native';
import Calendar from '@/components/homePage/calendar';

export default function HomeScreen() {
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 120 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>
          Home Page
        </Text>

        {/* Calendar Section */}
        <Calendar />
      </View>
    </ScrollView>
  );
}
