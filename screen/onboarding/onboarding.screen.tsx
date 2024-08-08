import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "@/styles/onboarding/onboarding";
import { router } from "expo-router";

export default function OnBoardingScreen() {
  let [fontLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontLoaded && !fontError) {
    return null;
  }

  const handlePress = () => {
    console.log("Button Pressed");
    router.push("/(routes)/welcomeIntro");
  };

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={styles.firstContainer}>
        <View>
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.logo}
          />
          <Image source={require("@/assets/onboarding/shape_9.png")} />
        </View>
        <View style={styles.titleWrapper}>
          <Image
            style={styles.titleTextShape1}
            source={require("@/assets/onboarding/shape_3.png")}
          />
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            Start Learning With{" "}
          </Text>
          <Image
            style={styles.titleTextShape2}
            source={require("@/assets/onboarding/shape_2.png")}
          />
        </View>
        <View>
          <Image
            style={styles.titleShape3}
            source={require("@/assets/onboarding/shape_6.png")}
          />
          <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
            E Learning
          </Text>
        </View>
        <View style={styles.dscpWrapper}>
          <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
            Explore a variety of interactive lesson,
          </Text>
          <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
            video, quizzes and assignments.
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonWrapper} onPress={handlePress}>
            <Text style={[styles.buttonText, { fontFamily: "Nunito_700Bold" }]}>
              Getting Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
