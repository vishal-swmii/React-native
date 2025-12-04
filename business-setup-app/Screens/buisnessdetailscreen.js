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
<TextInput placeholder="Enter title" style={input} />


<Text>PAN Number (Optional)</Text>
<TextInput placeholder="Enter PAN number" style={input} />


<Text style={{ marginTop: 10 }}>Do you have GST number?</Text>
<View style={{ flexDirection: "row", gap: 10, marginVertical: 5 }}>
<TouchableOpacity onPress={() => setHasGST(true)} style={[tag(hasGST === true)]}><Text>Yes</Text></TouchableOpacity>
<TouchableOpacity onPress={() => setHasGST(false)} style={[tag(hasGST === false)]}><Text>No</Text></TouchableOpacity>
</View>


{hasGST && <TextInput placeholder="Enter GST number" style={input} />}


<Text>About business</Text>
<TextInput placeholder="About" style={[input, { height: 100 }]} multiline />


<TouchableOpacity style={btn} onPress={() => navigation.navigate("LocationForm")}>
<Text style={btnText}>Next</Text>
</TouchableOpacity>
</ScrollView>
);
}