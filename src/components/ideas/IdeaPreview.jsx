import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

const IdeaPreview = (props) => {
  const { content } = props;

  return (
    <View>
      <Text>{content}</Text>
    </View>
  );
};

export default IdeaPreview;
