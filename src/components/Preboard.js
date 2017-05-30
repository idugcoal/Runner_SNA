import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { setPreboardType } from '../actions';
import { Button, CardSection } from './common';
import Footer from './Footer';
import Style from './Style';
import { Actions } from 'react-native-router-flux';


class Preboard extends Component {

	constructor(props) {
		super(props);
	}

	onButtonPress(preboardType) {
		this.props.setPreboardType(this.props.runType, preboardType);
	}

	render() {
		return(
			<View style={Style.container}>
				<View style={Style.content}>
					<CardSection>
						<Text> Did you use an aisle or wheelchair?	</Text>
					</CardSection>
					<CardSection>
						<View style={Style.row}>
							<Button onPress={() => this.onButtonPress('aisle') }>
								Aisle
							</Button>
							<Button onPress={() => this.onButtonPress('wheelchair') }>
								Wheelchair
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
  const { runType } = departure;

  return { runType };
};

export default connect(mapStateToProps, {
	setPreboardType
})(Preboard);