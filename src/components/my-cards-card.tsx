import {Text, View, Image, FlatList} from "react-native";
import TransactionsCard from "./transactions-card";

// @ts-ignore
export default function MyCardsCard({CardData, style}){
    return(
        <View style={{flexDirection:"column", alignItems:'center'}}>
            <View style={style}>
                <Image style={{ height: 150, width: 250, borderRadius: 7 }} source={{ uri: CardData.image_url }} />
                <Text style={{ fontWeight: 'bold', fontSize: 20, backgroundColor: 'white', padding: 5, borderRadius: 5 }}>{CardData.name}</Text>
                <Text style={{ backgroundColor: 'white', padding: 5, borderRadius: 5 }}>{CardData.rewards}</Text>
            </View>
            <View style={{position:'absolute', bottom:50}}>
                <FlatList
                    data={CardData.transactions}
                    renderItem={({ item, index }) => (
                        <TransactionsCard item={item}/>
                    )}
                />
            </View>
        </View>
    )
}