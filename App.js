//import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';
import { BlurView } from 'expo-blur';
import { Dimensions } from 'react-native';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';

const uri = 'https://i.pinimg.com/originals/fc/18/27/fc1827a00ac5c7e414597fd87ebae1ca.jpg';
const profilePic = 'https://img.a.transfermarkt.technology/portrait/big/88755-1684245748.jpg?lm=1';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
      <ScrollView contentContainerStyle={styles.scrollView2}>
        <BlurView intensity={90}>
          <View style={styles.login}> 
            <Image source={{ uri: profilePic }} style={styles.profilePic} />
            <View>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>E-mail</Text>
              <TextInput style={styles.input} placeholder='correo@algo.algo' />
            </View>
            <View>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Password</Text>
              <TextInput style={styles.input} placeholder='password' secureTextEntry={true} />
            </View>
            <View>
              <TouchableOpacity style={[styles.button, { backgroundColor: '#00CFEB90' }]}>
                <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, { backgroundColor: '#6792F090' }]}>
                <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      </ScrollView>
    </View >
  );
}

export default function App() {
  return (
    <LoginScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'cover',
  },
  login: {
    width: 350,
    height: 500,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 30,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
    marginBottom: 20,
  },
  scrollView2: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1,
    margin: 5,
    paddingVertical: 5,
  }
});
