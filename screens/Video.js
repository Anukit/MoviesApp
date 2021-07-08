import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { images, icons, COLORS, FONTS, SIZES } from "../constants";
import { Icon } from "react-native-elements/dist/Icon";
import Video from "react-native-video";

const Videos = ({ navigation }) => {
  /* คอมเมนต์คนอื่น */
  const [newMovies, setnewMovies] = React.useState([
    {
      id: 0,
      name: "Mr. John Haron",
      img: images.newmovie1,
      score: icons.five_star,
      comment:
        "I really like watching this cartoon. It's fun and the characters are so cute",
    },
    {
      id: 1,
      name: "Mr. John Haron",
      img: images.newmovie2,
      score: icons.five_star,
      comment:
        "I really like watching this cartoon. It's fun and the characters are so cute",
    },
    {
      id: 2,
      name: "Mr. John Haron",
      img: images.newmovie3,
      score: icons.five_star,
      comment:
        "I really like watching this cartoon. It's fun and the characters are so cute",
    },
    {
      id: 3,
      name: "Mr. John Haron",
      img: images.newmovie4,
      score: icons.four_star,
      comment:
        "I really like watching this cartoon. It's fun and the characters are so cute",
    },
    {
      id: 4,
      name: "Mr. John Haron",
      img: images.newmovie4,
      score: icons.four_star,
      comment:
        "I really like watching this cartoon. It's fun and the characters are so cute",
    },
    {
      id: 5,
      name: "Mr. John Haron",
      img: images.newmovie4,
      score: icons.four_star,
      comment:
        "I really like watching this cartoon. It's fun and the characters are so cute",
    },
  ]);
  function renderCommentLists(item, index) {
    return (
      <View
        style={{
          flexDirection: "row",
          marginLeft: 15,
          marginVertical: SIZES.base,
        }}
      >
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: 50,
            height: 50,
            borderRadius: 30,
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {item.name}
            </Text>
            <Image
              source={item.score}
              resizeMode="contain"
              style={{
                width: 50,
                height: 12,
                marginTop: 5,
                marginLeft: 5,
              }}
            />
          </View>
          <Text style={{ color: "white" }}>{item.comment}</Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      {/* Header */}
      <View style={{ flexDirection: "row", height: 60 }}>
        <Text
          style={{
            color: "white",
            marginTop: 15,
            marginLeft: 10,
            fontSize: 20,
            fontWeight: "bold",
          }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          Movies
        </Text>

        <Text style={{ color: "red", marginTop: 7, fontWeight: "bold" }}>
          TH
        </Text>

        <View style={styles.sectionStyle}>
          <TextInput
            style={{ flex: 1, color: "white" }}
            placeholder="Search"
            placeholderTextColor="#CACACA"
          />
          <Icon
            name="search"
            type="FontAwesome"
            color="#CACACA"
            size={20}
            onPress={() => {
              console.log("Focus on pressed");
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "center",
            marginRight: 10,
          }}
        >
          <Icon
            name="person"
            type="Ionicons"
            color="#CACACA"
            size={30}
            onPress={() => {
              console.log("Focus on pressed");
            }}
          />
        </View>
      </View>

      {/* วิดีโอ */}
      <View style={styles.container}>
        <Video
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
        />
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View>
          {/* ชื่อหนัง */}
          <View style={styles.boxText}>
            <Text style={styles.titleText}>Big Buck Bunny</Text>
            <View
              style={{
                position: "absolute",
                bottom: 10,
                right: 0,
                flexDirection: "row",
                paddingHorizontal: SIZES.base,
                /* backgroundColor: "black", */
                /* borderTopLeftRadius: 10, */
                /* borderBottomLeftRadius: 10, */
              }}
            >
              <Image
                source={icons.star}
                resizeMode="contain"
                style={{
                  width: 12,
                  height: 12,
                  marginTop: 5,
                  marginEnd: 5,
                }}
              />
              <Text style={{ color: COLORS.white, ...FONTS.body4 }}>4.8</Text>
            </View>
          </View>
          {/* รายละเอียดหนัง */}
          <View style={styles.boxdetailText}>
            <Text style={styles.detailText}>
              A recently awoken enormous and utterly adorable fluffy rabbit is
              heartlessly harassed by a flying squirrel's gang of rodents who
              are determined to squash his happiness.
            </Text>
          </View>
          {/* คอมเมนต์เรา */}
          <View>
            <View style={styles.sectionStyle1}>
              <TextInput
                style={{ flex: 1, color: "white" }}
                placeholder="Comment"
                placeholderTextColor="#CACACA"
              />
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <Text
                  style={{ color: "#666666", fontWeight: "bold", marginEnd: 5 }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <Text style={{ color: "#3D3D3D", fontWeight: "bold" }}>
                  Post
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* คอมเมนต์คนอื่น */}
      <View style={{ flex: 1 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={newMovies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => renderCommentLists(item, index)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    /* backgroundColor: "black", */
    borderWidth: 0.5,
    /* borderColor: "white", */
    height: 40,
    width: 165,
    marginLeft: 80,
    borderRadius: 5,
    margin: 10,
    borderBottomColor: "white",
  },
  sectionStyle1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    /* backgroundColor: "black", */
    borderWidth: 0.5,
    /* borderColor: "red", */
    height: 40,
    margin: 15,
    borderBottomColor: "white",
  },
  boxText: {
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 40,
    /* backgroundColor: "black", */
    marginTop: 10,
    borderWidth: 1,
    borderBottomColor: "#707070",
  },
  titleText: {
    color: "white",
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  detailText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
  },
  boxdetailText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    /* backgroundColor: "black", */
    marginTop: 10,
    borderWidth: 1,
    borderBottomColor: "#707070",
  },
});

export default Videos;
