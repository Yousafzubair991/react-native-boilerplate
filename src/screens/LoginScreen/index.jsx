import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import * as Yup from 'yup';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from '../../components/AppText';
import SafeView from '../../components/SafeView';
import Form from '../../components/Form';
import FormField from '../../components/FormField';
import SubmitButton from '../../components/SubmitButton';
import ErrorMessage from '../../components/ErrorMessage';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label('email'),
  password: Yup.string().required().min(3).label('Password'),
});

function Login({userLoginFun, user, navigation}) {
  const [loginFailed, setLoginFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({email, password}) => {
    console.log('@@@ email', email, password);
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      keyboardVerticalOffset={Platform.select({android: -350})}
      behavior={'padding'}>
      <ScrollView>
        <SafeView>
          <View style={style.loginScreenContainer}>
            <View style={style.mainTextContainer}>
              <AppText style={style.loginMainText}>
                Welcome to Bid Genie
              </AppText>
              <View style={style.loginMainFormContainer}>
                <Form
                  initialValues={{email: '', password: ''}}
                  onSubmit={handleSubmit}
                  validationSchema={validationSchema}>
                  <ErrorMessage
                    error={
                      user &&
                      user.data &&
                      user.data.error === 'invalid_credentials'
                        ? 'Email or Password is incorrect'
                        : 'Something went wrong'
                    }
                    visible={loginFailed}
                  />
                  <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email Address"
                    textContentType="emailAddress"
                    maxLength={30}
                    style={{width: '100%'}}
                    FiledIconType={MaterialCommunityIcons}
                  />
                  <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                    maxLength={30}
                    style={{width: '100%'}}
                    FiledIconType={MaterialCommunityIcons}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <SubmitButton
                      title="Login"
                      buttonStyle={style.submitButton}
                      width={300}
                      color="splashButtonColor"
                      loading={loading}
                    />
                  </View>
                </Form>
              </View>
            </View>
          </View>
        </SafeView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  loginScreenContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 70,
  },
  loginScreenImage: {
    width: 180,
    height: 115,
  },
  mainTextContainer: {
    marginTop: 60,
  },
  loginMainText: {
    fontWeight: 'bold',
    color: '#353343',
    fontSize: 20,
    textAlign: 'center',
  },
  loginMainFormContainer: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
  },
  submitButton: {
    padding: 15,
    borderRadius: 10,
    marginTop: 50,
    textAlign: 'center',
    display: 'flex',
    color: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
export default Login;
