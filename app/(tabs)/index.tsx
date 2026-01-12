import MultiplierButton from '@/components/MultiplierButton';
import ScoreDisplay from '@/components/ScoreDisplay';
import StatsPanel from '@/components/StatsPanel';
import TapButton from '@/components/TapButton';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  // État déclaré mais pas initialisé correctement - types TypeScript manquants (sémantique similaire à Java, ex: Stack<int>)
  const [score, setScore] = React.useState();
  // État multiplier existe mais valeur par défaut incorrecte
  const [multiplier, setMultiplier] = React.useState(true);
  // Compteur totalTaps non initialisé
  const multiplierValue = 2;

  // Gestionnaire de l'évènement Tap. Devrait incrémenter le compteur.
  const handleTap = () => {
    // Le calcul du score n'est pas implémenté
    // setScore n'est pas appelée
    // L'appui sur le bouton ne déclenche aucun changement d'état
  };

  // Toggle du multiplicateur cassé - ne change pas l'état
  const toggleMultiplier = () => {
    // Le toggle du multiplicateur ne change pas l'état
  };

  return (
    <View style={styles.container}>
      <ScoreDisplay score={score} />
      <TapButton onPress={handleTap} />
      <MultiplierButton 
        isActive={multiplier} 
        onToggle={toggleMultiplier} 
      />
      <StatsPanel 
        totalTaps={0} 
        multiplier={multiplier} 
        multiplierValue={multiplierValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
