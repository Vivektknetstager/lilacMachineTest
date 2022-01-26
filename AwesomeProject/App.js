import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, ScrollView, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            addedString:""
        }
    }

dataChange(value){
    this.setState({
        addedString:this.state.addedString==""?value:this.state.addedString+value
    })
}
calculate(){
    if(this.state.addedString=="1+3+9"){
        alert("Hello world")
    }
}
    render() {
        return (
            <ScrollView style={{height:100}}>
            <SafeAreaView style={{flex:1,minHeight:height}}>
                {/* <KeyboardAvoidingView> */}
            <View style={{flex:1,backgroundColor:"#787878"}}>
               <View style={{flex:1.5,justifyContent:"flex-end",paddingBottom:10}}>
                        <Text style={{color:"#bfbfbf",textAlign:"right",width:"95%",alignSelf:"center",fontSize:30}}>{this.state.addedString}</Text>
               </View>
               <View style={{flex:1,borderTopWidth:1,borderTopColor:"#6b6b6b",flexDirection:"row"}}>
                    <View style={{flex:4,marginTop:40}}>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <TouchableOpacity onPress={()=>{
                                this.setState({addedString:""})
                            }} style={styles.buttonView}>
                                    <Text style={styles.buttonText}> C </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{
                                    this.dataChange("+")
                                }}
                             style={styles.buttonView}>
                                    <Text style={styles.buttonText}> +/- </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonView}>
                                    <Text style={styles.buttonText}> %</Text>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <TouchableOpacity onPress={()=>{
                                this.dataChange("7")
                            }} style={styles.buttonView}>
                                    <Text  style={styles.buttonText}> 7 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={()=>{
                                this.dataChange("8")
                            }}
                            style={styles.buttonView}>
                                    <Text style={styles.buttonText}> 8</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={()=>{
                                this.dataChange("9")
                            }}
                             style={styles.buttonView}>
                                    <Text style={styles.buttonText}> 9 </Text>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <TouchableOpacity
                            onPress={()=>{
                                this.dataChange("4")
                            }}
                            style={styles.buttonView}>
                                    <Text style={styles.buttonText}> 4 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={()=>{
                                this.dataChange("5")
                            }}
                            style={styles.buttonView}>
                                    <Text style={styles.buttonText}> 5 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={()=>{
                                this.dataChange("6")
                            }}
                             style={styles.buttonView}>
                                    <Text style={styles.buttonText}> 6 </Text>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <TouchableOpacity
                            onPress={()=>{
                                this.dataChange("1")
                            }}
                            style={styles.buttonView}>
                                    <Text style={styles.buttonText}> 1 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={()=>{
                                this.dataChange("2")
                            }} 
                            style={styles.buttonView}>
                                    <Text style={styles.buttonText}> 2 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={()=>{
                                this.dataChange("3")

                            }}
                            style={styles.buttonView}>
                                    <Text style={styles.buttonText}> 3 </Text>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={{flex:1,flexDirection:"row"}}>
                            <TouchableOpacity style={styles.buttonView}>
                                    <Text style={styles.buttonText}> . </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonView}>
                                    <Text style={styles.buttonText}> 0 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonView}>
                                    <Text style={styles.buttonText}> 00 </Text>
                            </TouchableOpacity>
                            
                        </View>
                        
                    </View>
                    <View style={{flex:1,marginTop:40,justifyContent:"center",alignItems:"center"}}>
                            <View style={{flex:1,backgroundColor:"#424242",borderRadius:100,width:"70%"}}>
                                <TouchableOpacity
                                onPress={()=>{
                                    this.dataChange("/")
                                }}
                                style={[styles.sideButton]}>
                                    <Text style={styles.sideButtonText}> / </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={()=>{
                                    this.dataChange("*")
                                }
                                }
                                style={styles.sideButton}>
                                    <Text style={styles.sideButtonText}> x </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={()=>{
                                    this.dataChange("-")
                                }}
                                style={styles.sideButton}>
                                    <Text style={[styles.sideButtonText]}> - </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={()=>{
                                    this.dataChange("+")
                                }}
                                style={styles.sideButton}>
                                    <Text style={styles.sideButtonText}> + </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={()=>{
                                    this.calculate()
                                }}
                                style={styles.sideButton}>
                                    <Text style={styles.sideButtonText}> = </Text>
                                </TouchableOpacity>
                            </View>
                    </View>
               </View>
               <View style={{flex:0.1}}></View>
            </View>
            {/* </KeyboardAvoidingView> */}
            </SafeAreaView>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    buttonView: {
        flex:1,justifyContent:"center",alignItems:"center"
    },
    buttonText:{
        fontSize:25,color:"#b5b5b5"
    },
    sideButton:{
        flex:1,
        justifyContent:"center",
        borderRadius:100
    },
    sideButtonText:{
        fontSize:25,color:"#b5b5b5",
alignSelf:"center"   
 }
})
export default App
