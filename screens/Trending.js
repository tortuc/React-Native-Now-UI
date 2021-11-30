import React from "react";
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import Images from "../constants/Images";

const { width } = Dimensions.get("screen");

const menuCategories = {
  popular: [
    { id: "places", title: "Best Places", image: Images.Trending["Places"] },
    { id: "roads", title: "Awesome Roads", image: Images.Trending["Roads"] },
    { id: "mountains", title: "Mountains", image: Images.Trending["Mountains"] }
  ],
  beauty: [
    { id: "artists", title: "Artists", image: Images.Trending["Artists"] },
    { id: "concerts", title: "Concerts", image: Images.Trending["Concerts"] },
    { id: "DJs", title: "DJs", image: Images.Trending["DJs"] }
  ],
  fashion: [
    { id: "trends", title: "Trends", image: Images.Trending["Trends"] },
    { id: "clothes", title: "Clothes", image: Images.Trending["Clothes"] },
    { id: "accessory", title: "Accessory", image: Images.Trending["Accessory"] }
  ],
  clothes: [
    { id: "fashion", title: "Fashion", image: Images.Trending["Fashion"] },
    { id: "garagesale", title: "Garage Sale", image: Images.Trending["Garage_sale"] },
    { id: "weddingdress", title: "Wedding Dress", image: Images.Trending["Wedding_dress"] }
  ]
};

export default class Categories extends React.Component {
  renderCategories = () => {
    const { navigation, route } = this.props;
    // const tabId = navigation.getParam("tabId");
    // const categories = tabId ? menuCategories[tabId] : menuCategories.popular;
    const tabId = route.params?.tabId;
    const categories = tabId ? menuCategories[tabId] : menuCategories.popular;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      >
        <Block flex>
        {categories.map(category => (
          <TouchableWithoutFeedback
            key={`category-${category.id}`}
            onPress={() => navigation.navigate("Category", { ...category })}
          >
            <Block flex card style={[styles.category, styles.shadow]}>
              <ImageBackground
                source={{ uri: category.image }}
                style={[
                  styles.imageBlock,
                  { width: width - theme.SIZES.BASE * 2, height: 252 }
                ]}
                imageStyle={{
                  width: width - theme.SIZES.BASE * 2,
                  height: 252
                }}
              >
                <Block style={styles.categoryTitle}>
                  <Text style={{ fontFamily: 'montserrat-regular' }} size={18} color={theme.COLORS.WHITE}>
                    {category.title}
                  </Text>
                </Block>
              </ImageBackground>
            </Block>
          </TouchableWithoutFeedback>
        ))}
      </Block>
    </ScrollView>

    );
  };

  render() {
    return (
      <Block flex center style={styles.categories}>
        {this.renderCategories()}
      </Block>
    );
  }
}



const styles = StyleSheet.create({
  categories: {
  width
  },
  categoryList: {
    justifyContent: "center",
    paddingTop: theme.SIZES.BASE * 1.5
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginHorizontal: theme.SIZES.BASE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,

    justifyContent: "center",
    alignItems: "center"
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 3
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 2
  }
});
