import { View } from "react-native";

const Spacer = ({ width = "100%", height = 20, style, ...props }) => {
	return <View style={[{ width: width, height: height }, style]} {...props} />;
};

export default Spacer;
