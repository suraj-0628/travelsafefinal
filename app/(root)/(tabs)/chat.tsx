import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SosButton from "@/components/SosButton";
import { images } from "@/constants";
import { Alert } from "react-native";

const Chat = () => {
  
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
        
          <SosButton  title="SoS" />
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
