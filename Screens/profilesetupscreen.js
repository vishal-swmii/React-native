function ProfileSetup({ navigation }) {
return (
<ScrollView style={{ padding: 20 }}>
<Text style={{ fontSize: 26, fontWeight: "bold" }}>Set up your profile details</Text>


<Image
source={{ uri: "https://picsum.photos/500/300" }}
style={{ width: "100%", height: 180, borderRadius: 10, marginVertical: 20 }}
/>


<Text style={{ marginTop: 10 }}>Your Name</Text>
<TextInput placeholder="Enter name" style={input} />


<Text style={{ marginTop: 10 }}>PAN Number (Optional)</Text>
<TextInput placeholder="Enter PAN number" style={input} />


<Text style={{ marginTop: 10 }}>About yourself</Text>
<TextInput placeholder="About" style={[input, { height: 100 }]} multiline />


<TouchableOpacity style={btn} onPress={() => navigation.navigate("BusinessDetails")}>
<Text style={btnText}>Next</Text>
</TouchableOpacity>
</ScrollView>
);
}
