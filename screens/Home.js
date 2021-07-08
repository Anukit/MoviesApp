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
} from "react-native";
import { images, icons, COLORS, FONTS, SIZES } from "../constants";
import { useRef } from "react";
import { Icon } from "react-native-elements/dist/Icon";

const Home = ({ navigation }) => {
  //const [text, onChangeText] = React.useState("Useless Text");
  //เลื่อนบนสุด
  const scrollRef = useRef();
  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };
  //หนังใหม่
  const [newMovies, setnewMovies] = React.useState([
    {
      id: 0,
      name: "Newmovie 1",
      img: images.newmovie1,
    },
    {
      id: 1,
      name: "Newmovie 2",
      img: images.newmovie2,
    },
    {
      id: 2,
      name: "Newmovie 3",
      img: images.newmovie3,
    },
    {
      id: 3,
      name: "Newmovie 4",
      img: images.newmovie4,
    },
  ]);
  //การ์ตูน
  const [cartoons, setcartoons] = React.useState([
    {
      id: 0,
      name: "cartoon 1",
      img: images.cartoon1,
      favourite: false,
      score: "3.5",
    },
    {
      id: 1,
      name: "cartoon 2",
      img: images.cartoon2,
      favourite: true,
      score: "4.5",
    },
    {
      id: 2,
      name: "cartoon 3",
      img: images.cartoon3,
      favourite: false,
      score: "3.5",
    },
    {
      id: 3,
      name: "cartoon 4",
      img: images.cartoon4,
      favourite: false,
      score: "4.0",
    },
  ]);
  //หนังไทย
  const [thaiMovies, setthaiMovies] = React.useState([
    {
      id: 0,
      name: "thaiMovie 1",
      img: images.thai1,
      favourite: false,
      score: "3.5",
    },
    {
      id: 1,
      name: "thaiMovie 2",
      img: images.thai2,
      favourite: true,
      score: "4.5",
    },
    {
      id: 2,
      name: "thaiMovie 3",
      img: images.thai3,
      favourite: false,
      score: "3.5",
    },
    {
      id: 3,
      name: "thaiMovie 4",
      img: images.thai4,
      favourite: false,
      score: "4.0",
    },
  ]);
  //หนังต่างประเทศ
  const [foreignMovies, setforeignMovies] = React.useState([
    {
      id: 0,
      name: "foreignMovie 1",
      img: images.foreign1,
      favourite: false,
      score: "3.5",
    },
    {
      id: 1,
      name: "foreignMovie 2",
      img: images.foreign2,
      favourite: true,
      score: "4.5",
    },
    {
      id: 2,
      name: "foreignMovie 3",
      img: images.foreign3,
      favourite: false,
      score: "3.5",
    },
    {
      id: 3,
      name: "foreignMovie 4",
      img: images.foreign4,
      favourite: false,
      score: "4.0",
    },
  ]);

  function renderNewMoviesLists(item, index) {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 1 /* SIZES.base */,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Videos");
          }}
        >
          <Image
            source={item.img}
            resizeMode="cover"
            style={{
              width: 345,
              height: 170,
              borderRadius: 15,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderMoviesLists(item, index) {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: SIZES.base,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Videos");
          }}
        >
          <Image
            source={item.img}
            resizeMode="cover"
            style={{
              width: 120,
              height: 150,
              borderRadius: 15,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            bottom: 10,
            right: 0,
            flexDirection: "row",
            backgroundColor: "black",
            paddingHorizontal: SIZES.base,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <Image
            source={icons.star}
            resizeMode="contain"
            style={{
              width: 12,
              height: 12,
              marginTop: 5,
              marginHorizontal: 1,
              marginEnd: 2,
            }}
          />
          <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
            {item.score}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            position: "absolute",
            top: 10,
            right: 5,
          }}
          onPress={() => {
            console.log("Focus on pressed");
          }}
        >
          <Image
            source={item.favourite ? icons.heartRed : icons.heart_icon}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        height: "100%",
        width: "100%",
      }}
    >
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
          onPress={onPressTouch}
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
            //underlineColorAndroid="white"
            //onChangeText={onChangeText}
            //value={text}
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

      <ScrollView
        /* vertical={true} */
        ref={scrollRef}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        {/* หนังมาใหม่ */}
        <View style={{ height: 250 /* backgroundColor: "black"  */ }}>
          <View
            style={{
              flex: 1,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              backgroundColor: "#270000",
            }}
          >
            <View
              style={{
                marginTop: 25,
                marginHorizontal: 24 /* SIZES.padding */,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                    หนัง
                  </Text>
                  <Text style={{ color:'#D21515', ...FONTS.h2 }}>
                    มาใหม่
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    console.log("Focus on pressed");
                  }}
                >
                  <Image
                    source={icons.focus}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: SIZES.base }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={newMovies}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item, index }) =>
                    renderNewMoviesLists(item, index)
                  }
                />
              </View>
            </View>
          </View>
        </View>

        {/* การ์ตูน */}
        <View style={{ height: 220, backgroundColor: "black", marginTop: 20 }}>
          <View
            style={{
              flex: 1,
              /* borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50, */
            }}
          >
            <View
              style={{
                marginTop: 10,
                marginHorizontal: 15 /* SIZES.padding */,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                  การ์ตูน
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    console.log("Focus on pressed");
                  }}
                >
                  <Image
                    source={icons.focus}
                    resizeMode="contain"
                    style={{
                      width: 15,
                      height: 15,
                    }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: SIZES.base }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={cartoons}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item, index }) =>
                    renderMoviesLists(item, index)
                  }
                />
              </View>
            </View>
          </View>
        </View>

        {/* หนังไทย */}
        <View style={{ height: 220, backgroundColor: "black" }}>
          <View
            style={{
              flex: 1,
              /* borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50, */
            }}
          >
            <View
              style={{
                marginTop: 10,
                marginHorizontal: 15 /* SIZES.padding */,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                  หนังไทย
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    console.log("Focus on pressed");
                  }}
                >
                  <Image
                    source={icons.focus}
                    resizeMode="contain"
                    style={{
                      width: 15,
                      height: 15,
                    }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: SIZES.base }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={thaiMovies}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item, index }) =>
                    renderMoviesLists(item, index)
                  }
                />
              </View>
            </View>
          </View>
        </View>

        {/* หนังต่างประเทศ */}
        <View style={{ height: 220, backgroundColor: "black" }}>
          <View
            style={{
              flex: 1,
              /* borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50, */
            }}
          >
            <View
              style={{
                marginTop: 10,
                marginHorizontal: 15 /* SIZES.padding */,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                  หนังต่างประเทศ
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    console.log("Focus on pressed");
                  }}
                >
                  <Image
                    source={icons.focus}
                    resizeMode="contain"
                    style={{
                      width: 15,
                      height: 15,
                    }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: SIZES.base }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={foreignMovies}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item, index }) =>
                    renderMoviesLists(item, index)
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texttitle: {},
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 40,
    width: 165,
    marginLeft: 80,
    borderRadius: 5,
    margin: 10,
    borderBottomColor: "white",
  },
});

export default Home;
