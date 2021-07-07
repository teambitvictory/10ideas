import React from 'react';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-elements';

const ChallengeHeader = (props) => {
  const { theme } = useTheme();
  const { journey, challenge } = props;
  const { title, description } = challenge;
  const { title: journeyTitle, author } = journey;

  return (
    <View>
      <Text>
        {journeyTitle}
        {' '}
        by
        {' '}
        {author.name}
      </Text>
      <Text h1 style={{ color: theme.colors.primary }}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default ChallengeHeader;
