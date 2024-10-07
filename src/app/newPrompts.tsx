import { Link } from "expo-router";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { Styles } from "@/constants/Styles"
import { STRINGS } from "@/constants/Strings";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";
import { AntDesign } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

export default function Index() {
  interface Prompt {
    id: string,
    prompt: string
  }

  const [newPrompt, setNewPrompt] = useState<string>("");
  const [prompts, setPrompts] = useState<Array<Prompt>>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if(isFocused) {
        getData();
    }
  } ,[useIsFocused]);

  const addNewPrompt = () => {
    setPrompts([...prompts, {id: uuidv4(), prompt: newPrompt}]);
    setNewPrompt("");
  }

  const removePrompt = (id: string) => {
    let array = prompts.filter(item => item.id !== id);
    setPrompts(array);
  }

  const storePrompts = async () => {
    try {
        await AsyncStorage.setItem("@prompts", JSON.stringify(prompts));
    }
    catch (error) {
        console.error("Something went wrong while saving the prompts: " + error);
    }
  }

  const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@prompts')
        if(value !== null) {
          setPrompts(JSON.parse(value));
        }
    }
    catch(error) {
        console.log("Something went wrong while loading prompts: " + error);
    }
  }

  type ItemProps = {id: string, title: string};

  const Item = ({id, title}: ItemProps) => (
    <View style={Styles.item}>
      <Text style={Styles.itemTitle}>{title}</Text>
      <AntDesign name="delete" size={24} color="black" onPress={() => removePrompt(id)}/>
    </View>
  )

  return (
    <View style={Styles.root}>
      <View style={Styles.container}>
        <Text style={Styles.titleText}>{STRINGS.TITLE_NEW_TASKS.fi}</Text>
        <View style={Styles.pairButtonContainer}>
          <Pressable style={[Styles.linkButton, Styles.saveButton]} onPress={() => storePrompts()}>
            <Link href="..">
              <Text style={Styles.buttonText}>{STRINGS.RETURN.fi}</Text>
            </Link>
          </Pressable>
        </View>
        <TextInput
          value={newPrompt}
          blurOnSubmit={false}
          style={Styles.textInput}
          placeholder={STRINGS.ADD_NEW_TASK.fi}
          onChangeText={(text) => setNewPrompt(text)}
          onSubmitEditing={() => addNewPrompt()}
        ></TextInput>
        <FlatList
          style={Styles.list}
          data={prompts}
          renderItem={({item}) => <Item id={item.id} title={item.prompt} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
