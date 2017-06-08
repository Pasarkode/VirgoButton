/**
 * A Personal, Simple and Reusable React Native Button
 * https://kevinhermawan.github.io
 * @flow
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, ViewPropTypes } from 'react-native'
import Base, { Primary, Secondary, Success, Info, Warning, Danger } from './style'

export default class VirgoButton extends Component {
	getTheme(){
		const { secondary, success, info, warning, danger } = this.props

		if(secondary){
			return Secondary
		}

		if(success){
			return Success
		}

		if(info){
			return Info
		}

		if(warning){
			return Warning
		}

		if(danger){
			return Danger
		}

		return Primary
	}

	render() {
		const theme = this.getTheme()
		const { children, onPress, style, rounded } = this.props
		return (
			<TouchableOpacity
				activeOpacity={0.8}
				style={[Base.main, theme.main, rounded ? Base.rounded : null, style]}
				onPress={onPress}>
				<Text style={[Base.label, theme.label]}>{children}</Text>
			</TouchableOpacity>
		)
	}
}

VirgoButton.propTypes = {
	style: ViewPropTypes.style,
	children: PropTypes.any,
	onPress: PropTypes.func,
	secondary: PropTypes.bool,
	success: PropTypes.bool,
	info: PropTypes.bool,
	warning: PropTypes.bool,
	danger: PropTypes.bool
}
