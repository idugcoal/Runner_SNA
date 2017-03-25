import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import { connect } from 'react-redux';
import NumberButton from './common/NumberButton';
import Style from './Style';
import { Actions } from 'react-native-router-flux';

// class SelectWheelchair extends Component {

//   onButtonPress(button) {
//     const { wheelchairNumber } = this.props;

//     this.props.addWheelchairNumber({ wheelchairNumber });
//   }

//   renderButtons() {
//     return (
//       <View style={Style.content}>
//         <View style={Style.row}>
//           <Button onPress={() => this.onButtonPress(1)}>1</Button>
//           <Button onPress={() => this.onButtonPress(2)}>2</Button>
//           <Button onPress={() => this.onButtonPress(3)}>3</Button>
//           <Button onPress={() => this.onButtonPress(4)}>4</Button>
//           <Button onPress={() => this.onButtonPress(5)}>5</Button>
//           <Button onPress={() => this.onButtonPress(6)}>6</Button>
//           <Button onPress={() => this.onButtonPress(7)}>7</Button>
//           <Button onPress={() => this.onButtonPress(8)}>8</Button>
//           <Button onPress={() => this.onButtonPress(9)}>9</Button>
//           <Button onPress={() => this.onButtonPress(10)}>10</Button>
//         </View>
//         <View style={Style.row}>
//           <Button onPress={() => this.onButtonPress(11)}>11</Button>
//           <Button onPress={() => this.onButtonPress(12)}>12</Button>
//           <Button onPress={() => this.onButtonPress(13)}>13</Button>
//           <Button onPress={() => this.onButtonPress(14)}>14</Button>
//           <Button onPress={() => this.onButtonPress(15)}>15</Button>
//           <Button onPress={() => this.onButtonPress(16)}>16</Button>
//           <Button onPress={() => this.onButtonPress(17)}>17</Button>
//           <Button onPress={() => this.onButtonPress(18)}>18</Button>
//           <Button onPress={() => this.onButtonPress(19)}>19</Button>
//           <Button onPress={() => this.onButtonPress(20)}>20</Button>
//         </View>
//         <View style={Style.row}>
//           <Button onPress={() => this.onButtonPress(21)}>21</Button>
//           <Button onPress={() => this.onButtonPress(22)}>22</Button>
//           <Button onPress={() => this.onButtonPress(23)}>23</Button>
//           <Button onPress={() => this.onButtonPress(24)}>24</Button>
//           <Button onPress={() => this.onButtonPress(25)}>25</Button>
//           <Button onPress={() => this.onButtonPress(26)}>26</Button>
//           <Button onPress={() => this.onButtonPress(27)}>27</Button>
//           <Button onPress={() => this.onButtonPress(28)}>28</Button>
//           <Button onPress={() => this.onButtonPress(29)}>29</Button>
//           <Button onPress={() => this.onButtonPress(30)}>30</Button>
//         </View>
//         <View style={Style.row}>
//           <Button onPress={() => this.onButtonPress(31)}>31</Button>
//           <Button onPress={() => this.onButtonPress(32)}>32</Button>
//           <Button onPress={() => this.onButtonPress(33)}>33</Button>
//           <Button onPress={() => this.onButtonPress(34)}>34</Button>
//           <Button onPress={() => this.onButtonPress(35)}>35</Button>
//           <Button onPress={() => this.onButtonPress(36)}>36</Button>
//           <Button onPress={() => this.onButtonPress(37)}>37</Button>
//           <Button onPress={() => this.onButtonPress(38)}>38</Button>
//           <Button onPress={() => this.onButtonPress(39)}>39</Button>
//           <Button onPress={() => this.onButtonPress(40)}>40</Button>
//         </View>
//         <View style={Style.row}>
//           <Button onPress={() => this.onButtonPress(41)}>41</Button>
//           <Button onPress={() => this.onButtonPress(42)}>42</Button>
//           <Button onPress={() => this.onButtonPress(43)}>43</Button>
//           <Button onPress={() => this.onButtonPress(44)}>44</Button>
//           <Button onPress={() => this.onButtonPress(45)}>45</Button>
//           <Button onPress={() => this.onButtonPress(46)}>46</Button>
//           <Button onPress={() => this.onButtonPress(47)}>47</Button>
//           <Button onPress={() => this.onButtonPress(48)}>48</Button>
//           <Button onPress={() => this.onButtonPress(49)}>49</Button>
//           <Button onPress={() => this.onButtonPress(50)}>50</Button>
//         </View>
//         <View style={Style.row}>
//           <Button onPress={() => this.onButtonPress(51)}>51</Button>
//           <Button onPress={() => this.onButtonPress(52)}>52</Button>
//           <Button onPress={() => this.onButtonPress(53)}>53</Button>
//           <Button onPress={() => this.onButtonPress(54)}>54</Button>
//           <Button onPress={() => this.onButtonPress(55)}>55</Button>
//           <Button onPress={() => this.onButtonPress(56)}>56</Button>
//           <Button onPress={() => this.onButtonPress(57)}>57</Button>
//           <Button onPress={() => this.onButtonPress(58)}>58</Button>
//           <Button onPress={() => this.onButtonPress(59)}>59</Button>
//           <Button onPress={() => this.onButtonPress(60)}>60</Button>
//         </View>
//         <View style={Style.row}>
//           <Button onPress={() => this.onButtonPress(61)}>61</Button>
//           <Button onPress={() => this.onButtonPress(62)}>62</Button>
//           <Button onPress={() => this.onButtonPress(63)}>63</Button>
//           <Button onPress={() => this.onButtonPress(64)}>64</Button>
//           <Button onPress={() => this.onButtonPress(65)}>65</Button>
//           <Button onPress={() => this.onButtonPress(66)}>66</Button>
//           <Button onPress={() => this.onButtonPress(67)}>67</Button>
//           <Button onPress={() => this.onButtonPress(68)}>68</Button>
//           <Button onPress={() => this.onButtonPress(69)}>69</Button>
//           <Button onPress={() => this.onButtonPress(70)}>70</Button>
//         </View>
//         <View style={Style.row}>
//           <Button onPress={() => this.onButtonPress(71)}>71</Button>
//           <Button onPress={() => this.onButtonPress(72)}>72</Button>
//           <Button onPress={() => this.onButtonPress(73)}>73</Button>
//           <Button onPress={() => this.onButtonPress(74)}>74</Button>
//           <Button onPress={() => this.onButtonPress(75)}>75</Button>
//           <Button onPress={() => this.onButtonPress(76)}>76</Button>
//           <Button onPress={() => this.onButtonPress(77)}>77</Button>
//           <Button onPress={() => this.onButtonPress(78)}>78</Button>
//           <Button onPress={() => this.onButtonPress(79)}>79</Button>
//           <Button onPress={() => this.onButtonPress(80)}>80</Button>
//         </View>
//         <View style={Style.row}>
//           <Button onPress={() => this.onButtonPress(81)}>81</Button>
//           <Button onPress={() => this.onButtonPress(82)}>82</Button>
//           <Button onPress={() => this.onButtonPress(83)}>83</Button>
//           <Button onPress={() => this.onButtonPress(84)}>84</Button>
//           <Button onPress={() => this.onButtonPress(85)}>85</Button>
//           <Button onPress={() => this.onButtonPress(86)}>86</Button>
//           <Button onPress={() => this.onButtonPress(87)}>87</Button>
//           <Button onPress={() => this.onButtonPress(88)}>88</Button>
//           <Button onPress={() => this.onButtonPress(89)}>89</Button>
//           <Button onPress={() => this.onButtonPress(90)}>90</Button>
//         </View>
//         <View style={Style.row}>
//           <Button onPress={() => this.onButtonPress(91)}>91</Button>
//           <Button onPress={() => this.onButtonPress(92)}>92</Button>
//           <Button onPress={() => this.onButtonPress(93)}>93</Button>
//           <Button onPress={() => this.onButtonPress(94)}>94</Button>
//           <Button onPress={() => this.onButtonPress(95)}>95</Button>
//           <Button onPress={() => this.onButtonPress(96)}>96</Button>
//           <Button onPress={() => this.onButtonPress(97)}>97</Button>
//           <Button onPress={() => this.onButtonPress(98)}>98</Button>
//           <Button onPress={() => this.onButtonPress(99)}>99</Button>
//           <Button onPress={() => this.onButtonPress(100)}>100</Button>
//         </View>
//       </View>
//     );
//   }

