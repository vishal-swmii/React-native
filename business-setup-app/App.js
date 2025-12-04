import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, Switch } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// 1st Screen
function ProfileSetup({ navigation }) {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Set up your profile details</Text>

      <Image
        source={{ uri: "https://picsum.photos/500/300" }}
        style={{ width: "100%", height: 180, borderRadius: 10, marginVertical: 20 }}
      />

      <Text>Your Name</Text>
      <TextInput style={input} placeholder="Enter name" />

      <Text>PAN Number (Optional)</Text>
      <TextInput style={input} placeholder="Enter PAN number" />

      <Text>About yourself</Text>
      <TextInput style={[input, { height: 100 }]} placeholder="About" multiline />

      <TouchableOpacity style={btn} onPress={() => navigation.navigate("BusinessDetails")}>
        <Text style={btnText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// 2nd Screen
function BusinessDetails({ navigation }) {
  const [registered, setRegistered] = useState(false);
  const [hasGST, setHasGST] = useState(null);

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Set up your details</Text>

      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Text style={{ flex: 1 }}>Are you a registered business?</Text>
        <Switch value={registered} onValueChange={setRegistered} />
      </View>

      <Text>Business Title</Text>
      <TextInput style={input} placeholder="Enter business title" />

      <Text>PAN Number</Text>
      <TextInput style={input} placeholder="Enter PAN" />

      <Text>Do you have GST number?</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity onPress={() => setHasGST(true)} style={[tag(hasGST === true)]}>
          <Text>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setHasGST(false)} style={[tag(hasGST === false)]}>
          <Text>No</Text>
        </TouchableOpacity>
      </View>

      {hasGST && <TextInput style={input} placeholder="Enter GST number" />}

      <Text>About business</Text>
      <TextInput style={[input, { height: 100 }]} placeholder="About business" multiline />

      <TouchableOpacity style={btn} onPress={() => navigation.navigate("LocationForm")}>
        <Text style={btnText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// 3rd Screen
function LocationForm({ navigation }) {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Where is your business located?</Text>

      <TouchableOpacity
        style={{ padding: 15, backgroundColor: "#eee", borderRadius: 10, marginVertical: 20 }}
        onPress={() => navigation.navigate("MapScreen")}
      >
        <Text>Pin your business location →</Text>
      </TouchableOpacity>

      <Text>Shop number</Text>
      <TextInput style={input} />

      <Text>Locality</Text>
      <TextInput style={input} />

      <Text>City</Text>
      <TextInput style={input} />

      <Text>State</Text>
      <TextInput style={input} />

      <Text>Pin code</Text>
      <TextInput style={input} />

      <TouchableOpacity style={btn} onPress={() => navigation.navigate("LocationSummary")}>
        <Text style={btnText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// 4th Screen
function MapScreen({ navigation }) {
  const [pin, setPin] = useState({ latitude: 28.4595, longitude: 77.0266 });

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: pin.latitude,
          longitude: pin.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onPress={(e) => setPin(e.nativeEvent.coordinate)}
      >
        <Marker coordinate={pin} />
      </MapView>

      <TouchableOpacity style={btn} onPress={() => navigation.goBack()}>
        <Text style={btnText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

// 5th Screen
function LocationSummary() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Where is your business located?</Text>

      <View style={{ backgroundColor: "#eee", padding: 20, borderRadius: 12, marginTop: 20 }}>
        <Text>Shop number: 334</Text>
        <Text>Locality: Sector 3</Text>
        <Text>City: Gurugram</Text>
        <Text>State: Haryana</Text>
        <Text>Pin code: 244435</Text>
      </View>

      <TouchableOpacity style={btn} onPress={() => alert("Setup Completed!")}>
        <Text style={btnText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
        <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
        <Stack.Screen name="LocationForm" component={LocationForm} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="LocationSummary" component={LocationSummary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const input = {
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 10,
  padding: 12,
  marginVertical: 8,
};

const btn = {
  backgroundColor: "black",
  padding: 15,
  borderRadius: 10,
  alignItems: "center",
  marginVertical: 20,
};

const btnText = {
  color: "white",
  fontWeight: "bold",
  fontSize: 16,
};

const tag = (active) => ({
  padding: 10,
  backgroundColor: active ? "#ddd" : "#fff",
  borderWidth: 1,
  borderRadius: 8,
});
