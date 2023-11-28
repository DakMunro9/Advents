import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import PrimaryButton from '../components/common/PrimaryButton';

export default function Page() {

  const HorizontalDivider = () => {
    return <View style={styles.divider} />;
  };

  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', }}>

      <View style={{ marginVertical: 20, marginHorizontal: 12, }}>
        <Text style={styles.mainText}>Monthly Subscription</Text>
        <Text style={styles.subText}>Plan is optional</Text>
      </View>

      <View style={{ marginTop: 10 }}></View>
      <HorizontalDivider />

      <View style={{ position: 'absolute', top: 120, borderWidth: 1, borderRadius: 5, backgroundColor: 'black', width: '50%', height: 40 }}>

        <Text style={{ fontSize: 26, color: 'white', textAlign: 'center' }}>Upgrade</Text>

      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={styles.subText}>*Subscribe to avoid service fees</Text>
      </View>

      {/* Upgrade information */}
      <View style={{ marginTop: 20, borderWidth: 2, borderRadius: 10, height: 300, width: '80%', }}>

        <View style={{ marginLeft: 20 }}>
          <Text style={{ marginTop: 10, color: 'gray', fontSize: 20 }}>1 MONTH</Text>
          <Text style={{ marginTop: 10, color: 'black', fontSize: 26, fontWeight: 'bold' }}>$7.99/Month</Text>
          <Text style={{ marginTop: 10, color: 'blue', fontSize: 20, fontWeight: 'bold' }}>5 Days Free Trial</Text>
          <Text style={{ marginTop: 10, color: 'gray', fontSize: 16 }}>Then, $7.99 per month. Cancel any time.</Text>
        </View>

        <HorizontalDivider />

        <View style={{ flexDirection: 'row', marginVertical: 20 }}>
          <View style={{ flexDirection: 'row', marginLeft: 20 }}>
            <IconFontAwesome name="star" size={20} color="black" />
            <Text style={styles.starText}> Unlimited Search</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 20 }}>
            <IconFontAwesome name="star" size={20} color="black" />
            <Text style={styles.starText}> Connect social</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
          <IconFontAwesome name="star" size={20} color="black" />
          <Text style={styles.starText}> Avoid any service fees</Text>
        </View>

      </View>

      <View style={{ marginTop: 'auto', width: '80%' }}>
        <PrimaryButton
          title="Upgrade"
          isPressed={() => router.push("/")}
        />
      </View>

      <View style={{ marginVertical: 20, }}>
        <Link href="/" asChild>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Skip</Text>
        </Link>
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
    marginTop: 10,
    fontSize: 20,
    justifyContent: 'center',
    color: 'gray',
    textAlign: 'left',
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 10,
  },
  starText: {
    color: 'black',
    fontSize: 16,
  }
});
