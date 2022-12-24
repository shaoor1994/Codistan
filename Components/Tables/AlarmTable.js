import React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const AlarmTable = () => {
return (
	<DataTable style={styles.container}>
	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title>Device name</DataTable.Title>
		<DataTable.Title>Date</DataTable.Title>
		<DataTable.Title>Time</DataTable.Title>
	</DataTable.Header>
	<DataTable.Row>
		<DataTable.Cell>Ben & Jerrys</DataTable.Cell>
		<DataTable.Cell>01/28/17</DataTable.Cell>
		<DataTable.Cell>7:30 am</DataTable.Cell>
	</DataTable.Row>

	<DataTable.Row>
		<DataTable.Cell>Coffee Right</DataTable.Cell>
		<DataTable.Cell>09/04/12</DataTable.Cell>
		<DataTable.Cell>7:30 am</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Row>
		<DataTable.Cell>Coffee Right</DataTable.Cell>
		<DataTable.Cell>04/04/18</DataTable.Cell>
		<DataTable.Cell>5:40 am</DataTable.Cell>
	</DataTable.Row>
	</DataTable>
);
};

export default AlarmTable;

const styles = StyleSheet.create({
container: {
	padding: 15,
},
tableHeader: {
	backgroundColor: '#DCDCDC',
},
});
