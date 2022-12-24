import CodeCharts from "./Components/Charts/Chart";
import CreateCard from "./Components/Cards/Devices";
import HeaderCustom from "./Components/Header/Header";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import AlarmTable from "./Components/Tables/AlarmTable";
import ProbeTable from "./Components/Tables/ProbeTable";

export default function App() {
  return (
    <View style={styles.container}>
      {/* header is Static above Scroll View */}
      <HeaderCustom />
      <ScrollView>
        <Text
          style={{
            marginTop: 60,
            marginLeft: 20,
            marginTop: 55,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Welcome, Metford
        </Text>
        <Text style={{ marginTop: 20, marginLeft: 20 }}>
          Here's what's happening in your Cake Account
        </Text>
        <CreateCard />
        <CodeCharts />
        <Text style={{ marginLeft: 15, fontWeight: "bold", fontSize: 30 }}>
          Alarm Logs
        </Text>
        <AlarmTable />
        <Text style={{ marginLeft: 15, fontWeight: "bold", fontSize: 30 }}>
          Probe
        </Text>
        <ProbeTable />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    alignSelf: "center",
  },
});
