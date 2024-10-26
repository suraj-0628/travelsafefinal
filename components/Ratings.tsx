import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings'; // Install this package if needed

const Ratings = ({ pointA, pointB }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    // Handle the rating submission (e.g., send to an API)
    console.log(`Rating: ${rating}, Comment: ${comment}`);
    // Reset form
    setRating(0);
    setComment('');
  };

  return (
    <View  style={styles.container}>
      
      <Text style={styles.header}>
        From: {pointA} 
      </Text>
      <Text style={styles.header}>
        To: {pointB} 
      </Text>

      <Rating
        showRating
        onFinishRating={setRating}
        style={styles.rating}
      />

      <TextInput
        style={styles.input}
        placeholder="Leave a comment..."
        value={comment}
        onChangeText={setComment}
        multiline
      />

      <Button title="Submit Rating" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:385,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    marginBottom: 16,
  },
  rating: {
    marginBottom: 16,
  },
  input: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 16,
  },
});

export default Ratings;
