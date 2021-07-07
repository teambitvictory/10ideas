import React, { useState } from 'react';
import { View } from 'react-native';
import IdeaEdit from './IdeaEdit';
import IdeaPreview from './IdeaPreview';

const Idea = (props) => {
  const { idea = {} } = props;
  const { content } = idea;
  const [isEditMode, setIsEditMode] = useState(true);

  const onSave = (newContent) => {
    setIsEditMode(false);
  };

  return (
    <View>
      {isEditMode ? <IdeaEdit content={content} /> : <IdeaPreview content={content} />}
    </View>
  );
};

export default Idea;
