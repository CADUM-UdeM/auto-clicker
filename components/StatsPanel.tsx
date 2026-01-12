import { StyleSheet, Text, View } from 'react-native';

interface StatsPanelProps {
  totalTaps?: number;
  multiplier?: boolean;
  multiplierValue?: number;
}

export default function StatsPanel(props: StatsPanelProps) {
  // Le panneau de stats ne montre pas le bon statut du multiplicateur
  // Le retour visuel pour le multiplicateur actif/inactif ne fonctionne pas
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>
      <Text style={styles.stat}>Total Taps: {props.totalTaps || 0}</Text>
      <Text style={styles.stat}>
        Multiplier: {props.multiplier ? 'Active' : 'Inactive'}
      </Text>
      <Text style={styles.stat}>
        Multiplier Value: {props.multiplierValue || 1}x
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a2a3e',
    padding: 20,
    borderRadius: 10,
    minWidth: 250,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 15,
    textAlign: 'center',
  },
  stat: {
    fontSize: 16,
    color: '#cccccc',
    marginBottom: 8,
  },
});

