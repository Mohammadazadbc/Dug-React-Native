import { StyleSheet, Text, Image, View,ScrollView, SafeAreaView, TextInput, TouchableWithoutFeedback } from 'react-native'
import React,{useState} from 'react'
import Head from './Head';
import All from './All';
import Linked from './Linked';






export default function Home() {
    const [menuItemNumber, setMenuItemNumber] = useState(1);
    const [showSearch, setShowSearch] = useState(false)
;
    const handleMenuItem = (index)=>{
            setMenuItemNumber(index)
    }
    const showTextInput= ()=>{
        setShowSearch(!showSearch)
        console.log(showSearch);
    }
  return (
      <ScrollView>  
    <SafeAreaView style={styles.container}>
           
      <View style={styles.navBar} >
      <Image  style={{ height: 25, width: 34}} source={require("../assets/lef.png")} />
      <TextInput style={ showSearch ? styles.showTextInput : styles.textInput} placeholder="Search..." />
      <TouchableWithoutFeedback onPress={showTextInput}>
      <Image   style={{ height: 25, width: 34}}  source={require("../assets/search.png")} />

      </TouchableWithoutFeedback>
            
      </View>
    
        <View style={styles.navBarMenu}>
                
                    <View  style={ menuItemNumber ===4 ? [styles.menuItem, styles.MenuActive] : styles.menuItem} >

                        <Text style={ menuItemNumber ===4 ? styles.pActive :"" } onPress={()=>handleMenuItem(4)}   >New</Text>
                        </View>
                    
                        <View  style={ menuItemNumber ===3 ? [styles.menuItem, styles.MenuActive] : styles.menuItem}>
                            <Text style={ menuItemNumber ===3 ? styles.pActive :"" }  onPress={()=>handleMenuItem(3)}  >Top</Text>

                        </View>
                
                        <View   style={ menuItemNumber ===2 ? [styles.menuItem, styles.MenuActive] : styles.menuItem}>
                                <Text style={ menuItemNumber ===2 ? styles.pActive :"" } onPress={()=>handleMenuItem(2)}  >Linked</Text>
                        </View>
                        
                        <View   style={ menuItemNumber ===1 ? [styles.menuItem, styles.MenuActive] : styles.menuItem}>
                            <Text style={ menuItemNumber ===1 ? styles.pActive :"" } onPress={()=>handleMenuItem(1)}  >All</Text>
                        </View>
              
        </View>
        <Head menuItemNumber={menuItemNumber} />

        <View>
            { menuItemNumber == 2 ? <Linked/> : <All/>  }
            
        </View>

       
    </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        position: 'relative',
        width:"100%",
        backgroundColor: '#E5E5E5',
        
    },
    
    navBar:{
        flexDirection: 'row',
        width:"100%",
        paddingHorizontal: 5,
        paddingTop:5,
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
        paddingTop:8,


    },
    MenuActive :{
        backgroundColor:"#EEEEEE",
        width:"100%",
        height:"100%",
        borderRadius: 10,
        alignItems:'center'
    },
    pActive:{
        fontWeight: 'bold'
    },

    textInput:{
         display: 'none'
    },
    showTextInput:{
        height: 30,
        backgroundColor: 'white',
         fontSize: 15, width:300,
         padding:3,
         borderRadius:5,
        
    }
    

})