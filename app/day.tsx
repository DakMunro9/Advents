import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Calendar, CalendarTheme } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Feather';
import { Link } from 'expo-router';

export default function Page() {
    const customTheme: CalendarTheme = {
        textMonthFontSize: 22, // Set the font size for the month text
        textDayFontSize: 20,   // Set the font size for the day text
        textDayHeaderFontSize: 18, // Set the font size for the day header text
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.calendarWrapper}>
                <Calendar
                    style={{
                        borderWidth: 0,
                    }}
                    theme={customTheme}
                    // Customize calendar props as needed
                    onDayPress={(day) => console.log('selected day', day)}
                    markedDates={{
                        // marked dates will most likely be updated via database
                    }}
                />
            </View>

            <View>
                <View style={styles.textContainer}>
                    <Icon name="info" size={30} color="gray" />
                    <Text style={styles.infoText}> These dates are available to you.</Text>

                </View>
                <View style={styles.textContainer}>
                    <Icon name="clock" size={30} color="gray" />
                    <Text style={styles.infoText}> ? days until event.</Text>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Set day"
                    color={"black"}
                    onPress={() => alert('Continue button clicked')}
                />
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    textContainer: {
        flexDirection: 'row',
        padding: 16, // Adjust the padding as needed
        //backgroundColor: 'white', // Optional background color for the padding area
    },

    infoText: {
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        color: 'gray',
    },
    calendarWrapper: {
        height: '40%',
        width: '80%',
    },
    buttonContainer: {
        marginBottom: 10, // Adjust as needed for spacing
        //marginRight: 30,
        //marginLeft: 30,
        height: 50,
        width: '90%',
    },
});
