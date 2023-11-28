import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PrimaryButton from '../components/common/PrimaryButton';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Page() {

  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', }}>

      <View style={{ marginVertical: 20, marginHorizontal: 12, }}>
        <Text style={styles.mainText}>Connect your social account</Text>
        <Text style={styles.subText}>Enhance your experience</Text>
      </View>

      {/* Facebook button */}
      <TouchableOpacity style={styles.socialButton}>
        <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>

          <IconFontAwesome name="facebook-official" size={30} color="black" />
          <View style={{ marginLeft: 20, }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Facebook </Text>
          </View>

          <View style={{ marginLeft: 'auto', marginRight: 20 }}>
            <IconFontAwesome name="long-arrow-right" size={30} color="black" />
          </View>

        </View>

      </TouchableOpacity>

      {/* Instagram button */}
      <TouchableOpacity style={styles.socialButton}>
        <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>

          <IconFontAwesome name="instagram" size={30} color="black" />
          <View style={{ marginLeft: 20, }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Instagram </Text>
          </View>

          <View style={{ marginLeft: 'auto', marginRight: 20 }}>
            <IconFontAwesome name="long-arrow-right" size={30} color="black" />
          </View>

        </View>

      </TouchableOpacity>

      {/* Twitter button */}
      <TouchableOpacity style={styles.socialButton}>
        <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>

          <IconFontAwesome name="twitter" size={30} color="black" />
          <View style={{ marginLeft: 20, }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Twitter </Text>
          </View>

          <View style={{ marginLeft: 'auto', marginRight: 20 }}>
            <IconFontAwesome name="long-arrow-right" size={30} color="black" />
          </View>

        </View>

      </TouchableOpacity>

      {/* Tiktok button */}
      <TouchableOpacity style={styles.socialButton}>
        <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>

          <Ionicons name="musical-note" size={30} color="black" />
          <View style={{ marginLeft: 20, }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Tiktok </Text>
          </View>

          <View style={{ marginLeft: 'auto', marginRight: 20 }}>
            <IconFontAwesome name="long-arrow-right" size={30} color="black" />
          </View>

        </View>

      </TouchableOpacity>

      {/* Pinterest button */}
      <TouchableOpacity style={styles.socialButton}>
        <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>

          <IconFontAwesome name="pinterest" size={30} color="black" />
          <View style={{ marginLeft: 20, }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Pinterest </Text>
          </View>

          <View style={{ marginLeft: 'auto', marginRight: 20 }}>
            <IconFontAwesome name="long-arrow-right" size={30} color="black" />
          </View>

        </View>

      </TouchableOpacity>

      <View style={{ marginTop: 'auto', width: '80%' }}>
        <PrimaryButton
          title="Continue"
          isPressed={() => router.push("/subscribe")}
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
    fontSize: 32,
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
    marginVertical: 10,
  }
});
