import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import speaker_white from '../Assets/speaker_white.png';
import speaker_mute_black from '../Assets/speaker_mute_black.png';
import speaker_black from '../Assets/speaker_black.png';
import speaker_mute_white from '../Assets/speaker_mute_white.png';
import {Appearance} from 'react-native';
import {speak, stopSpeak} from '../Tools/Speak';

// Mute button is function that mute and unmute the voice and changes the icon
// It is called in the MainScreen.js.
const MuteButton = ({mute, setMute}) => {
  const [icon, setIcon] = React.useState(speaker_white);

  useState(() => {
    if (Appearance.getColorScheme() === 'dark') {
      // setIcon(speaker_black);
      setIcon(speaker_white);
    } else {
      setIcon(speaker_white);
    }
  }, []);

  const changeIcon = () => {
    stopSpeak();
    if (mute) {
      if (Appearance.getColorScheme() === 'dark') {
        // setIcon(speaker_black);
        setIcon(speaker_white);
      } else {
        setIcon(speaker_white);
      }
    } else {
      if (Appearance.getColorScheme() === 'dark') {
        // setIcon(speaker_mute_black);
        setIcon(speaker_mute_white);
      } else {
        setIcon(speaker_mute_white);
      }
    }
    setMute(!mute);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => changeIcon()}>
        <Image
          source={icon}
          style={{
            width: 55,
            height: 36,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MuteButton;
