import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  LayoutAnimation,
  UIManager,
  Platform,
} from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface ExpandableTextProps {
  text: string;
  initialNumberOfLines?: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({
  text,
  initialNumberOfLines = 3,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View>
      <Pressable onPress={toggleExpand}>
        <Text numberOfLines={expanded ? undefined : initialNumberOfLines}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default ExpandableText;
