import React from 'react';
import { View } from 'react-native';
import { CardSection, Button, ImageButton } from './';
import { 
	hudsonnews, hudsonnewsdiscoveroc, ocmarket, ripcurl, sunglasshut, cpk, mcdonalds, starbucks, 
	farmersmarket, rubys, rubystogo, americanairlinesadmiralsclub, restroom, phone
 } from '../../../assets';
import Style from '../Style'
import { Actions } from 'react-native-router-flux';

const TerminalC = ({ onPress }) => {
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
					source={hudsonnews} 
					onPress={() => onPress('hudsonNews') }
				/>
				<ImageButton 
					source={hudsonnewsdiscoveroc} 
					onPress={() => onPress('hudsonNewsDiscoverOc')}
				/>
				<ImageButton 
					source={ocmarket} 
					onPress={() => onPress('ocMarket')}
				/>
				<ImageButton 
					source={ripcurl} 
					onPress={() => onPress('ripCurl')}
				/>
			</View>
			<View style={Style.row}>
				<ImageButton 
					source={sunglasshut} 
					onPress={() => onPress('sunglassHut')}
				/>
				<ImageButton 
					source={cpk} 
					onPress={() => onPress('cpk')}
				/>
				<ImageButton 
					source={mcdonalds} 
					onPress={() => onPress('mcDonalds')}
				/>
				<ImageButton 
					source={starbucks} 
					onPress={() => onPress('starbucks')}
				/>
			</View>
			<View style={Style.row}>
				<ImageButton 
					source={farmersmarket} 
					onPress={() => onPress('farmersMarket')}
				/>
				<ImageButton 
					source={rubys} 
					onPress={() => onPress('rubys')}
				/>
				<ImageButton 
					source={rubystogo} 
					onPress={() => onPress('rubysToGo')}
				/>
				<ImageButton 
					source={americanairlinesadmiralsclub} 
					onPress={() => onPress('americanAirlinesAdmiralsClub')}
				/>
			</View>
			<View style={Style.row}>
				<ImageButton 
					source={phone} 
					onPress={() => onPress('phone')}
				/>
				<ImageButton 
					source={restroom}
					onPress={() => onPress('restroom')}
				 />
			</View>
			<CardSection>
			<Button onPress={() => Actions.gateArrival()}>
				Gate Arrival
			</Button>
		</CardSection>
	</View>
	);
};

export { TerminalC };