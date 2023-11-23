import { useEffect, useState } from 'react';
import { PaperProvider, useTheme, Text, Button, Provider, DefaultTheme, DarkTheme, 
        Drawer, Switch, Appbar, Divider  } from 'react-native-paper';
import { SafeAreaView, View, StyleSheet, Vibration } from 'react-native';
import Images from './components/Images';

export default function Main() {

  const theme = useTheme();
  const [darkTheme, setdarkTheme ] = useState(theme.dark=true )// bool
  const [active, setActive] = useState('');
  const [draweractive, setDrawerActive] = useState('');
  

  

  return (
      <PaperProvider>      

  <Appbar.Header className={darkTheme ? " bg-slate-400  ": "bg-red-300"  } >
    <Appbar.Action icon="menu" onPress={() => {setDrawerActive(!draweractive);setActive("");Vibration.vibrate(46)}} />
  </Appbar.Header>

  {draweractive ? (<Drawer.Section className={darkTheme ? "bg-slate-500  " : "bg-red-300"  }  >
      <Drawer.Item
        label="Change theme"
        icon="theme-light-dark"
        active={active === 'first'}
        onPress={() => {setActive('first');setdarkTheme(darkTheme ? false : true);Vibration.vibrate(46)}}
        style={darkTheme ? "bg-slate-500  " : "bg-green-600"  }
      />
    </Drawer.Section>
    ) : null}  

        <View style={styles.container}   className={darkTheme ? " bg-slate-700  ": "bg-red-100"  } >
          <Images className="h-32" />
        </View>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
})
