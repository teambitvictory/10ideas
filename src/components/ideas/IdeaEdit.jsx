import React, { useState } from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';

const IdeaEdit = (props) => {
  const { content, onSave } = props;
  const [value, setValue] = useState(content);

  const onSubmit = () => {
    onSave(value);
    setValue('');
  };

  return (
    <View>
      <Input
        value={value}
        placeholder="New idea"
        onChangeText={setValue}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
};

export default IdeaEdit;
