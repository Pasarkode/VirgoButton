/**
 * A Personal, Simple and Reusable React Native Button
 * https://kevinhermawan.github.io
 * @flow
 */

import { StyleSheet } from 'react-native'

const Base = StyleSheet.create({
	main: {
		padding: 10,
		borderRadius: 3
	},
	label: {
		color: '#FFFFFF',
		textAlign: 'center'
	},
	rounded: {
		borderRadius: 20
	}
})

const Primary = StyleSheet.create({
	main: {
		backgroundColor: '#007AFF',
		margin: 10
	}
})

const Secondary = StyleSheet.create({
	main: {
		backgroundColor: '#8E8E93',
		margin: 10
	}
})

const Success = StyleSheet.create({
	main: {
		backgroundColor: '#4CD964',
		margin: 10
	}
})

const Info = StyleSheet.create({
	main: {
		backgroundColor: '#34AADC',
		margin: 10
	}
})

const Warning = StyleSheet.create({
	main: {
		backgroundColor: '#FF9500',
		margin: 10
	}
})

const Danger = StyleSheet.create({
	main: {
		backgroundColor: '#FF3B30',
		margin: 10
	}
})

export default Base
export { Primary, Secondary, Success, Info, Warning, Danger }