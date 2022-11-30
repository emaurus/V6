import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const CommentInput = (props) => {
  //deklaracija state varijable
  const [enteredComment, setEnteredComment] = useState('');
  const [enteredComment2, setEnteredComment2] = useState('');

  //postavlja vrijednost enteredComment varijable na vrijednost koju unesemo u textInuptu
  const commentInputHandler = (enteredText) => {
    setEnteredComment(enteredText);
  };
  const commentInputHandler2 = (enteredText2) => {
    setEnteredComment2(enteredText2);
  };

  //kada se pozove onAddComment bilo gdje u aplikaciji proslijeđuje enteredComment vrijednost i čisti textInput
  const addCommentHandler = () => {
    props.onAddComment(enteredComment);
    props.onAddComment(enteredComment2);
    setEnteredComment('');
    setEnteredComment2('');
  };


  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Unesi prvi komentar"
        style={styles.textInput}
        onChangeText={commentInputHandler}
        value={enteredComment}
      />
      <TextInput
        placeholder="Unesi drugi komentar"
        style={styles.textInputdva}
        onChangeText={commentInputHandler2}
        value={enteredComment2}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Dodaj" onPress={addCommentHandler} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    margin: 10,
    width: '80%',
    borderColor: '#6363EB',
    borderWidth: 1,
    padding: 10,
    color: 'grey',
    textAlign: 'center',
  },
  textInputdva: {
    marginBottom: 30,
    width: '80%',
    borderColor: '#6363EB',
    borderWidth: 1,
    padding: 10,
    color: 'grey',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    width: "80%",
  },
});
export default CommentInput;
