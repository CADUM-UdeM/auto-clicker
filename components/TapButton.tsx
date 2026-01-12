import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface TapButtonProps {
  onPress?: () => void;
}

export default function TapButton(props: TapButtonProps) {
  // Gestionnaire onPress ne met pas à jour l'état - aucune fonctionnalité
  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={() => {
        // Le gestionnaire onPress ne met pas à jour l'état
        // L'appui sur le bouton ne déclenche aucun changement d'état
      }}
    >
      <Text style={styles.buttonText}>TAP ME!</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0066ff',
    padding: 20,
    borderRadius: 50,
    minWidth: 200,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

