/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  NativeModules
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Video from 'react-native-video';
const { VideoPlayerManager } = NativeModules;

const url = 'https://www.w3schools.com/html/mov_bbb.mp4';

class App extends Component {
  player = null;

  fullScreen = () => {
    if (Platform.OS === 'android') {
      VideoPlayerManager.showVideoPlayer(url);
    } else if (this.player) {
      this.player.presentFullscreenPlayer();
    }
  }

  render () {
    return (<>
      <StatusBar barStyle="dark-content" />
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <View style={styles.body}>
            <Text style={styles.sectionTitle}>video</Text>
          </View>
          <Video
            source={{uri: url }}
            style={{width: 250, height: 250 }}
            onFullscreenPlayerDidDismiss={this.stopVideo}
            ref={(ref) => {
              this.player = ref;
            }}
          />
          <Button onPress={this.fullScreen} style={{backgroundColor: 'blue'}} color={'blue'} title={'fullScreen'}></Button>
        </ScrollView>
    </>)
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    padding: 16,
    backgroundColor: Colors.white,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
