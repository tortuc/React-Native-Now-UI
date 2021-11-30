import React from "react";
import { ScrollView, Alert, StyleSheet } from "react-native";
import { Block } from "galio-framework";
import { Notification } from "../components";
import { nowTheme } from "../constants";

export default class PersonalNotifications extends React.Component {
  render() {
    return (
      <Block middle flex>
        <Block flex style={styles.wrapper}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Notification
              time="09:33"
              body="Like so many organizations these days, Autodesk is a company in transition. It was until recently."
              iconName="chat-round2x"
              iconFamily="NowExtra"
              color={nowTheme.COLORS.PRIMARY}
              style={{ marginTop: 15 }}
              onPress={() => Alert.alert('Yes, you can use the notifications as buttons so you could send your customers to anything you want.')}
            />
            <Notification
              time="07:20"
              body="Today you are you! That is truer than true! There is no one alive who is you-er than you!"
              iconName="app2x"
              iconFamily="NowExtra"
              color={nowTheme.COLORS.PRIMARY}
              style={{ marginTop: 15 }}
              onPress={() => Alert.alert('Yes, you can use the notifications as buttons so you could send your customers to anything you want.')}
            />
            <Notification
              time="11:45"
              body="Happiness resides not in possessions, and not in gold, happiness dwells in the soul and you"
              iconName="favourite-282x"
              iconFamily="NowExtra"
              color={nowTheme.COLORS.PRIMARY}
              style={{ marginTop: 15 }}
              onPress={() => Alert.alert('Yes, you can use the notifications as buttons so you could send your customers to anything you want.')}
            />
            <Notification
              time="04:23"
              body="Thank you Anna for the invite thank you to the whole Vogue team And I love you like Kanye."
              iconName="paper2x"
              iconFamily="NowExtra"
              color={nowTheme.COLORS.PRIMARY}
              style={{ marginTop: 15 }}
              onPress={() => Alert.alert('Yes, you can use the notifications as buttons so you could send your customers to anything you want.')}
            />
            <Block style={{ marginBottom: 20 }} />
          </ScrollView>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        width: "90%", 
        marginTop: 20
    }
})
