import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { clearAllFromAsyncStorage } from '../utils/AsyncStorageService'
import {
  emailChanged,
  passwordChanged,
  loginUser,
  updateCurrentPosition,
} from '../actions'
import { Card, CardSection, Input, Button, Spinner } from './common'

class LoginForm extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    clearAllFromAsyncStorage()
  }

  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButtonPress() {
    const { email, password } = this.props
    // const hey = {
    //   email: 'aa@aa.com',
    //   password: '123456',
    // }
    // const { email, password } = hey

    this.props.loginUser({ email, password })
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='email@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth
  return { email, password, error, loading }
}

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
  updateCurrentPosition,
})(LoginForm)
