import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Footer from './Footer';
export default function All() {
  return (
  
    <View style={styles.contianer}>
      <View style={ styles.socialMedia}>
        <Text style={styles.title}>Social Media</Text>
            <View   style={styles.socialMediaIcons}> 
                <View style={styles.iconsContainer}>
                <Image  style={{ height: 50, width: 50}}  source={require("../assets/facebook.png")} />
                <Text style={styles.iconName} >Facebook</Text>
                </View>

                <View style={styles.iconsContainer}>
                <Image  style={{ height: 50, width: 50}}  source={require("../assets/instagram.png")} />
                <Text style={styles.iconName}>Instagram</Text>
                </View>

                <View style={styles.iconsContainer}>
                <Image  style={{ height: 50, width: 50}}  source={require("../assets/twitter.png")} />
                <Text style={styles.iconName}>Twitter</Text>
                </View>

                <View style={styles.iconsContainer}>
                <Image  style={{ height: 50, width: 50}}  source={require("../assets/youtube.png")} />
                <Text style={styles.iconName}>youtube</Text>
                </View>

                <View style={styles.iconsContainer}>
                <Image  style={{ height: 50, width: 50}} source={require("../assets/titktok.png")} />
                <Text style={styles.iconName}>Tiktok</Text>
                </View>
        </View>
      </View>

      <View style={ styles.socialMedia}>
        <Text style={styles.title}>Messaging</Text>
            <View   style={styles.socialMediaIcons}> 
                <View style={styles.iconsContainer}>
                <Image  style={{ height: 50, width: 50}}  source={require("../assets/telegram.png")} />
                <Text style={styles.iconName} >Telegram</Text>
                </View>

                <View style={styles.iconsContainer}>
                <Image  style={{ height: 50, width: 50}}  source={require("../assets/whtasapp.png")} />
                <Text style={styles.iconName}>Whatsapp</Text>
                </View>

                <View style={styles.iconsContainer}>
                <Image  style={{ height: 50, width: 50}}  source={require("../assets/signal.png")} />
                <Text style={styles.iconName}>Signal</Text>
                </View>

                <View style={styles.iconsContainer}>
                <Image  style={{ height: 50, width: 50}}  source={require("../assets/skype.png")} />
                <Text style={styles.iconName}>Skype</Text>
                </View>

        </View>
      </View>

      <View style={ styles.socialMedia}>
        <Text style={styles.title}>Design</Text>
            <View   style={styles.socialMediaIcons}> 
                <View style={styles.iconsContainer}>
                <Image  style={{ height: 50, width: 50}}  source={require("../assets/pints.png")} />
                <Text style={styles.iconName} >Pinterest</Text>
                </View>

                <View style={styles.iconsContainer}>
                <Image  style={{ height: 50, width: 50, borderRadius:8}}  source={require("../assets/figma.png")} />
                <Text style={styles.iconName}>Figma</Text>
                </View>

                <View style={styles.iconsContainer}>
                <Image  style={{ height: 50, width: 50}}  source={require("../assets/drivvlz.png")} />
                <Text style={styles.iconName}>Dribbble</Text>
                </View>
                
                

        </View>
      </View>

      
      <View style={styles.footerView}>
            <Footer />
        </View>

    </View>
  
   
  )
}

const styles = StyleSheet.create({
  contianer:{
    width:"100%",
    height: 650,
    paddingHorizontal: 10
  },
  socialMedia:{
    width:"100%",
  },
  socialMediaIcons:{
    width:'100%',
    flexDirection:'row',
    flexWrap: 'wrap',
  },
  iconsContainer:{
    alignItems:'center',
    width:70,
    margin:8,
    marginTop:3
      
  },
  title:{
    fontSize:17,
    marginTop:20,
    marginBottom:15,
    fontWeight: 'bold'
  
  },
  iconName:{
    fontSize:11
  }

})