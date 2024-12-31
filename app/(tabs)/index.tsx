//  JS THREAD ( NativeDriver:False )
//  Prefer useState instead of useRef

// import { useState } from 'react';
// import { View,Animated,Text,TouchableOpacity } from 'react-native';

// export default function HomeScreen() {
//   const value=useState(new Animated.ValueXY({x:0,y:0}))[0];
//   function moveon(){
//       Animated.timing(value,{
//           toValue:{x:200,y:200},
//           duration:1000,
//           useNativeDriver: false,
//       }).start()
//   }
//   return (
//    <>
//       <View>
//         <Animated.View 
//         style={[
//           {
//             width:100,
//             height:100,
//             opacity:value,
//             borderRadius:100/2,
//             backgroundColor:"red",
//           }
//         ]}/>
//         <TouchableOpacity onPress={moveon}><Text>Click Me!!!</Text></TouchableOpacity>
//       </View>
//    </>
//   );
// }


//    NATIVE THREAD ( Native Driver: True)
// import { useState } from 'react';
// import { View, Animated, Text, TouchableOpacity } from 'react-native';

// export default function HomeScreen() {
//   // Initialize animated value
//   const [position] = useState(new Animated.Value(0));
  
//   function moveOn() {
//     Animated.timing(position, {
//       toValue: 1,
//       duration: 4000,
//       useNativeDriver: true,
//     }).start();
//   }

//   return (
//     <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
//       <Animated.View
//         style={{
//           opacity: position, 
//           width: 100,
//           height: 100,
//           borderRadius: 50,
//           backgroundColor: 'red',
//         }}
//       />
//       <TouchableOpacity onPress={moveOn}>
//         <Text>Click Me!!!</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }


// import { transform } from '@babel/core';
// import { useState } from 'react';
// import { View, Animated, Text, TouchableOpacity } from 'react-native';

// export default function HomeScreen() {
//   const [position] = useState(new Animated.Value(0));
  
//   function moveOn() {
//     Animated.timing(position, {
//       toValue: 150,
//       duration: 3000,
//       useNativeDriver: true,
//     }).start();
//   }

//   return (
//     <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
//       <Animated.View
//         style={{
//           transform: [{translateX:position}], 
//           width: 100,
//           height: 100,
//           borderRadius: 50,
//           backgroundColor: 'red',
//         }}
//       />
//       <TouchableOpacity onPress={moveOn}>
//         <Text>Click Me!!!</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }


// import { useState } from 'react';
// import { View, Animated, Text, TouchableOpacity } from 'react-native';

// export default function HomeScreen() {
//   const [opacity] = useState(new Animated.Value(0));
  
//   function FadeIn(){
//       Animated.timing(opacity,{
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       }).start();
//   }

//   function FadeOut(){
//       Animated.timing(opacity,{
//         toValue:0,
//         duration:1000,
//         useNativeDriver:true
//       }).start();
//   }

//   return (
//     <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
//       <Animated.View
//         style={{
//           width: 100,
//           height: 100,
//           opacity,
//           borderRadius: 50,
//           backgroundColor: 'red',
//         }}
//       />
//       <TouchableOpacity onPress={FadeIn}><Text>Fade In</Text></TouchableOpacity>
//       <TouchableOpacity onPress={FadeOut}><Text>Fade Out</Text></TouchableOpacity>
//     </View>
//   );
// }


// import React, { useRef, useEffect, useState } from 'react';
// import { Animated, Text, View } from 'react-native';

// const FadeInView = (props:any) => {
//   const fadeAnim = useState(new Animated.Value(0))[0]; // Initial value for opacity: 0

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 10000,
//       useNativeDriver: true,
//     }).start();
//   }, [fadeAnim]);

//   return (
//     <Animated.View // Special animatable View
//       style={{
//         ...props.style,
//         opacity: fadeAnim, // Bind opacity to animated value
//       }}>
//       {props.children}
//     </Animated.View>
//   );
// };

// // You can then use your `FadeInView` in place of a `View` in your components:
// export default () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//       <FadeInView
//         style={{
//           width: 250,
//           height: 50,
//           backgroundColor: 'powderblue',
//         }}>
//         <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>
//           Fading in
//         </Text>
//       </FadeInView>
//     </View>
//   );
// };



// import React, {useRef} from 'react';
// import {Animated, View, StyleSheet, PanResponder, Text} from 'react-native';

// const App = () => {
//   const pan = useRef(new Animated.ValueXY()).current;

