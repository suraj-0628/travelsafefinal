import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SosButton from "@/components/SosButton";
import { images } from "@/constants";
import { Alert ,Linking} from "react-native";
import { useLocationStore } from "@/store";

const Chat = () => {
  const {
    userLongitude,
    userLatitude,
    userAddress,
  } = useLocationStore();
  const sendEmail = () => {
    // Set the recipient email, subject, and body of the email
    const email = 'surajra0628@gmail.com'; // Replace with the recipient's email
    const subject = `Alert : SoS`;
    const body = `Latitude: ${userLatitude} , Longitude: ${userLongitude} near ${userAddress}`;
  
    // Create the mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    // Check if the mailto link can be opened
    Linking.canOpenURL(mailtoLink)
      .then((supported) => {
        if (supported) {
          // Open the email client with the pre-filled information
          return Linking.openURL(mailtoLink);
        } else {
          Alert.alert('Error', 'Cannot open email client');
        }
      })
      .catch((err) => {
        console.error('An error occurred', err);
        Alert.alert('Error', 'An error occurred while trying to open email client');
      });
  };
  
  // const accountSid = 'ACe638c9fb5c935a9ebf91e8993eb74e8b';
  // const authToken = '7cfb6cfb18d78d80646bacf31c1137a0';
  // const client = require('twilio')(accountSid, authToken);
  // client.studio.v2.flows('FW0b4de5173463dbbfe31b1b9d7fe51220')
  //     .executions
  //     .create({
  //         to: '+919363064502',
  //         from: '+13213924230',
  //     })
//   const sendAlert = async () => {
//     try {
//         const response = await fetch('https://studio.twilio.com/v2/Flows/FW0b4de5173463dbbfe31b1b9d7fe51220', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 message: 'This is an alert from React Native!',
//                 to: '+919363064502', // Replace with the recipient's phone number
//             }),
//         });

//         const data = await response.text();
//         Alert.alert('Success', data);
//     } catch (error) {
//         Alert.alert('Error', 'Failed to send alert.');
//         console.error(error);
//     }
// };

  return (
   

    <SafeAreaView className="flex-1 bg-white p-5">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Text className="text-2xl font-JakartaBold">Alert Emergency Contacts</Text>
        <View className="flex-1 h-fit flex justify-center items-center">
        
          <SosButton onPress={sendEmail} title="SoS" />
          <Text className="text-3xl font-JakartaBold mt-3">
          Are you in an emergency?
          </Text>
          <Text className="text-base mt-2 text-center px-7">
          Press the SOS button, your live location will be shared wih the nearest help centre and your emergency contacts  
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;
