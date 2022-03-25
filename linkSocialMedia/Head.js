import { StyleSheet, Text, View,Image } from 'react-native'
import React, {useState} from 'react'



export default function Head({menuItemNumber}) {
    const imageArray =[
        {
            id:0,
            img:require("../assets/all.png")
        },
        {
            id:1,
            img:require("../assets/linked.png")
        },
        {
            id:2,
            img:require("../assets/all.png")
        },
        {
            id:3,
            img:require("../assets/linked.png")
        },
    ]
    
    
  return (
    <View style={styles.contianer}>
 
      <Image style={styles.image1}  source={imageArray[menuItemNumber -1].img} />
      <Image style={styles.image1}  source={imageArray[menuItemNumber <4 ? menuItemNumber : 0 ].img} />
    
    </View>
  )
}

const styles = StyleSheet.create({
    contianer:{
        width:"100%",
        flexDirection:'row',
        paddingHorizontal:10
    },
    image1:{
        width:"90%",
        height: 170,
        borderRadius:15
    }
})