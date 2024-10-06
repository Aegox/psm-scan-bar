import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

function Scan () {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
　　　˚　　　　　　　　ﾟ　　　　　.
　.⠀　　⠀‍⠀‍⠀‍⠀‍⠀‍⠀‍⠀‍⠀‍⠀‍⠀‍⠀,
　　　*　　⠀.
　　　　　.　　　　　　　　　　⠀✦
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.sideLeft}>
      </View>
      <View style={styles.sideRight}>
      </View>
      <View style={styles.column}>
      </View>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.bottomColumn}>
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    zIndex: 100
  },
  column: {
    display: "flex",
    position: "absolute",
    top: 0,
    height: 350,
    width: "100%",
    backgroundColor: "white",
    zIndex: 101
  },
  bottomColumn:  {
    display: "flex",
    position: "absolute",
    bottom: 0,
    height: 350,
    width: "100%",
    backgroundColor: "white",
    zIndex: 101
  },
  sideLeft:  {
    display: "flex",
    position: "absolute",
    left: 0,
    height: "100%",
    width: 30,
    backgroundColor: "white",
    zIndex: 101
  },
  sideRight:  {
    display: "flex",
    position: "absolute",
    right: 0,
    height: "100%",
    width: 30,
    backgroundColor: "white",
    zIndex: 101
  }
});

export default Scan;

