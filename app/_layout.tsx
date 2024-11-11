import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { persistor, store } from "@/redux";
import { Tabs } from "expo-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Tabs
        screenOptions={{
          headerShown: false,
        }}>
          <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
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
  );
}
