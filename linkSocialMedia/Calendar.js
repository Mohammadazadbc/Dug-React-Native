import { StyleSheet, Text, View ,Image, SafeAreaView, TouchableWithoutFeedback, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function Calendar() {
    const navigation = useNavigation();
  return (
      <ScrollView> 
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
         <View style={styles.topButtomContainer} >
             <Image style={{width: 120, height: 120}}  source={require('../assets/bigCalendar.png')} />
             <View >
                 <Text style={{fontSize:20, fontWeight:'bold'}} >Google calendar</Text>
                 <View style={styles.reviwContainer}>
                   <Image style={{width:33, height:35}} source={require("../assets/startf.png")} />
                   <Image style={{width:33, height:35}} source={require("../assets/startf.png")} />
                   <Image style={{width:33, height:35}} source={require("../assets/startf.png")} />
                   <Image style={{width:33, height:35}} source={require("../assets/startf.png")} />
                   <Image style={{width:33, height:35}} source={require("../assets/newStar.png")} />
                 </View>
             </View>
         </View>

          {/* Second Viw */}

          <View>
              <View style={styles.textContainer}>
                  <Text style={{fontSize: 15, fontWeight:'bold', marginBottom: 10, marginTop: 30}}>Description</Text>
                  <View>


                  
                          <Text style={{marginBottom:10}}>  
                            Get the official Google Calendar app, part of Google Workspace, for your Android phone and tablet to save time and make the most of every day.
                                </Text>
                            <Text style={{marginBottom:10}}>

                            • Different ways to view your calendar - Quickly switch between month, week, and day view.
                            </Text>
                            <Text style={{marginBottom:10}}>
                            • Events from Gmail - Flight, hotel, concert, restaurant reservations, and more are added to your calendar automatically.
                            </Text>
                            <Text style={{marginBottom:10}}>
                            • Tasks - Create, manage, and view your tasks alongside your events in Calendar
                            </Text>
                            <Text style={{marginBottom:10}}>
                            • All your calendars in one place - Google Calendar works with all calendars on your phone, including Exchange.
                            </Text>
                  </View>

                  <View>
                      <Text style={{fontSize: 15, fontWeight:'bold', marginBottom: 10, marginTop: 30}} >Integration with dials</Text>
                      <Text>
                      Get the official Google Calendar app, part of Google Workspace, for your Android phone and tablet to save time and make the most of every day.
                      </Text>
                  </View>
              </View>
          </View>

             {/* Second Viw */}
                <View style={styles.btnContainer}>
                    <View style={styles.touchBtn}>
                    <Text style={styles.btn}> Pair app</Text>

                    </View>

                </View>


    </SafeAreaView>
    </ScrollView>


  )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        alignItems:'center',
        height: 800
    },
    topIcons:{
        width: "100%",
        flexDirection:'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    topButtomContainer:{
        width:"95%",
        flexDirection: 'row',
        justifyContent:'space-around',
        marginTop: 20,
        marginLeft: 10
    },
    reviwContainer:{
        flexDirection: 'row'
    },
    textContainer:{
        width:"90%"
    },
    p:{
        fontSize: 12,
        
    },
    btnContainer:{
        position:'relative',
        width: "90%",
        marginTop: 50,
        alignItems:'flex-end',
        
       
    },
    touchBtn:{
        width: 187,
        height: 49,
        backgroundColor:  "#0A1931",  
        borderRadius: 10
    },
    btn:{ 
        color: "white",
        fontSize: 20,
        textAlign:'center',
        paddingTop: 10,
        fontWeight: 'bold',
        borderRadius: 10
    }
})