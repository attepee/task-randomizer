import { Link } from "expo-router";
import { Text, View } from "react-native";
import { Styles } from "@/constants/Styles"
import { STRINGS } from "@/constants/Strings";

export default function Index() {
  return (
    <View style={Styles.root}>
      <View style={Styles.container}>
        <Text style={Styles.titleText}>{STRINGS.TITLE.fi}</Text>
        <Link href="/game" style={Styles.linkButton}><Text style={Styles.buttonText}>{STRINGS.START_GAME.fi}</Text></Link>
        <Link href="/newPrompts" style={Styles.linkButton}><Text style={Styles.buttonText}>{STRINGS.TITLE_NEW_TASKS.fi}</Text></Link>
        <Link href="/info" style={Styles.linkButton}><Text style={Styles.buttonText}>Info</Text></Link>
        {/*<View style={Styles.languageContainer}>
          <Pressable style={[Styles.languageButton, Styles.languageButtonLeft]}>Fin</Pressable>
          <Pressable style={[Styles.languageButton, Styles.languageButtonRight]}>Eng</Pressable>
        </View>*/}
      </View>
    </View>
  );
}
