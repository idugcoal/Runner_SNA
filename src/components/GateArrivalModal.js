import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import { Button, CardSection } from './common';
import Style from './Style';

export default GateArrivalModal = (props) => {
   return (

         <Modal
            animationType = {"slide"}
            transparent = {false}
            visible = {props.showModal}
            onRequestClose = {() => {alert("Modal has been closed.")}}
            >
            <View style = {styles.modal}>
               <CardSection>
									<Text> Are you at gate {props.destinationGate} ?	</Text>
								</CardSection>
								<CardSection>
									<View style={Style.row}>
										<Button onPress={() => props.onGateSuccess }>
											Yes
										</Button>
										<Button onPress={() => props.onGateFail }>
											No
										</Button>
									</View>
								</CardSection>
            </View>
         </Modal>

         

   );
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
   },
   modal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'silver'
   }
});