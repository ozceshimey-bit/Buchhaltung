import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  FlatList, 
  TouchableOpacity 
} from 'react-native';

export default function App() {
  // Beispiel-Daten für Ausgaben
  const [ausgaben, setAusgaben] = useState([
    { id: '1', titel: 'Einkauf Supermarkt', betrag: 45.50 },
    { id: '2', titel: 'Tanken', betrag: 60.00 },
    { id: '3', titel: 'Miete', betrag: 850.00 },
  ]);

  // Berechnung der Gesamtsumme
  const gesamtSumme = ausgaben.reduce((summe, item) => summe + item.betrag, 0);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{item.titel}</Text>
      <Text style={styles.itemAmount}>{item.betrag.toFixed(2)} €</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Bereich */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mein Haushaltsbuch</Text>
      </View>

      {/* Übersichtskarte */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Gesamtausgaben</Text>
        <Text style={styles.summaryValue}>{gesamtSumme.toFixed(2)} €</Text>
      </View>

      {/* Liste der Ausgaben */}
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Letzte Buchungen</Text>
        <FlatList
          data={ausgaben}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
        />
      </View>

      {/* Hinzufügen Button (Platzhalter) */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#6200EE',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  summaryCard: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 4, // Schatten für Android
    shadowColor: '#000', // Schatten für iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#B00020', // Rot für Ausgaben
    marginTop: 5,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  listContent: {
    paddingBottom: 100,
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    color: '#333',
  },
  itemAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#03DAC6',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  fabText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
});
