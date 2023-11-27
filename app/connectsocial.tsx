import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PrimaryButton from '../components/common/PrimaryButton';

export default function Page() {

  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', }}>

      <View style={{ marginVertical: 20 , marginHorizontal: 10,}}>
        <Text style={styles.mainText}>Connect your social account</Text>
        <Text style={styles.subText}>Enhance your experience</Text>
      </View>

      <TouchableOpacity style={styles.socialButton}>
        <Text style={{fontSize: 20}}> Facebook </Text>
      </TouchableOpacity>

      <View style={{marginTop: 'auto', width: '80%'}}>
      <PrimaryButton
            title="Continue"
            isPressed={() => router.push("/")}
          />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 36,
    //justifyContent: 'center',
    textAlign: 'left',
  },
  subText: {
    marginTop: 20,
    fontSize: 20,
    justifyContent: 'center',
    color: 'gray',
    textAlign: 'left',
  },
  socialButton: {
    borderWidth: 2, 
    height: 80, 
    width: 400, 
    borderRadius: 5,
  }
});
