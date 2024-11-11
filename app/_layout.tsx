import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { persistor, store } from "@/redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Tabs } from "expo-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient()

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Tabs
          screenOptions={{
            headerShown: false,
          }}>
            <Tabs.Screen
              name="(home)"
              options={{
                title: 'Home',
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="(favorite)"
              options={{
                title: 'Favorite',
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'heart' : 'heart-outline'} color={color} />
                ),
              }}
            />
          </Tabs>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}