//   render() {
//     return(
//       <View style={Style.container}>
//         {this.renderButtons()}
//       <View style={Style.footer} >
        
//       </View>
//     </View>
//     );
//   };
// };

const wheelchairs = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
];

class SelectWheelchair extends Component {

  constructor(props) {
    super(props);

    this.state = { wheelchairNumber: '' };
  }

  onButtonPress(wheelchairNumber) {
    Actions.scanBoardingPass({ wheelchairNumber });
  }

  renderButtons() {
    let views = wheelchairs.map((row, index) => {
      let inputRow = row.map((buttonValue, columnIndex) => {
        return <NumberButton
                  value={buttonValue}
                  onPress={this.onButtonPress.bind(this, buttonValue)}
                  key={'button-' + columnIndex}
                />
      });
      return <View style={Style.row} key={'row-' + index}>{inputRow}</View>
    });
    return views;
  }

  render() {
    return(
      <View style={Style.container}>
        <View style={Style.content}>
          {this.renderButtons()}
        </View>
        <View style={Style.footer}>
        </View>
      </View>
    );
  }
};
// const mapStateToProps = ({ customer }) => {
//   const { wheelchairNumber } = customer;

//   return { wheelchairNumber };
// };

// export default connect(mapStateToProps, {
//   wheelchairNumber
// })(SelectWheelchair);
export default SelectWheelchair;