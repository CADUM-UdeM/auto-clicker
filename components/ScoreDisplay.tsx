import { StyleSheet, Text, View } from 'react-native';

interface ScoreDisplayProps {
  score?: number;
}

export default function ScoreDisplay(props: ScoreDisplayProps) {
  // Score reçu mais ne se met pas à jour - affichage du score montre une valeur statique
  // Les mises à jour d'état ne déclenchent pas de re-rendus
  const displayScore = 0; // Valeur statique au lieu du score dynamique
  
  // Formatage du score avec virgules pour les grands nombres
  const formattedScore = displayScore.toLocaleString('en-US');
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Score</Text>
      <Text style={styles.score}>{formattedScore}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#00ff00',
  },
});

