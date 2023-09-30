import {Text, View} from "react-native";

// @ts-ignore
export default function TransactionsCard({item}){
    return(
        <View>
            <Text>{item.description}</Text>
        </View>
    )
}