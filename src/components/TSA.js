import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, CardSection, ImageButton } from './common';
import Footer from './Footer';
import Style from './Style';
import { Actions } from 'react-native-router-flux';

class TSA extends Component {

	onButtonPress() {
		Actions.main();
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
		      />
		      <CardSection>
			      <Button onPress={this.onButtonPress.bind(this)}>
			      	Submit Comment
			      </Button>
			    </CardSection>
		    </View>
		    <Footer />
      </View>
		);
	}
}

export default TSA;