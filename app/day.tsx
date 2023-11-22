import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Calendar, CalendarTheme, LocaleConfig } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Feather';
import { Link } from 'expo-router';
import PrimaryButton from '../components/common/PrimaryButton';

LocaleConfig.locales['myConfig'] = {
    monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};

LocaleConfig.defaultLocale = 'myConfig';

export default function Page() {

    {/* Time Calculator */ }
    const today = new Date(); // Get the current date
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [daysDifference, setDaysDifference] = useState('?');

    const calculateDaysDifference = (end) => {
        const startDateObject = new Date();
        const endDateObject = new Date(end);

        const timeDifference = endDateObject.getTime() - startDateObject.getTime();
        const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

        setDaysDifference(daysDifference);
    };

    const customTheme: CalendarTheme = {
        textMonthFontSize: 22,
        textDayFontSize: 20,
        textDayHeaderFontSize: 18,
    };

    const [selectedDate, setSelectedDate] = useState('');

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
        calculateDaysDifference(day.dateString);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.calendarWrapper}>
                <Calendar
                    style={{
                        borderWidth: 0,
                        width: 400,
                        height: 300,
                    }}
                    theme={customTheme}
                    minDate={today.toISOString().split('T')[0]} // Sets the minimum selectable date
                    // Customize calendar props as needed
                    //onDayPress={(day) => console.log('selected day', day)}
                    onDayPress={handleDayPress}
                    markingType={'custom'}
                    markedDates={{
                        [selectedDate]: {
                            customStyles: {
                                container: {
                                    backgroundColor: 'black',
                                    borderRadius: 5,
                                    marginHorizontal: 20,
                                    elevation: 2,
                                },
                                text: {
                                    color: 'white',
                                    fontWeight: 'bold'
                                }
                            }
                        },
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
                    <Text style={styles.infoText}> {daysDifference} day(s) until event.</Text>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <PrimaryButton
                    title="Set day"
                    isPressed={() => alert('Set day button clicked')}
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
        marginTop: 50,
        //height: '50%',
        //width: '90%',
    },
    buttonContainer: {
        marginBottom: 10, // Adjust as needed for spacing
        //marginRight: 30,
        //marginLeft: 30,
        height: 50,
        width: '90%',
    },
});
