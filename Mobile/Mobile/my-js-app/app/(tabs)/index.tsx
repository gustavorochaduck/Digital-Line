import { useColorScheme, View } from "react-native";
import { ImageBackground } from "expo-image";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';


export default function HomeScreen() {
  const isDark = useColorScheme() == 'dark'

  return (
    // <View style={{ flex: 1 }}>
    //   <ImageBackground
    //     source={
    //       isDark
    //         ? require("../../assets/images/bg-mobile.jpg")
    //         : require("../../assets/images/bg-mobile-light.jpg")
    //     }
    //     style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    //   >
    //     <ThemedText style={{ color: "white", backgroundColor: "red" }}>
    //       Test
    //     </ThemedText>
    //   </ImageBackground>
    // </View>


    <ImageBackground
      source={
        isDark
          ? require("./content/bg-mobile.jpg")
          : require("../../assets/images/bg-mobile-light.jpg")
      }
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ThemedText>It works</ThemedText>
    </ImageBackground>
  )
};