import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const dummyArticles = [
    {
      id: '1',
      title: 'Understanding Women’s Safety',
      content: 'Women’s safety is a critical issue in today’s society. Awareness and education play vital roles in ensuring that women feel secure in their environments.',
      date: '2024-10-01',
    },
    {
      id: '2',
      title: 'Self-Defense Techniques Every Woman Should Know',
      content: 'Learning self-defense can empower women and enhance their confidence. This article covers basic techniques that can be useful in emergency situations.',
      date: '2024-09-15',
    },
    {
      id: '3',
      title: 'Creating Safe Spaces for Women',
      content: 'Communities can work together to create safe spaces for women, providing support and resources that foster a sense of security and belonging.',
      date: '2024-08-30',
    },
    {
      id: '4',
      title: 'The Role of Technology in Women’s Safety',
      content: 'Technology offers numerous tools to enhance women’s safety, from personal safety apps to smart home devices that ensure a secure environment.',
      date: '2024-08-10',
    },
    {
      id: '5',
      title: 'Recognizing and Reporting Harassment',
      content: 'Understanding what constitutes harassment is crucial for women. This article discusses how to recognize it and the steps to take for reporting it.',
      date: '2024-07-25',
    },
    {
      id: '6',
      title: 'Empowering Women Through Education',
      content: 'Education is a powerful tool in promoting women’s safety. Programs focused on awareness can equip women with the knowledge to protect themselves.',
      date: '2024-07-10',
    },
  ];

const BlogArticles = () => {
  const renderArticle = ({ item }) => (
    <View style={styles.articleContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );

  return (
    <FlatList
      data={dummyArticles}
      keyExtractor={(item) => item.id}
      renderItem={renderArticle}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  articleContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
    marginVertical: 8,
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
});

export default BlogArticles;