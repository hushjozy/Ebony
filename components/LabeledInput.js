import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";

const LabeledInput = ({
  onInput,
  type,
  text,
  placeholder,
  buttonStyle,
  textStyle,
  icon,
  label,
  value,
  inputStyle,
  disabled,
}) => {
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={[
        styles.inputContainer,
        { width: width * 0.7, ...inputStyle?.container },
      ]}
    >
      {label && (
        <Text style={[styles.labelText, { ...inputStyle?.label }]}>
          {label}
        </Text>
      )}
      <TextInput
        // keyboardType={type}
        placeholder={placeholder}
        placeholderTextColor="gray"
        style={[
          styles.inputArea,
          { ...inputStyle?.input, paddingInline: "4%" },
          inputStyle?.input,
        ]}
        value={value}
        onChangeText={(text) => {
          console.log(text);
          onInput(text);
        }}
        disabled={disabled}
      />
      {icon && (
        <Image source={`${icon?.src}`} style={[styles.iconStyle, icon.style]} />
      )}
    </View>
  );
};

export default LabeledInput;
const styles = StyleSheet.create({
  inputContainer: {
    height: 65,
    gap: 8,
    flexDirection: "column",
    alignSelf: "center",
    marginTop: 20,
  },
  inputArea: {
    width: "100%",
    height: 45,
    paddingBlock: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FFF",
    color: "#fff",
    fontSize: 14,
    textWrap: "wrap",
  },
  labelText: {
    color: "#fff",
    fontFamily: "Sora",
    fontSize: 14,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  iconStyle: { width: 18, height: 18 },
});
