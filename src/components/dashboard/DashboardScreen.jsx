import React, { useState } from 'react';
import Screen from '../common/Screen';
import Idea from '../ideas/Idea';
import DashboardHeader from './DashboardHeader';

const DashboardScreen = () => {
  const [input, setInput] = useState('');
  const [ideas, setIdeas] = useState([]);

  const addIdea = () => {
    setIdeas((currentIdeas) => [...currentIdeas, input]);
    setInput('');
  };

  return (
    <Screen>
      <DashboardHeader />
      <Idea />
    </Screen>
  );
};

export default DashboardScreen;
