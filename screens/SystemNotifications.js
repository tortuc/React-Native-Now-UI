import React from "react";
import { StyleSheet, ScrollView, Alert } from "react-native";
import { Block, Text } from "galio-framework";
import { Notification } from "../components";
import { nowTheme } from "../constants";

export default class SystemNotifications extends React.Component {
  render() {
    return (
      <Block flex>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <Block center style={{ width: "90%" }}>
            <Block style={styles.card}>
              <Block style={styles.cardHeader}>
                <Text
                  size={18}
                  style={{ fontFamily: "montserrat-regular" }}
                  color={nowTheme.COLORS.HEADER}
                >
                  Unread notifications
                </Text>
              </Block>
              <Block>
                <Notification
                  transparent
                  system
                  title="New message"
                  time="2 hrs ago"
                  body="The new message from the author."
                  iconName="paper2x"
                  iconFamily="NowExtra"
                  color={nowTheme.COLORS.PRIMARY}
                  style={{ marginBottom: 5, fontFamily: "montserrat-regular" }}
                />
                <Notification
                  transparent
                  system
                  title="New order"
                  time="3 hrs ago"
                  body="A confirmed request by one party."
                  iconName="app2x"
                  iconFamily="NowExtra"
                  color={nowTheme.COLORS.PRIMARY}
                  style={{ marginBottom: 5, fontFamily: "montserrat-regular" }}
                />
              </Block>
            </Block>
            <Block style={styles.card}>
              <Block style={styles.cardHeader}>
                <Text
                  size={18}
                  style={{ fontFamily: "montserrat-regular" }}
                  color={nowTheme.COLORS.HEADER}
                >
                  Read notifications
                </Text>
              </Block>
              <Block>
                <Notification
                    transparent
                    system
                    title="Last message"
                    time="1 day ago"
                    body="Let's meet at Starbucks at 11:30. Wdyt?"
                    iconName="email-852x"
                    iconFamily="NowExtra"
                    color={nowTheme.COLORS.TIME}
                    style={{ marginBottom: 5 }}
                  />
                <Notification
                    transparent
                    system
                    title="Product issue"
                    time="2 day ago"
                    body="A new issue has been reported for NowUI."
                    iconName="html52x"
                    iconFamily="NowExtra"
                    color={nowTheme.COLORS.TIME}
                    style={{ marginBottom: 5 }}
                  />
                  <Notification
                    transparent
                    system
                    title="New likes"
                    time="4 days ago"
                    body="Your posts have been liked a lot."
                    iconName="camera-compact2x"
                    iconFamily="NowExtra"
                    color={nowTheme.COLORS.TIME}
                    style={{ marginBottom: 5 }}
                  />
                  <Notification
                    transparent
                    system
                    title="Last Update"
                    time="5 days ago"
                    body="Your update is here and it rocks."
                    iconName="basket2x"
                    iconFamily="NowExtra"
                    color={nowTheme.COLORS.TIME}
                    style={{ marginBottom: 5 }}
                  />
              </Block>
            </Block>
          </Block>
          <Block style={{ marginBottom: 20 }} />
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: nowTheme.COLORS.WHITE,
    marginTop: 25,
    borderRadius: 3,
    shadowColor: nowTheme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: .1,
    elevation: 2
  },
  cardHeader: {
    paddingTop: 20,
    paddingBottom: 10, 
    paddingLeft: 20
  }
});
