import React from "react";
import { StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

const ProbeTable = () => {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Device name</DataTable.Title>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title>Temp</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>Pie Fridge</DataTable.Cell>
        <DataTable.Cell>10/12/17</DataTable.Cell>
        <DataTable.Cell>2.5 C</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Pie Warmer Right</DataTable.Cell>
        <DataTable.Cell>12/12/18</DataTable.Cell>
        <DataTable.Cell>1 C</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Sandwich2</DataTable.Cell>
        <DataTable.Cell>12/04/20</DataTable.Cell>
        <DataTable.Cell>2.8 C</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default ProbeTable;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
});
