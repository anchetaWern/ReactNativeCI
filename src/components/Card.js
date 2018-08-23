import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import PropTypes from "prop-types";
import IconButton from "./IconButton";

const { width } = Dimensions.get("window");

const Card = ({ image, text, is_favorite, action }) => {
  const icon = is_favorite ? "heart" : "heart-o";
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{text}</Text>
      <Image source={image} resizeMode={"contain"} style={styles.image} />
      <IconButton icon={icon} color={"#333"} onPress={action} />
    </View>
  );
};

const cardPadding = 20;
const styles = {
  card: {
    width: width / 2 - cardPadding,
    height: 180,
    backgroundColor: "#f7f7f7",
    padding: 10,
    margin: 10,
    alignItems: "center"
  },
  image: {
    width: width - 100,
    height: 100
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
};

Card.propTypes = {
  image: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  is_favorite: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired
};

export default Card;
