import React from 'react';
import { StyleSheet, View } from 'react-native';

const Screen = (props) => {
  const { children } = props;
  return (
    <View style={styles.view}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default Screen;
