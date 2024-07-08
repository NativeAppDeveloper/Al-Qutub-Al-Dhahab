import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../utils/Styles'
import { useDispatch } from 'react-redux'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
const Login = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '883554138799-43l9trb38n2q1skpesilphm6cko6dcck.apps.googleusercontent.com', // your client ID
    })
  }, [])
  

  const onGoogleButtonPress = async () => {

    try {
      // Get the user's ID token
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
     let response = await auth().signInWithCredential(googleCredential);
      submitHandler()
    } catch (error) {
      console.error({ error });
    }
  };


  const submitHandler = () => {
    dispatch({
      type: 'CHANGE_STACK',
      payload: 'MAIN',
    });
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={onGoogleButtonPress} style={{ backgroundColor: colors.white ,flexDirection:'row',width:200,alignItems:'center',justifyContent:'center',gap:5,padding:4,borderRadius:10}}>
          <Image style={{height:30,width:30}} resizeMode='contain' source={require('../../assets/Google.png')}/>
          <Text style={{ color: colors.black,fontSize:20 }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Login