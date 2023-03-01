/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
const CleverTap = require('clevertap-react-native');
CleverTap.recordEvent('testEvent');
CleverTap.setDebugLevel(3);
CleverTap.initializeInbox();

CleverTap.createNotificationChannel("K11", "Clever Tap React Native Testing", "CT React Native Testing", 5, true) // The notification channel importance can have any value from 1 to 5. A higher value means a more interruptive notification.
CleverTap.addListener(CleverTap.CleverTapDisplayUnitsLoaded, (data) => {
  /* consume the event data */
  console.log("heyyyyyyyyy React",data);
});
//CleverTap.deleteNotificationChannel("RNTesting"); //Delete notification Channel
//CleverTap.createNotificationChannelGroup("groupID", "groupName"); //grp notification channel
CleverTap.addListener(CleverTap.CleverTapPushNotificationClicked, (e)=>{/*consume the event*/}) //callback when notification clicked

import type {PropsWithChildren} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Button,
    Alert,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
//thi is the main component
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Button
        title="OnUserLogin"
        //onuserlogin
        onPress={() => CleverTap.onUserLogin({'Name': 'Shyt', 'Identity': '222', 'Email': 'shikha@gmail.com', 'custom1': 43})}
      />
      <Button
        title="Record Events"
        //onuserlogin
        onPress={() => CleverTap.recordEvent(
          'Product Viewed', {'Product Name': 'Dairy Milk',
                                               'Category': 'Chocolate',
                                               'Amount': 20.00
                                              })} // event without properties
      
      />
      <Button
        title="Profile Push"
        //profilepush
        onPress={() => { 
          var myStuff = ['bag','shoes']
          var props = {
                  'Name': 'Jack Mon',                    // String
                  'Identity': '610',                    // String or number
                  'Email': 'christ@gmail.com',                  // Email address of the user
                  'Phone': '+919782054838',                   // Phone (with the country code, starting with +)
                  'Gender': 'M',                             // Can be either M or F
                  'DOB' : new Date('1992-12-22T06:35:31'),   // Date of Birth. Set the Date object to the appropriate value first
          
          // optional fields. controls whether the user will be sent email, push, etc.
                  'MSG-email': false,                        // Disable email notifications
                  'MSG-push': true,                          // Enable push notifications
                  'MSG-sms': false,                          // Disable SMS notifications
                  'MSG-whatsapp': true,                      // Enable WhatsApp notifications
                  'Stuff': myStuff                           //Array of Strings for user properties
          }
          CleverTap.recordEvent('Product Viewed', props)  //recording properties with  event data
          CleverTap.profileSet(props)}
        }
        // onPress={() => CleverTap.profileSet({
                  
        //           'Name': 'Jack Montana',                    // String
        //           'Identity': '61026032',                    // String or number
        //           'Email': 'jack@gmail.com',                  // Email address of the user
        //           'Phone': '+14155551234',                   // Phone (with the country code, starting with +)
        //           'Gender': 'M',                             // Can be either M or F
        //           'DOB' : new Date('1992-12-22T06:35:31'), 
        //             // Date of Birth. Set the Date object to the appropriate value first
          
        //   // optional fields. controls whether the user will be sent email, push, etc.
        //           'MSG-email': false,                        // Disable email notifications
        //           'MSG-push': true,                          // Enable push notifications
        //           'MSG-sms': false,                          // Disable SMS notifications
        //           'MSG-whatsapp': true,                      // Enable WhatsApp notifications
        //           'Stuff': myStuff                           //Array of Strings for user properties
        //   })}
      />
      <Button
        title="Charged"
        //Charged
        onPress={() => {
          var chargeDetails = { 'totalValue': 20, 
                      'category': 'books', 
                      'purchase_date': new Date()
                    }
var items = [
{ 'title': 'book1', 'published_date': new Date('2010-12-12T06:35:31'), 'author': 'ABC' },
{ 'title': 'book2', 'published_date': new Date('2020-12-12T06:35:31'), 'author': 'DEF'},
{ 'title': 'book3', 'published_date': new Date('2000-12-12T06:35:31'), 'author': 'XYZ' }]

CleverTap.recordChargedEvent(chargeDetails, items);
        }}
      />
      <Button
        title="AppInBox"
        //AppInbox
        onPress={() => CleverTap.showInbox({
          'tabs': ['Offers', 'Promotions'],
        'navBarTitle': 'My App Inbox',
        'navBarTitleColor': '#FF0000',
        'navBarColor': '#FFFFFF',
        'inboxBackgroundColor': '#AED6F1',
        'backButtonColor': '#00FF00',
        'unselectedTabColor': '#0000FF',
        'selectedTabColor': '#FF0000',
        'selectedTabIndicatorColor': '#000000',
        'noMessageText': 'No message(s)',
        'noMessageTextColor': '#FF0000'
        })}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonContainer:{
  margin:20
  },
});

export default App;







