import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Vibration, } from 'react-native';
import { Button } from 'react-native-paper';
import Dice1 from '../assets/One.png';
import Dice2 from '../assets/Two.png';
import Dice3 from '../assets/Three.png';
import Dice4 from '../assets/Four.png';
import Dice5 from '../assets/Five.png';
import Dice6 from '../assets/Six.png';


const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

const Dice = ({ imageUrl }) => {
  return (
    <View>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
};

export default function Images() {
  const [diceImageIndex, setDiceImageIndex] = useState(2); // Initial image index set to 2 (Dice3)

  const rollTheDice = () => {
    const randomIndex = Math.floor(Math.random() * 6);
    setDiceImageIndex(randomIndex);
  };

  return (<>
      <Dice imageUrl={diceImages[diceImageIndex]} />
      <Button mode="elevated" className=" bg-purple-100 m-11 "  
      onPress={()=>{rollTheDice();Vibration.vibrate(58) }}>
        Roll the dice
      </Button>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
    marginTop: 20,
  },
});
