import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={[styles.footerLogos]}>
          <Image style={[styles.images, styles.searchIcon]} source={require('../assets/newSearch1.png')} />
          <Image style={[styles.images, styles.dugLogo]} source={require('../assets/dugLogo.png')} />
          <Image style={[styles.images, styles.profilePic]}  source={require('../assets/profile.jpeg')} />
      </View>

    
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: 400,
        width:"100%",
        marginTop: 40,
        alignItems:'center',
        position: 'relative'
    },
    footerLogos:{
        backgroundColor:"white",
        width: "75%",
        alignItems:'center',
        flexDirection:'row',
        height: 70,
        borderRadius: 50,
        justifyContent: 'space-around',
        paddingHorizontal:30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    },

      images:{
          width: 40,
          height:40,
      },
      profilePic:{
          borderRadius:100 /2
      },
      dugLogo:{
          width:70,
          marginTop:10
      },
      searchIcon:{
          opacity:0.5
      },
  
})