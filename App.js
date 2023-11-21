import { useEffect, useState } from 'react';
import { PaperProvider, useTheme, Text, Button, Provider, DefaultTheme, DarkTheme  } from 'react-native-paper';
import { SafeAreaView, View, StyleSheet, Alert } from 'react-native';

export default function Main() {

  const theme = useTheme();
  const [darkTheme, setdarkTheme ] = useState(theme.dark)// bool
  
 

  return (
      <PaperProvider>
        <View style={[styles.container,]} className={darkTheme ? " bg-slate-900  ": "bg-green-400"  } >
        <Button mode="elevated" className={darkTheme ? "": "bg-green-800" }  onPress={() =>{
          setdarkTheme(darkTheme ? false : true) ;
        }}>
            <Text style={darkTheme ? {} : {color:"#FFFFFF"} } >change theme from {darkTheme} </Text>
          </Button>
        </View>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
})
