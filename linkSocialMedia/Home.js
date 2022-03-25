import { StyleSheet, Text, Image, View,ScrollView, SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import Head from './Head';
import All from './All';
import Linked from './Linked';
import Footer from './Footer';




export default function Home() {
    const [menuItemNumber, setMenuItemNumber] = useState(1);

    const handleMenuItem = (index)=>{
            setMenuItemNumber(index)
    }
  return (
      <ScrollView>  
    <SafeAreaView style={styles.container}>
           
      <View style={styles.navBar} >
      <Image  style={{ height: 25, width: 34}} source={require("../assets/lef.png")} />
      <Image  style={{ height: 25, width: 34}}  source={require("../assets/search.png")} />
            
      </View>
    
        <View style={styles.navBarMenu}>
                
       
                    <Text onPress={()=>handleMenuItem(4)} style={ menuItemNumber ===4 ? [styles.menuItem, styles.MenuActive] : styles.menuItem}  >New</Text>
             

             
                    <Text onPress={()=>handleMenuItem(3)} style={ menuItemNumber ===3 ? [styles.menuItem, styles.MenuActive] : styles.menuItem}  >Top</Text>
               

            

            
                    <Text onPress={()=>handleMenuItem(2)}  style={ menuItemNumber ===2 ? [styles.menuItem, styles.MenuActive] : styles.menuItem}  >Linked</Text>
               

                
                    <Text onPress={()=>handleMenuItem(1)} style={ menuItemNumber ===1 ? [styles.menuItem, styles.MenuActive] : styles.menuItem} >All</Text>
              
        </View>
        <Head menuItemNumber={menuItemNumber} />

        <View>
            { menuItemNumber == 2 ? <Linked/> : <All/>  }
            
            
        </View>

        <Footer />
    </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        padding: 10,
        height: 950
    },
    
    navBar:{
        flexDirection: 'row',
        width:"100%",
        justifyContent: 'space-between',
        
        
    },
    navBarMenu:{
        width:"100%",
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom:10
      
    },

    menuItem:{
        fontSize:17,
        flex:1,
        textAlign:'center',
        height:35,
        alignItems:'center',
        paddingTop:5,

    },
    MenuActive :{
        fontWeight:'bold',
        backgroundColor:"#EEEEEE",
        width:"100%",
        height:"100%",
    }

})