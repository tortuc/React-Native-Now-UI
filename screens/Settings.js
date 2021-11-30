import React from "react";
import { StyleSheet, FlatList, TouchableOpacity, View } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Switch, Icon } from "../components";

import nowTheme from "../constants/Theme";

export default class Settings extends React.Component {
  state = {};

  toggleSwitch = (switchNumber) =>
    this.setState({ [switchNumber]: !this.state[switchNumber] });

  renderItem = ({ item }) => {
    const { navigate } = this.props.navigation;

    switch (item.type) {
      case "switch":
        return (
          <Block row middle space="between" style={styles.rows}>
            <Text style={styles.settingOption}>{item.title}</Text>
            <Switch
              onValueChange={() => this.toggleSwitch(item.id)}
              value={this.state[item.id]}
            />
          </Block>
        );
      case "button":
        return (
          <Block style={styles.rows}>
            <TouchableOpacity
              onPress={() => {
                if (item.id !== "Payment" && item.id !== "gift")
                  navigate(item.id);
              }}
            >
              <Block row middle space="between" style={{ paddingTop: 7 }}>
                <Text style={styles.settingOption}>{item.title}</Text>
                <Icon
                  name="minimal-right2x"
                  family="NowExtra"
                  style={{ paddingRight: 5 }}
                />
              </Block>
            </TouchableOpacity>
          </Block>
        );
      default:
        break;
    }
  };

  render() {
    const recommended = [
      { title: "Use FaceID to sign in", id: "face", type: "switch" },
      { title: "Auto-Lock security", id: "autolock", type: "switch" },
      { title: "Notifications", id: "NotificationsSettings", type: "button" },
    ];

    const payment = [
      { title: "Manage Payment Options", id: "Payment", type: "button" },
      { title: "Manage Gift Cards", id: "gift", type: "button" },
    ];

    const privacy = [
      { title: "User Agreement", id: "Agreement", type: "button" },
      { title: "Privacy", id: "Privacy", type: "button" },
      { title: "About", id: "About", type: "button" },
    ];

    return (
      <View style={styles.settings}>
        <FlatList
          data={recommended}
          keyExtractor={(item, index) => item.id}
          renderItem={this.renderItem}
          ListHeaderComponent={
            <Block center style={styles.title}>
              <Text style={styles.titleText}>Recommended Settings</Text>
              <Text style={styles.subtitleText}>
                These are the most important settings
              </Text>
            </Block>
          }
        />
        <Block center style={styles.title}>
          <Text style={styles.titleText}>Payment Settings</Text>
          <Text style={styles.subtitleText}>
            These are also important settings
          </Text>
        </Block>

        <FlatList
          data={payment}
          keyExtractor={(item, index) => item.id}
          renderItem={this.renderItem}
        />

        <Block center style={styles.title}>
          <Text style={styles.titleText}>Privacy Settings</Text>
          <Text style={styles.subtitleText}>Third most important settings</Text>
        </Block>
        <FlatList
          data={privacy}
          keyExtractor={(item, index) => item.id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settings: {
    paddingVertical: theme.SIZES.BASE / 3,
    backgroundColor: nowTheme.COLORS.WHITE,
  },
  title: {
    paddingTop: theme.SIZES.BASE * 2,
    paddingBottom: theme.SIZES.BASE,
  },
  titleText: {
    fontFamily: "montserrat-regular",
    paddingBottom: 5,
    fontSize: nowTheme.SIZES.FONT,
    fontWeight: "500",
    color: nowTheme.COLORS.HEADER,
    lineHeight: 20,
  },
  subtitleText: {
    fontFamily: "montserrat-regular",
    fontSize: 14,
    color: nowTheme.COLORS.TIME,
    lineHeight: 17,
  },
  settingOption: {
    fontFamily: "montserrat-regular",
    fontSize: 16,
    color: nowTheme.COLORS.HEADER,
    lineHeight: 20,
  },
  rows: {
    height: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE / 2,
  },
});
