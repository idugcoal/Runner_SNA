import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { setFinalGateNumber } from '../actions';
import { Button, CardSection, ImageButton, NumberButton } from './common';
import Footer from './Footer';
import Style from './Style';
import { Actions } from 'react-native-router-flux';


class GateArrival extends Component {

	constructor(props) {
		super(props);
		this.state = {
			gateChanged: '',
			showButtons: '',
		}
	}

	render() {
		return(
			<View style={Style.container}>
				<View style={Style.content}>
					<CardSection>
						<Text> Are you at gate {this.props.destinationGate} ?	</Text>
					</CardSection>
					<CardSection>
						<View style={Style.row}>
							<Button onPress={() => Actions.closing({ timeGateArrival: Date.now() }) }>
								Yes
							</Button>
							<Button onPress={() => this.setState({ gateChanged: 'yes' })}>
								No
							</Button>
						</View>
					</CardSection>
		    </View>
		    <Footer />
      </View>
		);
	}
}

const mapStateToProps = ({ departure }) => {
  const { destinationGate, finalGate } = departure;

  return { destinationGate, finalGate };
};

export default connect(mapStateToProps, {
	setFinalGateNumber
})(GateArrival);