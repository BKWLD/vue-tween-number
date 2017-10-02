<!--
Tween between values
-->

<template>

<span>{{ output }}</span>

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
shifty = require 'shifty'
module.exports =

	props:

		# The value to tween to
		value: Number

		# Iniital state
		initial:
			type: Number
			default: 0

		# How long should the tween take
		duration:
			type: Number
			default: 500

		# The easing function
		easing:
			type: String
			default: 'easeOutQuart'

		# A function to format the value
		formatter:
			type: Function
			default: (val) -> parseInt val

	# The tweened output value
	data: -> output: @initial

	# Tween the value it changes
	watch: value:
		immediate: true
		handler: ->

			# Stop current tween
			@tween.stop() if @tween?.isPlaying()

			# Create new tween
			@tween = new shifty.Tweenable
			@tween.tween
				from: num: @output
				to: num: @value
				easing: num: @easing
				duration: @duration

				# Update the outputted value
				step: (state) => console.log @output

</script>
