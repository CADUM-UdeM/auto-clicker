import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface MultiplierButtonProps {
  isActive?: boolean;
  onToggle?: () => void;
}

export default function MultiplierButton(props: MultiplierButtonProps) {
  // Toggle ne change pas l'état - onToggle n'est pas appelé correctement
  return (
    <TouchableOpacity 
      style={[
        styles.button,
        props.isActive && styles.buttonActive
      ]}
      onPress={() => {
        // Le toggle du multiplicateur ne change pas l'état
        // Le statut du multiplicateur n'est pas affiché correctement
      }}
    >
      <Text style={styles.buttonText}>
        {props.isActive ? 'Multiplier: ON' : 'Multiplier: OFF'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#666666',
    padding: 15,
    borderRadius: 10,
    minWidth: 200,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonActive: {
    backgroundColor: '#ffaa00',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

