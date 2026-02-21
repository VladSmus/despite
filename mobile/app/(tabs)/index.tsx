import { Button, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import * as Sentry from "@sentry/react-native";

const ChatsTab = () => {
  const router = useRouter();
  return (
    <ScrollView
      className="bg-surface"
      contentInsetAdjustmentBehavior="automatic"
    >
      {__DEV__ && (
        <Button
          title="Try Sentry!"
          onPress={() => {
            Sentry.captureException(new Error("Test error from dev"));
          }}
        />
      )}
      <Text className="text-white">Chats Tab</Text>
    </ScrollView>
  );
};

export default ChatsTab;
