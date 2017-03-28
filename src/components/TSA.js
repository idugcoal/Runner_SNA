import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addCommentsTSA } from '../actions';
import { Button, CardSection, ImageButton } from './common';
import Footer from './Footer';
import Style from './Style';
import { Actions } from 'react-native-router-flux';

class TSA extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
	}

	onButtonPress() {
		this.props.addCommentsTSA(this.state.text);
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
			      <Button onPress={this.onButtonPress.bind(this)}>
			      	TSA End
			      </Button>
			    </CardSection>
		    </View>
		    <Footer />
      </View>
		);
	}
}

const mapStateToProps = ({ departure }) => {
  const { commentsTSA } = departure;

  return { commentsTSA };
};

export default connect(mapStateToProps, {
  addCommentsTSA
})(TSA);