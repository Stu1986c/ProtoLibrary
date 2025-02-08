// pages/pwa/prototype1.tsx
import React, { useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import WheelOfFortune from 'react-native-wheel-of-fortune';

const Prototype1PWA: React.FC = () => {
  const wheelRef = useRef<any>(null);
  const [winner, setWinner] = useState<string | null>(null);

  // Define the rewards (or prizes) for the wheel.
  const rewards = ['Prize 1', 'Prize 2', 'Prize 3', 'Prize 4'];

  // Callback when the spin ends.
  const onSpinEnd = (index: number) => {
    setWinner(rewards[index]);
  };

  return (
    <View style={{ flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Spin the Wheel!</Text>
      <WheelOfFortune
        rewards={rewards}
        duration={6000}
        onSpinEnd={onSpinEnd}
        onRef={(ref) => (wheelRef.current = ref)}
        knobSize={30}
        borderWidth={5}
        radius={150}
        innerRadius={30}
      />
      {winner && (
        <Text style={{ fontSize: 20, marginTop: 20 }}>
          You won: {winner}
        </Text>
      )}
      <Button
        title="Spin"
        onPress={() => {
          if (wheelRef.current && wheelRef.current._onPress) {
            wheelRef.current._onPress();
          }
        }}
      />
    </View>
  );
};

export default Prototype1PWA;
