import React, { Component } from 'react';
import { View, Text, Image, Modal } from 'react-native';
import { connect } from 'react-redux'
import { Button, CardSection, ImageButton, TerminalA, TerminalB, TerminalC } from './common';
import Footer from './Footer';
import Style from './Style';
import { 
	hudsonnews, hudsonnewsdiscoveroc, ocmarket, ripcurl, sunglasshut, cpk, mcdonalds, starbucks, farmersmarket, rubys, rubystogo, americanairlinesadmiralsclub,
	brookstone, xpresspa, southcoastnews, beachfrontnews, inmotion, vinovolo, hobie, javis, jerrysdogs, pinkberry, peiwei, unitedairlinesunitedclub, subway, zovs,
	cnn, cnbc, belgiumbeerbar, carlsjr, ciao, ducks, restroom, phone
 } from '../../assets';
import { Actions } from 'react-native-router-flux';

class SelectStopsSterile extends Component {

	constructor(props) {
		super(props);

		this.state = {
			terminal: 'a',
			showModal: false
		}
	}

	onButtonPress(stopLocation) {
		console.log('this.props in SelectStopsSterile:', stopLocation);
		
	}

	renderModal() {
		if(this.state.showModal) {
			return(
				<Modal
					animationType={'slide'}
				>
					<View style={Style.container}>
				<View style={Style.content}>
					<CardSection>
						<Text> Are you at gate {this.props.destinationGate} ?	</Text>
					</CardSection>
					<CardSection>
						<View style={Style.row}>
							<Button onPress={() => this.setState({ showModal: false }) }>
								Yes
							</Button>
							<Button onPress={() => this.setState({ gateChanged: 'yes' })}>
								No
							</Button>
						</View>
					</CardSection>
		    </View>
      </View>
				</Modal>
			);
		}
	};

