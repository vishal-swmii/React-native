import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  ScrollView, 
  Image, 
  TouchableOpacity,
  StatusBar 
} from "react-native";

export default function App() {
  const [isGST, setIsGST] = useState(null);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Top Bar Buttons */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Text style={styles.topBtn}>{"<"}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.topRight}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.topRight}>Close</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Heading */}
        <Text style={styles.heading}>
          Set up your profile{"\n"}details
        </Text>

        {/* Image Box */}
        <View style={styles.imageBox}>
          <Image 
            source={{ uri: "https://images.pexels.com/photos/3993446/pexels-photo-3993446.jpeg" }}
            style={styles.coverImg}
          />
          <Text style={styles.coverText}>Cover photo</Text>
        </View>

        {/* Registered Business */}
        <Text style={styles.label}>Are you registered business</Text>
        <TouchableOpacity style={styles.toggleBtn}>
          <View style={styles.toggleCircle} />
        </TouchableOpacity>

        {/* Name */}
        <Text style={styles.label}>Your name</Text>
        <TextInput style={styles.input} placeholder="Enter title here" placeholderTextColor="#777" />

        {/* PAN */}
        <Text style={styles.label}>PAN Number (Optional)</Text>
        <TextInput style={styles.input} placeholder="Enter PAN number" placeholderTextColor="#777" />

        {/* GST */}
        <Text style={styles.label}>Do you have GST number ?</Text>

        <View style={styles.yesNoRow}>
          <TouchableOpacity 
            style={[styles.yesNoBtn, isGST === true && styles.activeBtn]} 
            onPress={() => setIsGST(true)}
          >
            <Text style={[styles.yesNoText, isGST === true && styles.activeText]}>Yes</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.yesNoBtn, isGST === false && styles.activeBtn]} 
            onPress={() => setIsGST(false)}
          >
            <Text style={[styles.yesNoText, isGST === false && styles.activeText]}>No</Text>
          </TouchableOpacity>
        </View>

        {/* About */}
        <Text style={styles.label}>About yourself</Text>
        <TextInput 
          style={styles.textArea} 
          placeholder="About" 
          multiline={true}
          placeholderTextColor="#777"
        />

        {/* Next Button */}
        <TouchableOpacity style={styles.nextBtn}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    paddingTop: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topBtn: {
    fontSize: 28,
    fontWeight: "bold",
  },
  topRight: {
    fontSize: 16,
    color: "#666",
  },
  container: {
    padding: 20,
    paddingBottom: 120,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageBox: {
    width: "100%",
    height: 220,
    backgroundColor: "#eee",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  coverImg: {
    width: "100%",
    height: "100%",
  },
  coverText: {
    position: "absolute",
    top: 10,
    left: 10,
    color: "#fff",
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
  },
  toggleBtn: {
    width: 55,
    height: 30,
    backgroundColor: "#ddd",
    borderRadius: 20,
    justifyContent: "center",
    marginVertical: 10,
  },
  toggleCircle: {
    width: 24,
    height: 24,
    backgroundColor: "#fff",
    borderRadius: 24,
    marginLeft: 3,
  },
  input: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  yesNoRow: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  yesNoBtn: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: "#eee",
    borderRadius: 20,
  },
  yesNoText: {
    fontWeight: "600",
    color: "#555",
  },
  activeBtn: {
    backgroundColor: "#000",
  },
  activeText: {
    color: "#fff",
  },
  textArea: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 10,
    height: 130,
    marginTop: 10,
  },
  nextBtn: {
    backgroundColor: "#000",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 30,
  },
  nextText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
