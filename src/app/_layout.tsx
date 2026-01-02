import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                headerTintColor: "#1a2b49",
            }}
        >
            <Stack.Screen
                name="login"
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="home"
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name="recuperarSenha"
                options={{ headerShown: false }}
            />

        </Stack>
        
    );
}