import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Entypo,
  Fontisto,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import {
  useFonts,
  Raleway_700Bold,
  Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";
import {
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_500Medium,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { commonStyles } from "@/styles/common/common.styles";
import { router } from "expo-router";

export default function LoginScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [required, setRequired] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    password: "",
  });

  const screenWidth = Dimensions.get("window").width;
  const imageWidth = screenWidth * 0.3;

  const handlePasswordValidation = (value: string) => {
    const password = value;
    const passwordSpecialCharacter = /(?=.*[!@#$&*])/;
    const passwordOneNumber = /(?=.*[0-9])/;
    const passwordSixValue = /(?=.{6,})/;

    if (!passwordSpecialCharacter.test(password)) {
      setError({
        ...error,
        password: "Write at least one special character",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!passwordOneNumber.test(password)) {
      setError({
        ...error,
        password: "Write at least one Number",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else if (!passwordSixValue.test(password)) {
      setError({
        ...error,
        password: "Password must be greater than 6 words",
      });
      setUserInfo({ ...userInfo, password: "" });
    } else {
      setUserInfo({ ...userInfo, password: value });
    }
  };

  return (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, paddingTop: 20 }}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          style={[
            styles.signInImage,
            { width: imageWidth, height: (imageWidth * 5) / 10 },
          ]}
          source={require("@/assets/sign-in/sign_in.png")}
        />
        <Text style={[styles.welcomeText, { fontFamily: "Raleway_700Bold" }]}>
          Welcome Back!
        </Text>
        <Text style={styles.learningText}>
          Login to your existing account of E-Learning
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputStyle}
              keyboardType="email-address"
              value={userInfo.email}
              placeholder="Enter your Email Address"
              onChangeText={(value) =>
                setUserInfo({ ...userInfo, email: value })
              }
            />
            <Fontisto
              style={{ position: "absolute", right: 36, top: 17.8 }}
              name="email"
              size={20}
              color={"#A1A1A1"}
            />
            {required && (
              <View style={commonStyles.errorContainer}>
                <Entypo name="cross" size={18} color={"red"} />
              </View>
            )}
            <View style={{ marginTop: 15 }}>
              <TextInput
                style={styles.inputStyle}
                keyboardType="default"
                secureTextEntry={!isPasswordVisible}
                defaultValue=""
                placeholder="Enter your password"
                onChangeText={handlePasswordValidation}
              />
              <TouchableOpacity
                style={styles.visibleIcons}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? (
                  <Ionicons
                    name="eye-off-outline"
                    size={23}
                    color={"#747474"}
                  />
                ) : (
                  <Ionicons name="eye-outline" size={23} color={"#747474"} />
                )}
              </TouchableOpacity>
            </View>
            {error.password && (
              <View style={[commonStyles.errorContainer, { top: 145 }]}>
                <Entypo name="cross" size={18} color={"red"} />
                <Text style={{ color: "red", fontSize: 11 }}>
                  {error.password}
                </Text>
              </View>
            )}
          </View>
          <TouchableOpacity onPress={() => router.push("forget-password")}>
            <Text
              style={[
                styles.forgetSection,
                { fontFamily: "Nunito_600Semibold" },
              ]}
            >
              Forget password?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  signInImage: {
    alignSelf: "center",
    marginTop: 50,
    objectFit: "cover",
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 24,
  },
  learningText: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 5,
    color: "#575757",
  },
  inputContainer: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },
  inputWrapper: {
    width: "40%",
  },
  inputStyle: {
    height: 55,
    borderRadius: 8,
    paddingLeft: 35,
    fontSize: 16,
    backgroundColor: "white",
    color: "#A1A1A1",
    width: "100%",
  },
  visibleIcons: {
    position: "absolute",
    backgroundColor: "white",
    right: 36,
    top: 15,
  },
  forgetSection: {
    marginHorizontal: 16,
    textAlign: "right",
    fontSize: 16,
    marginTop: -20,
  },
});
