import React from "react";
import {
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Card } from "../components/";
import categories from "../constants/categories";
import { nowTheme } from "../constants";

const { width } = Dimensions.get("window");
const cardWidth = width - theme.SIZES.BASE * 2;

export default class Category extends React.Component {
  renderSuggestions = () => {
    const { navigation, route } = this.props;
    // const { params } = navigation && navigation.state;
    // const category = categories[params.id];
    // const suggestions = category && category.suggestions;
    const category = categories[route.params?.id];
    const suggestions = category && category.suggestions;

    if (!suggestions) return null;

    return (
      <React.Fragment>
        <Card item={suggestions[0]} style={{ marginRight: nowTheme.SIZES.BASE }} />
        <Card item={suggestions[1]} />
      </React.Fragment>
    );
  };

  renderCard = (item) => {
    return (
      <TouchableWithoutFeedback
        key={`Card-${item.title}`}
      >
        <Block flex style={styles.Card}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{ uri: item.image }}
          />
          <Block center style={{ paddingHorizontal: nowTheme.SIZES.BASE }}>
            <Text
              center
              style={styles.price}
            >
              $377
            </Text>
            <Text style={{ fontFamily: 'montserrat-regular' }} center size={34} color={nowTheme.COLORS.TEXT}>
              {item.title}
            </Text>
            <Text
              center
              size={16}
              color={nowTheme.COLORS.MUTED}
              style={styles.description}
            >
              {item.description}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    const { navigation, route } = this.props;
    // const { params } = navigation && navigation.state;
    // const category = categories[params.id];
    const category = categories[route.params?.id];
    return (
      <Block flex>
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <Block flex={3}>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              snapToInterval={cardWidth + nowTheme.SIZES.BASE * 0.375}
              contentContainerStyle={{ paddingRight: nowTheme.SIZES.BASE }}
            >
              {category &&
                category.images.map((item, index) =>
                  this.renderCard(item, index)
                )}
            </ScrollView>
          </Block>
          <Block flex row style={{ marginHorizontal: nowTheme.SIZES.BASE }}>
            {this.renderSuggestions()}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  Card: {
    width: cardWidth - nowTheme.SIZES.BASE * 2,
    marginHorizontal: nowTheme.SIZES.BASE,
    marginTop: nowTheme.SIZES.BASE * 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2
  },
  image: {
    width: cardWidth - nowTheme.SIZES.BASE,
    height: cardWidth - nowTheme.SIZES.BASE,
  },
  imageVertical: {
    overflow: "hidden"
  },
  price: {
    fontFamily: 'montserrat-regular',
    fontSize: 16,
    paddingTop: nowTheme.SIZES.BASE * 2,
    paddingBottom: nowTheme.SIZES.BASE / 2,
    color: nowTheme.COLORS.PRIMARY
  },
  description: {
    fontFamily: 'montserrat-regular',
    paddingTop: nowTheme.SIZES.BASE,
    paddingBottom: nowTheme.SIZES.BASE * 2
  },
  suggestion: {
    backgroundColor: nowTheme.COLORS.WHITE,
    marginBottom: nowTheme.SIZES.BASE,
    borderWidth: 0,
    marginLeft: nowTheme.SIZES.BASE / 2,
    marginRight: nowTheme.SIZES.BASE / 2
  },
  suggestionTitle: {
    flex: 1,
    flexWrap: "wrap",
    paddingBottom: 6
  },
  suggestionDescription: {
    padding: nowTheme.SIZES.BASE / 2
  }
});
