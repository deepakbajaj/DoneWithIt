import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  console.log(useDeviceOrientation());
  // let x = 1;
  // const handlePress = () => console.log("Text Pressed");
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          height: "30%",
          width: "50%",
        }}></View>
      {/* <Button
        color={"orange"}
        title="Click me"
        onPress={() =>
          Alert.prompt("Myprompt", "Mypromptmsg", (text) => console.log(text))
        }
      /> */}
      {/* <Text>Hello react native</Text>
      <Touch onPress={() => console.log("Deepak bajaj")}>
        <Image
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </Touch>
      <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: Platform.OS === "android" ? 200 : 0,
  },
});