	renderButtons() {
		switch(this.state.terminal) {
			case 'a':
				return (
					<View style={Style.content}>
						{this.renderModal()}
						<CardSection>
							<View style={Style.row}>
								<Button onPress={() => this.setState({terminal: 'a'})}>Terminal A</Button>
								<Button onPress={() => this.setState({terminal: 'b'})}>Terminal B</Button>
								<Button onPress={() => this.setState({terminal: 'c'})}>Terminal C</Button>
							</View>
						</CardSection>
						<View style={Style.row}>
							<ImageButton 
								source={hudsonnews} 
								onPress={this.onButtonPress.bind(this, 'hudsonNews')}
							/>
							<ImageButton 
								source={hudsonnewsdiscoveroc} 
								onPress={this.onButtonPress.bind(this, 'hudsonNewsDiscoverOc')}
							/>
							<ImageButton 
								source={ocmarket} 
								onPress={this.onButtonPress.bind(this, 'ocMarket')}
							/>
							<ImageButton 
								source={ripcurl} 
								onPress={this.onButtonPress.bind(this, 'ripCurl')}
							/>
						</View>
						<View style={Style.row}>
							<ImageButton 
								source={sunglasshut} 
								onPress={this.onButtonPress.bind(this, 'sunglassHut')}
							/>
							<ImageButton 
								source={cpk} 
								onPress={this.onButtonPress.bind(this, 'cpk')}
							/>
							<ImageButton 
								source={mcdonalds} 
								onPress={this.onButtonPress.bind(this, 'mcDonalds')}
							/>
							<ImageButton 
								source={starbucks} 
								onPress={this.onButtonPress.bind(this, 'starbucks')}
							/>
						</View>
						<View style={Style.row}>
							<ImageButton 
								source={farmersmarket} 
								onPress={this.onButtonPress.bind(this, 'farmersMarket')}
							/>
							<ImageButton 
								source={rubys} 
								onPress={this.onButtonPress.bind(this, 'rubys')}
							/>
							<ImageButton 
								source={rubystogo} 
								onPress={this.onButtonPress.bind(this, 'rubysToGo')}
							/>
							<ImageButton 
								source={americanairlinesadmiralsclub} 
								onPress={this.onButtonPress.bind(this, 'americanAirlinesAdmiralsClub')}
							/>
						</View>
						<View style={Style.row}>
							<ImageButton 
								source={phone} 
								onPress={this.onButtonPress.bind(this, 'phone')}
							/>
							<ImageButton 
								source={restroom}
								onPress={this.onButtonPress.bind(this, 'restroom')}
							 />
						</View>
						<CardSection>
						<Button onPress={() => this.setState({ 'showModal': true })}>
							Gate Arrival
						</Button>
					</CardSection>
				</View>
				);

			case 'b':
				return (
					<View style={Style.content}>
					<CardSection>
						<View style={Style.row}>
							<Button onPress={() => this.setState({terminal: 'a'})}>Terminal A</Button>
							<Button onPress={() => this.setState({terminal: 'b'})}>Terminal B</Button>
							<Button onPress={() => this.setState({terminal: 'c'})}>Terminal C</Button>
						</View>
					</CardSection>
						<View style={Style.row}>
							<ImageButton 
								source={brookstone} 
								onPress={this.onButtonPress.bind(this, 'brookstone')}
							/>
							<ImageButton 
								source={xpresspa} 
								onPress={this.onButtonPress.bind(this, 'xpresspa')}
							/>
							<ImageButton 
								source={southcoastnews} 
								onPress={this.onButtonPress.bind(this, 'southCoastNews')}
							/>
							<ImageButton 
								source={beachfrontnews} 
								onPress={this.onButtonPress.bind(this, 'beachFrontNews')}
							/>
						</View>
						<View style={Style.row}>
							<ImageButton 
								source={inmotion} 
								onPress={this.onButtonPress.bind(this, 'inMotion')}
							/>
							<ImageButton 
								source={vinovolo} 
								onPress={this.onButtonPress.bind(this, 'vinoVolo')}
							/>
							<ImageButton 
								source={hobie} 
								onPress={this.onButtonPress.bind(this, 'hobie')}
							/>
							<ImageButton 
								source={mcdonalds} 
								onPress={this.onButtonPress.bind(this, 'mcDonalds')}
							/>
						</View>
						<View style={Style.row}>
							<ImageButton 
								source={starbucks} 
								onPress={this.onButtonPress.bind(this, 'starbucks')}
							/>
							<ImageButton 
								source={javis} 
								onPress={this.onButtonPress.bind(this, 'javis')}
							/>
							<ImageButton 
								source={jerrysdogs} 
								onPress={this.onButtonPress.bind(this, 'jerrysDogs')}
							/>
							<ImageButton 
								source={pinkberry} 
								onPress={this.onButtonPress.bind(this, 'pinkberry')}
							/>
						</View>
						<View style={Style.row}>
							<ImageButton 
								source={peiwei} 
								onPress={this.onButtonPress.bind(this, 'peiWei')}
							/>
							<ImageButton 
								source={subway} 
								onPress={this.onButtonPress.bind(this, 'subway')}
							/>
							<ImageButton 
								source={unitedairlinesunitedclub} 
								onPress={this.onButtonPress.bind(this, 'unitedAirlinesUnitedClub')}
							/>
							<ImageButton 
								source={zovs} 
								onPress={this.onButtonPress.bind(this, 'zovs')}
							/>
						</View>
						<View style={Style.row}>
							<ImageButton 
								source={phone} 
								onPress={this.onButtonPress.bind(this, 'phone')}
							/>
							<ImageButton 
								source={restroom} 
								onPress={this.onButtonPress.bind(this, 'restroom')}
							/>
						</View>
						<CardSection>
							<Button onPress={() => this.setState({ 'showModal': true })}>
								Gate Arrival
							</Button>
						</CardSection>
					</View>

				);
			case 'c': 
				return (
					<View style={Style.content}>
					<CardSection>
						<View style={Style.row}>
							<Button onPress={() => this.setState({terminal: 'a'})}>Terminal A</Button>
							<Button onPress={() => this.setState({terminal: 'b'})}>Terminal B</Button>
							<Button onPress={() => this.setState({terminal: 'c'})}>Terminal C</Button>
						</View>
					</CardSection>
						<View style={Style.row}>
							<ImageButton 
								source={cnn} 
								onPress={this.onButtonPress.bind(this, 'cnn')}
							/>
							<ImageButton 
								source={cnbc} 
								onPress={this.onButtonPress.bind(this, 'cnbc')}
							/>
							<ImageButton 
								source={belgiumbeerbar} 
								onPress={this.onButtonPress.bind(this, 'belgiumBeerBar')}
							/>
							<ImageButton 
								source={carlsjr} 
								onPress={this.onButtonPress.bind(this, 'carlsJr')}
							/>
						</View>
						<View style={Style.row}>
							<ImageButton 
								source={starbucks} 
								onPress={this.onButtonPress.bind(this, 'starbucks')}
							/>
							<ImageButton 
								source={ciao} 
								onPress={this.onButtonPress.bind(this, 'ciao')}
							/>
							<ImageButton 
								source={ducks} 
								onPress={this.onButtonPress.bind(this, 'ducks')}
							/>
						</View>
						<View style={Style.row}>
							<ImageButton 
								source={phone} 
								onPress={this.onButtonPress.bind(this, 'phone')}
							/>
							<ImageButton 
								source={restroom} 
								onPress={this.onButtonPress.bind(this, 'restroom')}
							/>
						</View>
						<CardSection>
							<Button onPress={() => this.setState({ 'showModal': true })}>
								Gate Arrival
							</Button>
						</CardSection>
					</View>

					);
			default: 
				return <Text>No terminal selected</Text>
		}
	}

	render() {
		return (
			<View style={Style.container}>
				{this.renderButtons()}
				<Footer />
			</View>
		);
	}


}

const mapStateToProps = ({ departure }) => {
  const { wheelchairNumber, flightNumber, airline, firstName, lastName, destinationGate } = departure;

  return { wheelchairNumber, flightNumber, airline, firstName, lastName, destinationGate };
};

export default connect(mapStateToProps, { })(SelectStopsSterile);