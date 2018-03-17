import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Modal from 'react-native-simple-modal'
import { addCommentsTSA, setTimeEnd } from '../actions';
import { Button, CardSection, ImageButton } from './common';
import Footer from './Footer';
import Style from './Style';
import { Actions } from 'react-native-router-flux';

class TSA extends Component {

	constructor(props) {
		super(props);
		const timeTSAStart = Date.now();
		this.state = {
			text: '',
			timeTSAStart: timeTSAStart,
			open: false
		}
	}

	onButtonPress() {
		this.props.addCommentsTSA(this.state.text, this.state.timeTSAStart);
		this.setState({ open: true });
		this.props.setTimeEnd();
	}

	onGateArrival() {
	}

	onGateSuccess() {
		this.setState({open: false})
		Actions.closing({reset: true});
	}

	onGateFail() {
		this.setState({open: false})
		Actions.selectGate({final: true});
	}

	render() {
		return(
			<View style={Style.container}>
				<View style={Style.content}>
					<TextInput
		        {...this.props} 
		        editable = {true}
		        // multiline = {true}
		        // numberOfLines = {10}
		        height={290}
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
				<Modal
	        open={this.state.open}
	        modalDidClose={() => this.setState({open: false})}
	        style={{alignItems: 'center'}}>
	        <View>
	          <Text style={{fontSize: 20, marginBottom: 10}}>Are you at {this.props.destinationGate}?</Text>
	          <CardSection>
							<View style={Style.row}>
								<Button onPress={ this.onGateSuccess.bind(this) }>
									Yes
								</Button>
								<Button onPress={ this.onGateFail.bind(this) }>
									No
								</Button>
							</View>
						</CardSection>
	        </View>
	      </Modal>
      </View>
		);
	}
}

const mapStateToProps = ({ departure }) => {
  const { commentsTSA, destinationGate  } = departure;

  return { commentsTSA, destinationGate };
};

export default connect(mapStateToProps, {
  addCommentsTSA, setTimeEnd
})(TSA);