//   const panResponder = useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
//       onPanResponderRelease: () => {
//         pan.extractOffset();
//       },
//     }),
//   ).current;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titleText}>Drag this box!</Text>
//       <Animated.View
//         style={{
//           transform: [{translateX: pan.x}, {translateY: pan.y}],
//         }}
//         {...panResponder.panHandlers}>
//         <View style={styles.box} />
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   titleText: {
//     fontSize: 14,
//     lineHeight: 24,
//     fontWeight: 'bold',
//   },
//   box: {
//     height: 150,
//     width: 150,
//     backgroundColor: 'blue',
//     borderRadius: 5,
//   },
// });

// export default App;


// import React, { useRef } from 'react';
// import { View, Animated, Button, StyleSheet } from 'react-native';

// const SpringAnimationExample = () => {
//   const animatedValue = useRef(new Animated.Value(0)).current;

//   const startAnimation = () => {
//     Animated.spring(animatedValue, {
//       toValue: 1, // The final value of the animation
//       friction: 100, // Medium resistance, affects how quickly the spring stops bouncing
//       tension: 5, // High tension, makes the spring move quickly
//       useNativeDriver: true // Use native driver for better performance
//     }).start();
//   };

//   const animatedStyle = {
//     transform: [
//       {
//         scale: animatedValue.interpolate({
//           inputRange: [0, 1],
//           outputRange: [3, 1] // Scale from 1 to 2
//         })
//       }
//     ]
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.box, animatedStyle]} />
//       <Button title="Start Animation" onPress={startAnimation} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'tomato'
//   }
// });

// export default SpringAnimationExample;



// import React, { useRef } from 'react';
// import { View, Animated, Button, StyleSheet } from 'react-native';
// const ArithmeticAnimationExample = () => {
//   const translateX = useRef(new Animated.Value(0)).current;
//   const translateY = useRef(new Animated.Value(0)).current;
//   const scale = useRef(new Animated.Value(1)).current;

//   // Define animation for translateX and translateY
//   const animate = () => {
//     Animated.parallel([
//       Animated.timing(translateX, {
//         toValue: 200,
//         duration: 1000,
//         useNativeDriver: true
//       }),
//       Animated.timing(translateY, {
//         toValue: 200,
//         duration: 1000,
//         useNativeDriver: true
//       }),
//       Animated.timing(scale, {
//         toValue: 2,
//         duration: 1000,
//         useNativeDriver: true
//       })
//     ]).start();
//   };

//   // Combine animations using arithmetic operations
//   const animatedStyle = {
//     transform: [
//       {
//         translateX: Animated.add(translateX, Animated.multiply(scale, 10)) // Add and multiply scale effect
//       },
//       {
//         translateY: Animated.add(translateY, Animated.multiply(scale, 10)) // Add and multiply scale effect
//       },
//       {
//         scale: Animated.modulo(scale, 2) // Modulo operation to keep scale in range
//       }
//     ]
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.box, animatedStyle]} />
//       <Button title="Start Animation" onPress={animate} />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'tomato'
//   }
// });

// export default ArithmeticAnimationExample;



// Animated.delay() => Starts the animation after a given delay.
// Animated.parallel() => starts a number of animations t the same time
// Animated.sequence() => starts animations in order 
// Animated.staggered() => starts nimations in order and parallel, but with succesive delay.

// import React, { useRef } from 'react';
// import { View, Animated, Button, StyleSheet } from 'react-native';
// const SquarePathAnimation = () => {
//   // Create animated values for x and y positions
//   const translateX = useRef(new Animated.Value(0)).current;
//   const translateY = useRef(new Animated.Value(0)).current;

//   // Define the animation sequence
//   const animate = () => {
//     Animated.sequence([
//       // Move horizontally to the left by 100 units
//       Animated.timing(translateX, {
//         toValue: -100, // Move to top-left
//         duration: 1000,
//         useNativeDriver: true
//       }),
//       // Move vertically upwards by 100 units
//       Animated.timing(translateY, {
//         toValue: -100, // Move to top-left
//         duration: 1000,
//         useNativeDriver: true
//       }),
//      // Move horizontally to the right by 100 units
//       Animated.timing(translateX, {
//         toValue: 100, // Move to top-right
//         duration: 1000,
//         useNativeDriver: true
//       }),
//       //  Move vertically downwards by 100 units
//       Animated.timing(translateY, {
//         toValue: 100, // Move to bottom-right
//         duration: 1000,
//         useNativeDriver: true
//       }),
//       // Move horizontally to the left by 100 units
//       Animated.timing(translateX, {
//         toValue: -100, // Move to bottom-left
//         duration: 1000,
//         useNativeDriver: true
//       }),
//       Animated.timing(translateX, {
//         toValue: 0, // Move back to center
//         duration: 1000,
//         useNativeDriver: true
//       }),
//       Animated.timing(translateY, {
//         toValue: 0, // Move back to center
//         duration: 1000,
//         useNativeDriver: true
//       })
//     ]).start();
//   };

