import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import { Prompts } from "@/constants/Prompts";
import { Styles } from "@/constants/Styles";
import { STRINGS } from "@/constants/Strings"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";

export default function Game() {
  const [showGameStartPrompt, setShowGameStartPrompt] = useState<boolean>(true);
  const [showGameEndText, setShowGameEndText] = useState<boolean>(false);
  const [prompts, setPrompts] = useState<Array<object>>([]);
  const [index, setIndex] = useState<number>(0);
  const [useCustomPrompts, setUseCustomPrompts] = useState<boolean>(false);

  const startGame = (useDefaultTaskList: boolean) => {
    if(useDefaultTaskList) {
      shuffleArray(Prompts);
    } else {
      setUseCustomPrompts(true);
      getData();
    }

    setShowGameStartPrompt(false);
  }

  const shuffleArray = (array: Array<object>) => {
    for(let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setPrompts(array);
  }

  const increaseIndex = () => {
    index < prompts.length - 1 ? setIndex(index + 1) : setShowGameEndText(true);
  }

  const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@prompts')
        if(value !== null) {
          shuffleArray(JSON.parse(value));
        }
    }
    catch(error) {
        console.log("Something went wrong while loading tasks: " + error);
    }
  }

  return (
    <View style={Styles.root}>
      {
        showGameStartPrompt &&
        <View style={Styles.container}>
          <Pressable  style={Styles.linkButton} onPress={() => startGame(true)}>
          <Text style={Styles.buttonText}>{STRINGS.START_DEFAULT_GAME.fi}</Text>
        </Pressable>
        <Pressable  style={Styles.linkButton} onPress={() => startGame(false)}>
          <Text style={Styles.buttonText}>{STRINGS.START_CUSTOM_GAME.fi}</Text>
        </Pressable>
        </View>
      }
      {
        !showGameStartPrompt && !showGameEndText &&
        <Pressable style={Styles.gameButton} onPress={() => increaseIndex()}>
          <Text style={Styles.gameText}>{(prompts != undefined && prompts.length != 0) ? useCustomPrompts ? Object.values(prompts[index])[1] : Object.values(prompts[index])[0] : null}</Text>
        </Pressable>
      }
      {
        showGameEndText &&
        <Link href=".." style={Styles.gameButton}>
          <Pressable style={Styles.gameButton}>
            <Text style={Styles.gameText}>{STRINGS.END_GAME_PROMPT.fi}</Text>
          </Pressable>
        </Link>
      }
    </View>
  );
}
