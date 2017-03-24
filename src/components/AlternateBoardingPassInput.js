import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { CardSection, Input, Button } from './common'
import { Actions } from 'react-native-router-flux';
import Style from './Style';

class AlternateBoardingPassInput extends Component {

	render() {
		return(
			<View style={Style.container}>
				<View style={Style.content}>
				<CardSection>
          <Input
            label="First Name"
            placeholder="First Name"
            // onChangeText={this.onFirstNameChange.bind(this)}
            // value={this.props.firstName}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Last Name"
            placeholder="Last Name"
            // onChangeText={this.onLastNameChange.bind(this)}
            // value={this.props.lastName}
          />
       	</CardSection>
       	<CardSection>
          <Input
            label="Flight Number"
            placeholder="Flight Number"
            // onChangeText={this.onFlightNumberChange.bind(this)}
            // value={this.props.flightNumber}
          />
       </CardSection>
        <View style={{ flexDirection: 'column', height: 70}}>
        	<Text style={{ fontSize: 18, paddingLeft: 25 }}>Airline</Text>
        	<Picker
        		style={{flex: 1}}
        		selectedValue={this.props.airline}
        		onValueChange={value => console.log(value)}
        	>
        		<Picker.Item label="Alaska" value="Alaska" />
        		<Picker.Item label="American" value="American" />
        		<Picker.Item label="Delta" value="Delta" />
        		<Picker.Item label="Frontier" value="Frontier" />
        		<Picker.Item label="Southwest" value="Southwest" />
        		<Picker.Item label="United" value="United" />
        		<Picker.Item label="WestJet" value="WestJet" /> 
        	</Picker>
        </View>
        <CardSection>
        	<Button onPress={() => Actions.inputGateNumber()}>Next</Button>
        </CardSection>
				</View>
				<View style={Style.footer}>
					<Text></Text>
				</View>
			</View>
		);

	}
}

export default AlternateBoardingPassInput;