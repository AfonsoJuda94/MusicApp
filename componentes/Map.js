import { StyleSheet, Text, View } from "react-native";

import MapView, { Marker, Callout } from "react-native-maps";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    color: "#fff",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  text: {
    color: "#fff",
  },
  map: {
    width: "90%",
    height: "100%",
  },
  calloutContainer: {
    width: 160,
    height: "100%",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    justifyContent: "center",
  },
  calloutText: {
    color: "#363636",
    fontSize: 14,
    textAlign: "center",
  },
  textStreet: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 16,
    marginTop: 50,
    width: "50%",
  },
  screen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  screen2: {
    position: "absolute",
    top: 50,
    marginLeft: 20,
  },
});

const initialRegion = {
  longitude: -39.3967562,
  latitude: -7.2252046,
  latitudeDelta: 0.09,
  longitudeDelta: 0.09,
};

export default function Map() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.screen2}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/Frame172.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.screen}>
        <Text style={styles.textStreet}>
          Rua Primeiro de Maio, 49, São Miguel, Crato - CE
        </Text>
      </View>
      <View style={{ marginTop: 30, marginLeft: 30 }}>
        <MapView style={styles.map} initialRegion={initialRegion}>
          <Marker
            key={1}
            calloutAnchor={{
              x: 2.9,
              y: 0.8,
            }}
            coordinate={{
              longitude: Number(-39.3967562),
              latitude: Number(-7.2252046),
            }}
            title="Testeee"
            description="Testeee"
          >
            <Callout tooltip>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>Seu mentor leciona aqui</Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
      </View>
    </View>
  );
}
