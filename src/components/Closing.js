import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { closeDeparture } from '../actions';
import { Button, CardSection, ImageButton, NumberButton } from './common';
import Footer from './Footer';
import Style from './Style';
import { Actions } from 'react-native-router-flux';


class Closing extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
	}

	render() {
		return(
			<View style={Style.container}>
				<View style={Style.content}>
					<TextInput
		        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
		        editable = {true}
		        multiline = {true}
		        numberOfLines = {10}
		        value={this.state.text}
		        onChangeText={(text) => this.setState({text})}
		        placeholder={'Add comment...'}
		      />
		      <CardSection>
			      <Button onPress={() => Actions.main({ type: 'reset' }) }>
			      	Submit Comment and Begin New Task
			      </Button>
			    </CardSection>
				</View>
		   </View>
		);
	}
}

const mapStateToProps = ({ departure }) => {
  const { destinationGate, finalGate } = departure;

  return { destinationGate, finalGate };
};

export default connect(mapStateToProps, {
	closeDeparture
})(Closing);