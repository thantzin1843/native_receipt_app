import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown:false,
    }} >
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
    </Stack>
  );
}


// https://youtube.com/shorts/Pbgt-v2tu_8?si=75ukKTP_Ta0KjCKp