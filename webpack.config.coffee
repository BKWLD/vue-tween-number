minify = process.env.NODE_ENV == 'production'
webpack = require 'webpack'

module.exports =

	entry: index: './index.vue'

	module: rules: [

		{
			test: /\.vue$/
			loader: 'vue-loader'
			options:

				# Export common JS friendly modules
				esModule: false

				# Set the doctype to html so that boolean attributes work as expected
				# https://pugjs.org/language/attributes.html#boolean-attributes
				# https://github.com/vuejs/vue-loader/issues/55#issuecomment-272837311
				template: doctype: 'html'

		}
	]

	output:
		library: 'vue-tween-number'
		libraryTarget: 'umd'
		filename: if minify then '[name].min.js' else '[name].js'

	# Every non-relative module is external
	externals: [
		/^[a-z\-0-9]+$/,
	]
