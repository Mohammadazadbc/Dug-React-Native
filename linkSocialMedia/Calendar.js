import { StyleSheet, Text, View ,Image, SafeAreaView, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Calendar() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topIcons}>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate("Home")} >
                  <Image  style={{width:34, height:25, marginLeft: 10}} source={require("../assets/lef.png")} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate("Home")}> 
                 <Image style={{width:15, height: 11, marginRight: 15, marginTop: 5}} source={require("../assets/x.png")} />
            </TouchableWithoutFeedback>
        </View>

         {/* Second Viw */}
         <View>
             <Image source={require('../assets/bigCalendar.png')} />
             <View>
                 <Text>Google calendar</Text>
                 <View>
                     <Image source={require("../assets/startf.png")}/>
                    <Image source={require("../assets/stare.PNG")} />
                 </View>
             </View>
         </View>
    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        alignItems:'center'
    },
    topIcons:{
        width: "100%",
        flexDirection:'row',
        marginTop: 10,
        justifyContent: 'space-between'
    }
})