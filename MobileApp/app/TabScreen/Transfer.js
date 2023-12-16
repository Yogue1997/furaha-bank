import React, { useState, useEffect } from 'react';
import { View, Text, Animated, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../Buttons/Button';
import COLORS from '../../constants/colors';
// import Animated from 'reanave'

const Transfer = () => {
  const [userInput, setUserInput] = useState(0);
  const [numbers, setNumbers] = useState([null]); // Initialize with a default value of 0
  const [shakeAnimation] = useState(new Animated.Value(0));


  useEffect(() => {
    if (parseFloat(numbers.join('')) > 99999) {
      Animated.sequence([
        Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true }),
      ]).start();
    }
  }, [numbers]);

  console.log('====================================');
  console.log(typeof (userInput));
  console.log(typeof (numbers));
  console.log(numbers);
  console.log('====================================');

  const handleAdd = (input) => {
    if (input === '.') {
      if (!numbers.includes('.')) {
        setNumbers((prevNumbers) => [...prevNumbers, input]);
      }
    } else if (input < 0) {
      setUserInput(0);
    } else {
      // Check if the current numbers are equal to ['0']
      const isFirstInputZero = numbers.length === 1 && numbers[0] === '0';

      const [integerPart, decimalPart] = (numbers.join('') + input).split('.');

      // Limit integer part to 5 digits
      const limitedIntegerPart = integerPart.slice(0, 5);

      // Limit decimal part to 2 digits
      const limitedDecimalPart = decimalPart ? `.${decimalPart.slice(0, 2)}` : '';

      const limitedNumber = parseFloat(`${limitedIntegerPart}${limitedDecimalPart}`);

      if (!isNaN(limitedNumber) && limitedNumber <= 99999) {
        // If the first input is 0, set numbers to the new input
        setNumbers((prevNumbers) => (isFirstInputZero ? [input] : [limitedIntegerPart, limitedDecimalPart]));
      }
    }
  };


  const handleDelete = () => {
    if (numbers.length > 0 && numbers.join('').length > 1) {
      const newNumbers = [...numbers];
      newNumbers.pop();
      setNumbers(newNumbers);
    } else {
      setNumbers(['0']);
    }
  };

  let test = 0

  return (
    <View style={{
      // alignContent: 'center'
      top: 100
    }}>
      <View style={{ alignItems: 'center', width: -50, bottom: 50 }}>
        <Animated.Text
          style={{
            fontSize: 70,
            right: 15,
            transform: [{ translateX: shakeAnimation }],
            color: COLORS.primary
          }}
        >
          ${numbers && numbers.length > 0 ? numbers.join('') : '0'}
        </Animated.Text>
      </View>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 100 }}>
          <TouchableOpacity onPress={() => handleAdd(1)}>
            <Text style={{ fontSize: 30, color: COLORS.primary }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAdd(2)}>
            <Text style={{ fontSize: 30, color: COLORS.primary }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAdd(3)}>
            <Text style={{ fontSize: 30, color: COLORS.primary }}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 100 }}>
          <TouchableOpacity onPress={() => handleAdd(4)}>
            <Text style={{ fontSize: 30, color: COLORS.primary }}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAdd(5)}>
            <Text style={{ fontSize: 30, color: COLORS.primary }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAdd(6)}>
            <Text style={{ fontSize: 30, color: COLORS.primary }}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 100 }}>
          <TouchableOpacity onPress={() => handleAdd(7)}>
            <Text style={{ fontSize: 30, color: COLORS.primary }}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAdd(8)}>
            <Text style={{ fontSize: 30, color: COLORS.primary }}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAdd(9)}>
            <Text style={{ fontSize: 30, color: COLORS.primary }}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 100 }}>
          <TouchableOpacity onPress={() => handleAdd('.')}>
            <Text style={{ fontSize: 50, left: 9, color: COLORS.primary }}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAdd(0)}>
            <Text style={{ fontSize: 30, left: 19, color: COLORS.primary }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete()}>
            <Icon name='chevron-back-outline' style={{ fontSize: 50, left: 10, color: COLORS.primary }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        top: 40,
      }}>
        <View style={{
        }}>
          <Button
            title='Request'
            style={{
              width: 150,
              borderRadius: 100,
            }}
          />
        </View>
        <View>
          <Button
            title='Pay'
            style={{
              width: 150,
              borderRadius: 100
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    color: COLORS.white
  }
})


export default Transfer;
