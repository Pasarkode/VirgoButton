/**
 * A Personal, Simple and Reusable React Native Button
 * https://kevinhermawan.github.io
 * @flow
 */

import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import VirgoButton from './VirgoButton'

export default class Main extends Component {
  render() {
    return (
      <View>
        <ScrollView>
        	<VirgoButton>Primary Button</VirgoButton>
	        <VirgoButton rounded>Primary Button + Rounded</VirgoButton>
	        <VirgoButton secondary>Secondary Button!</VirgoButton>
	        <VirgoButton secondary rounded>Secondary Button + Rounded</VirgoButton>
	        <VirgoButton success>Success Button!</VirgoButton>
	        <VirgoButton success rounded>Success Button + Rounded</VirgoButton>
	        <VirgoButton info>Info Button!</VirgoButton>
	        <VirgoButton info rounded>Info Button + Rounded</VirgoButton>
	        <VirgoButton warning>Warning Button!</VirgoButton>
	        <VirgoButton warning rounded>Warning Button + Rounded</VirgoButton>
	        <VirgoButton danger>Danger Button!</VirgoButton>
	        <VirgoButton danger rounded>Danger Button + Rounded</VirgoButton>
        </ScrollView>
      </View>
    )
  }
}