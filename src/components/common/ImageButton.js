import React, { Component } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const ImageButton = ({ onPress, source }) => {
  
    return(
       <TouchableOpacity onPress={onPress}> 
        <Image 
          style={style.imageButton}
          source={source}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  
}

const style = {
  imageButton: {
    flex: 1,
    height: 100,
    width: 150
    // backgroundColor: 'blue'
  }
};

export { ImageButton };
