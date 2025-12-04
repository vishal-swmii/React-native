import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function App() {
  const [registered, setRegistered] = useState(false);
  const [gst, setGST] = useState("no");

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* ---------------- HEADER ---------------- */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveText}>Save & Exit</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* SCREEN TITLE */}
        <Text style={styles.title}>Set up your profile{"\n"}details</Text>

        {/* COVER PHOTO */}
        <View style={styles.coverContainer}>
          <Text style={styles.coverLabel}>Cover photo</Text>

          <Image
            source={{
              uri: "https://images.pexels.com/photos/3992875/pexels-photo-3992875.jpeg",
            }}
            style={styles.coverPhoto}
          />
        </View>

        {/* REGISTERED BUSINESS TOGGLE */}
        <View style={styles.row}>
          <Text style={styles.label}>Are you registered business</Text>

          <TouchableOpacity
            style={[
              styles.switch,
              registered && { backgroundColor: "#000", alignItems: "flex-end" },
            ]}
            onPress={() => setRegistered(!registered)}
          >
            <View style={styles.switchCircle} />
          </TouchableOpacity>
        </View>

        {/* NAME */}
        <Text style={styles.label}>Your name</Text>
        <TextInput style={styles.input} placeholder="Enter title here" />

        {/* PAN NUMBER */}
        <Text style={styles.label}>PAN Number (Optional)</Text>
        <TextInput style={styles.input} placeholder="Enter PAN number" />

        {/* GST YES/NO */}
        <Text style={styles.label}>Do you have GST number ?</Text>

        <View style={styles.gstToggleWrapper}>
          <TouchableOpacity
            style={[
              styles.gstBtn,
              gst === "yes" && styles.gstActive,
            ]}
            onPress={() => setGST("yes")}
          >
            <Text style={gst === "yes" ? styles.gstTextActive : styles.gstText}>
              Yes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.gstBtn,
              gst === "no" && styles.gstActive,
            ]}
            onPress={() => setGST("no")}
          >
            <Text style={gst === "no" ? styles.gstTextActive : styles.gstText}>
              No
            </Text>
          </TouchableOpacity>
        </View>

        {/* ABOUT YOURSELF */}
        <Text style={styles.label}>About yourself</Text>
        <TextInput
          style={[styles.input, { height: 110, textAlignVertical: "top" }]}
          multiline
          placeholder="About"
        />

        {/* NEXT BUTTON */}
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  backIcon: {
    fontSize: 28,
    marginTop: -4,
  },

  saveBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  saveText: {
    fontSize: 16,
    fontWeight: "500",
  },

  title: {
    fontSize: 32,
    fontWeight: "800",
    marginLeft: 18,
    marginTop: 10,
    lineHeight: 38,
  },

  coverContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 18,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },

  coverLabel: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
  },

  coverPhoto: {
    width: "100%",
    height: 180,
    borderRadius: 15,
  },

  editCircle: {
    position: "absolute",
    right: 15,
    top: 15,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 6,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 18,
    marginTop: 25,
  },

  label: {
    marginLeft: 18,
    marginTop: 22,
    fontSize: 16,
    fontWeight: "500",
  },

  /* SWITCH */
  switch: {
    width: 48,
    height: 26,
    borderRadius: 20,
    backgroundColor: "#d9d9d9",
    justifyContent: "center",
    padding: 3,
  },

  switchCircle: {
    width: 20,
    height: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
  },

  /* TEXT INPUTS */
  input: {
    height: 50,
    backgroundColor: "#ececec",
    marginHorizontal: 18,
    borderRadius: 10,
    marginTop: 12,
    paddingHorizontal: 14,
    fontSize: 15,
  },

  /* GST YES/NO */
  gstToggleWrapper: {
    flexDirection: "row",
    marginLeft: 18,
    marginTop: 10,
    gap: 12,
  },

  gstBtn: {
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 22,
    backgroundColor: "#efefef",
  },

  gstActive: {
    backgroundColor: "#000",
  },

  gstText: {
    color: "#444",
    fontSize: 15,
  },

  gstTextActive: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },

  /* NEXT BUTTON */
  nextButton: {
    width: "90%",
    height: 55,
    backgroundColor: "#000",
    borderRadius: 35,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },

  nextText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
