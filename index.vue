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

	# Stop and destroy tween
	destroyed: -> @reset()

	# Tween the value it changes
	watch: value:
		immediate: true
		handler: ->
			@reset()
			@tween = new shifty.Tweenable
			@tween.tween
				from: num: @output
				to: num: @value
				easing: num: @easing
				duration: @duration

				# Update the outputted value
				step: (state) => @output = @formatter state.num

	# Stop existing tween and cleanup
	methods: reset: -> if @tween
		@tween.stop() if @tween.isPlaying()
		@tween.reset()

</script>
