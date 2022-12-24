import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Paragraph } from "react-native-paper";

const CreateCard = () => {
  return (
    <View
      style={{
        margin: 45,
        alignSelf: "center",
        marginTop: 35,
        marginBottom: -10,
      }}
    >
      <View style={Styles.container}>
        <View style={Styles.leftContainer}>
          <Text style={Styles.pinkContainer}>2.5 C</Text>
        </View>

        <View>
          <Text style={Styles.headerText}>Pie Fridge</Text>
          <Paragraph style={Styles.text}>
            Amet Minimi mollit deserunt unillamco est sit amet
          </Paragraph>
          <Text style={Styles.timeStamp}>1 min ago</Text>
        </View>
      </View>

      <View style={Styles.container}>
        <View style={Styles.leftContainer}>
          <Text style={Styles.pinkContainer}>1 C</Text>
        </View>

        <View>
          <Text style={Styles.headerText}>Pie Warmer Right</Text>
          <Paragraph style={Styles.text}>
            Amet Minimi mollit deserunt unillamco est sit amet
          </Paragraph>
          <Text style={Styles.timeStamp}>2 min ago</Text>
        </View>
      </View>
    </View>
  );
};
export default CreateCard;

const Styles = StyleSheet.create({
  container: {
    alignContent: "center",
    margin: 12,
    backgroundColor: "#FAF9F6",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    height: 150,
    justifyContent: "space-between",
    width: 340,
  },
  leftContainer: {
    backgroundColor: "rgb(255, 182, 193)",
    height: 80,
    width: 80,
    marginTop: 20,
    marginLeft: 10,
    // padding:10
  },
  rightContainer: {
    //backgroundColor:'rgb(255, 182, 193)',
    height: 50,
    width: 20,
    // marginTop:40,
    justifyContent: "space-around",
    marginLeft: 30,
    marginRight: 20,
  },
  text: {
    fontSize: 10,
    textAlign: "center",
    //margin:10,
    marginTop: 15,
    marginLeft: 9,
    marginRight: 10,
  },
  headerText: {
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 20,
  },
  pinkContainer: {
    color: "red",
    margin: 22,
  },
  timeStamp: {
    marginLeft: 7,
  },
});