//   // Define the animated style
//   const animatedStyle = {
//     transform: [
//       { translateX: translateX },
//       { translateY: translateY }
//     ]
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.box, animatedStyle]} />
//       <Button title="Start Animation" onPress={animate} />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'tomato'
//   }
// });
// export default SquarePathAnimation;


// import React, { useState, useRef } from "react";
// import { View, StyleSheet, PanResponder, Animated } from "react-native";

// const App = () => {
//   // Initialize the animated value and state updater
//   const [pan] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

//   // Create a pan responder to handle touch gestures
//   const panResponder = useRef(
//     PanResponder.create({
//       // Request permission to handle touch events
//       onStartShouldSetPanResponder: () => true,
//       onPanResponderMove: Animated.event(
//         [null, { dx: pan.x, dy: pan.y }],
//         { useNativeDriver: false }
//       ),
//       onPanResponderRelease: () => {
//         // Optional: Reset the position when the gesture ends
//         Animated.spring(pan, {
//           toValue: { x: 0, y: 0 },
//           useNativeDriver: false,
//         }).start();
//       },
//     })
//   ).current;

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         {...panResponder.panHandlers}
//         style={[
//           styles.box,
//           {
//             transform: [
//               { translateX: pan.x },
//               { translateY: pan.y },
//             ],
//           },
//         ]}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'tomato',
//   },
// });

// export default App;



// import React, { useRef } from "react";
// import { View, StyleSheet, PanResponder, Animated } from "react-native";

// const App = () => {
//   // Initialize animated values for x and y coordinates
//   const pan = useRef(new Animated.ValueXY()).current;

//   // Create a pan responder to handle touch gestures
//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onPanResponderMove: Animated.event(
//         [null, { dx: pan.x, dy: pan.y }],
//         { useNativeDriver: false }
//       ),
//       onPanResponderRelease: (e, gestureState) => {
//         // Use `Animated.decay` to simulate inertia
//         Animated.decay(pan, {
//           velocity: { x: gestureState.vx, y: gestureState.vy },
//           deceleration: 0.997, // This controls the rate of deceleration
//           useNativeDriver: false,
//         }).start();
//       },
//     })
//   ).current;

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         {...panResponder.panHandlers}
//         style={[
//           styles.box,
//           {
//             transform: [
//               { translateX: pan.x },
//               { translateY: pan.y },
//             ],
//           },
//         ]}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'tomato',
//   },
// });

// export default App;


import { Entypo, Feather } from '@expo/vector-icons';
import { faker } from '@faker-js/faker';
import * as React from 'react';
import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('screen');

faker.seed(10);

const data = [...Array(20).keys()].map(() => ({
  key: faker.datatype.uuid(),
  job: faker.animal.crocodilia(),
}));

const _colors = {
  active: `#FCD259ff`,
  inactive: `#FCD25900`,
};
const _spacing = 10;

export default function UberEats() {
  const ref=React.useRef<FlatList>(null);
  const [index,setindex] = React.useState(0);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        ref={ref}
        initialScrollIndex={index}
        style={{ flexGrow: 0 }}
        data={data}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ paddingLeft: _spacing }}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item, index: fIndex }) => {
          return (
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  marginRight: _spacing,
                  padding: _spacing,
                  borderWidth: 2,
                  borderColor: _colors.active,
                  borderRadius: 12,
                  backgroundColor: fIndex===index? _colors.active : _colors.inactive,
                }}>
                <Text style={{ color: '#36303F', fontWeight: '700' }}>
                  {item.job}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: _spacing * 10,
        }}>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              color: '#36303F',
              fontWeight: '700',
              marginBottom: _spacing,
            }}>
            Scroll position
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: width / 2,
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}>
                <Entypo name='align-left' size={24} color='#36303F' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}>
                <Entypo
                  name='align-horizontal-middle'
                  size={24}
                  color='#36303F'
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                }}>
                <Entypo name='align-right' size={24} color='#36303F' />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{ color: '#36303F', fontWeight: '700', marginBottom: 10 }}>
            Navigation
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: width / 2,
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => {
              if(index==0){
                return;
              }
              setindex(index-1)
            }}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                  marginRight: _spacing,
                }}>
                <Feather name='arrow-left' size={24} color='#36303F' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              if(index==data.length-1){
                return;
              }
              setindex(index+1)
            }}>
              <View
                style={{
                  padding: _spacing,
                  backgroundColor: '#FCD259',
                  borderRadius: _spacing,
                }}>
                <Feather name='arrow-right' size={24} color='#36303F' />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}