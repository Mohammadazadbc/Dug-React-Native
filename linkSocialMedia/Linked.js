import { StyleSheet, Text, View , Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

export default function Linked() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        
        <Text style={styles.title} >Linked accounts</Text>
        <View style={styles.socialIconsContainer}>
                <View style={styles.socialIcon}>
                        <View style={styles.iconsName}>
                            <Image style={{width:30, height:30, borderRadius: "50%"}} source={require('../assets/facebook.png')} />
                            <Text style={styles.iconTitle}>Facebook</Text>
                        </View>
                        <View style={styles.linkIcons}>
                        <Image style={{width:19, height:19}}  source={require('../assets/link.png')}/>

                        </View>
                </View>

                <View style={styles.socialIcon}>
                        <View style={styles.iconsName}>
                            <Image style={{width:30, height:30, borderRadius: "50%"}} source={require('../assets/google.png')} />
                            <Text style={styles.iconTitle}>Google</Text>
                        </View>
                        <View style={styles.linkIcons}>
                        <Image style={{width:19, height:19}}  source={require('../assets/link.png')}/>

                        </View>
                </View>

                <View  style={styles.socialIcon}>
                        <View  style={styles.iconsName}>
                            <Image  style={{width:30, height:30, borderRadius: "50%"}} source={require('../assets/calendar.png')} />
                            <Text onPress={()=>navigation.navigate("Calendar")} style={styles.iconTitle}>Calendar</Text>
                        </View>
                        <View style={styles.linkIcons}>
                        <Image style={{width:19, height:19}}  source={require('../assets/link.png')}/>

                        </View>
                </View>

                <View style={styles.socialIcon}>
                        <View style={styles.iconsName}>
                            <Image style={{width:30, height:30, borderRadius: "50%"}} source={require('../assets/slack.png')} />
                            <Text style={styles.iconTitle}>Slack</Text>
                        </View>
                        <View style={styles.linkIcons}>
                        <Image style={{width:19, height:19}}  source={require('../assets/link.png')}/>

                        </View>
                </View>
                <View style={styles.socialIcon}>
                        <View style={styles.iconsName}>
                            <Image style={{width:30, height:30, borderRadius: "50%"}} source={require('../assets/paypal.png')} />
                            <Text style={styles.iconTitle}>PayPal</Text>
                        </View>
                        <View style={styles.linkIcons}>
                        <Image style={{width:19, height:19}}  source={require('../assets/link.png')}/>

                        </View>
                </View>
        </View>
        

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"100%"
    },
    title:{
        fontSize:17,
        fontWeight:'bold',
        marginVertical:20
    },
    socialIconsContainer:{
        padding:10
    },
    socialIcon:{
        flexDirection:'row',
        width:"100%",
        justifyContent:'space-between'
    },
    iconsName:{
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        marginBottom:25
    },
    linkIcons:{
        flex:2,
        alignItems:'flex-end'
    },
    iconTitle:{
        marginLeft: 10
    }
})