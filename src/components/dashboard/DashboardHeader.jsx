import React from 'react';
import { StyleSheet, View } from 'react-native';
import { makeStyles } from 'react-native-elements';
import ChallengeHeader from '../challenges/ChallengeHeader';
import challenges from '../../db/defaultData/defaultChallenges.json';
import authors from '../../db/defaultData/defaultAuthors.json';
import journeys from '../../db/defaultData/defaultJourneys.json';

const DashboardHeader = () => {
  const styles = useStyles();
  const selectedJourney = journeys[0];
  const journey = {
    ...selectedJourney,
    author: authors.find((author) => author.id === selectedJourney.authorId),
  };

  return (
    <View style={styles.container}>
      <ChallengeHeader journey={journey} challenge={challenges[0]} />
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.secondary,
    padding: theme.spacing,
  },
}));

export default DashboardHeader;
