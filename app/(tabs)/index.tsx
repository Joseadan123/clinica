import React from "react";
import { View, StyleSheet, Text,TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import { IOSReferenceFrame } from "react-native-reanimated";

export default function HomeScreen() {
  return (
      <View style = {{backgroundColor: "#E8E8E8", flex: 1}}>
        <View style = {styles.container_header}>
          <TouchableOpacity>
            <View style = {styles.perfil}>
              <Ionicons name="person" size={20}/>
            </View>
          </TouchableOpacity>
          <Text style = {{fontSize: 24, fontWeight: "bold", color: "white", marginStart: 10, marginTop: 30}}>
            Jose adan
          </Text>
          <TouchableOpacity>
            <View style = {styles.config}>
              <Ionicons name="settings" color={"black"} size={30}></Ionicons>
            </View>
          </TouchableOpacity>
        </View >
        <Text style = {{fontSize: 20, fontWeight: "bold", marginTop: 10, marginLeft: 30}}>
          Clinica Dental </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container_header: {
    flexDirection: "row",
    backgroundColor: "#8c1efa",
    height: 120,
    width: "100%",
    borderBottomLeftRadius: 30,  
    borderBottomRightRadius: 30, 
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  perfil: {
    marginStart: 20,
    height: 40,
    width: 40, 
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  config: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 170
  },
});
