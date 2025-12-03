function LocationForm({ navigation }) {
return (
<ScrollView style={{ padding: 20 }}>
<Text style={{ fontSize: 26, fontWeight: "bold" }}>Where is your business located?</Text>


<TouchableOpacity
onPress={() => navigation.navigate("MapScreen")}
style={{ padding: 15, backgroundColor: "#eee", borderRadius: 10, marginVertical: 15 }}>
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