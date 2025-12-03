import React, { useState } from "react";
import { View, Text, TextInput, Image, Switch, TouchableOpacity } from "react-native";

export default function ProfileSetupScreen({ navigation }) {
  const [registered, setRegistered] = useState(false);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 20 }}>
        Set up your profile details
      </Text>

      <Image
        source={{ uri: "https://placehold.co/300x150" }}
        style={{ width: "100%", height: 180, borderRadius: 12, marginBottom: 20 }}
      />

      <Text>Are you registered business</Text>
      <Switch value={registered} onValueChange={setRegistered} />

      <TextInput
        placeholder="Your name"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          padding: 12,
          marginTop: 10,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 15,
          borderRadius: 10,
          marginTop: 30,
        }}
        onPress={() => navigation.navigate("BusinessDetails")}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
