import React, { Component } from 'react';
import { StyleSheet, Platform, Share, Linking, View, Text } from 'react-native';

import getGalleryImageAsync from './getGalleryImageAsync';

const testLink = 'https://www.google.ie/';

export default class App extends Component {
  onShare = async () => {
    const uri = await getGalleryImageAsync(1); // for sending images

    const result = await Share.share(
      {
        title: 'test title',
        url: testLink //uri,
      },
      {
        excludedActivityTypes: [
          'com.apple.UIKit.activity.PostToWeibo',
          'com.apple.UIKit.activity.Print',
          'com.apple.UIKit.activity.CopyToPasteboard',
          'com.apple.UIKit.activity.AssignToContact',
          'com.apple.UIKit.activity.SaveToCameraRoll',
          'com.apple.UIKit.activity.AddToReadingList',
          'com.apple.UIKit.activity.PostToFlickr',
          'com.apple.UIKit.activity.PostToVimeo',
          'com.apple.UIKit.activity.PostToTencentWeibo',
          'com.apple.UIKit.activity.AirDrop',
          'com.apple.UIKit.activity.OpenInIBooks',
          'com.apple.UIKit.activity.MarkupAsPDF',
          'com.apple.reminders.RemindersEditorExtension',
          'com.apple.mobilenotes.SharingExtension',
          'com.apple.mobileslideshow.StreamShareService',
          'com.linkedin.LinkedIn.ShareExtension',
          'pinterest.ShareExtension',
          'com.google.GooglePlus.ShareExtension',
          'com.tumblr.tumblr.Share-With-Tumblr',
          'net.whatsapp.WhatsApp.ShareExtension',
        ],
      }
    );
    
  };

  onOpenEmail = async () => {
    const gmail = 'https://mail.google.com/mail/';
    const yahooMail = 'https://login.yahoo.com/';
    return Linking.openURL(gmail);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={this.onShare}>
          Share
        </Text>
        <Text style={styles.text} onPress={this.onOpenEmail}>
          Email
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF080',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#000000',
    borderRadius: 25,
    overflow: 'hidden',
  },
});
