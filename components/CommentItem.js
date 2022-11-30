import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";

const CommentItem = (props) => {
  return (
    <TouchableOpacity 
    onPress={props.onDelete.bind(this, props.id)}
    style={styles.list}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#F9D7FF",
    borderColor: "#DA24FA",
    borderWidth: 1,
  },
  list: {
    padding: 4,
  },
});

export default CommentItem;