import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class WheelchairButton extends Component {
  render() {
    return(
      <TouchableOpacity onPress={this.props.onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>
           {this.props.value}
         </Text>
     </TouchableOpacity>
    );
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#000',
    margin: 1
  }
};

export default WheelchairButton;





// const WheelchairButton = ({ onPress, children }) => {
//   const { buttonStyle, textStyle } = styles;

//   return (
//     <TouchableOpacity onPress={onPress} style={buttonStyle}>
//       <Text style={textStyle}>
//         {children}
//       </Text>
//     </TouchableOpacity>
//   );
// };


// export { WheelchairButton };

