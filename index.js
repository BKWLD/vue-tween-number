"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _shifty = require("shifty");

// Generated by CoffeeScript 2.5.1
var _default2 = {
  // Render function that tweens values
  props: {
    // The value to tween to
    value: Number,
    // Iniital state
    initial: {
      type: Number,
      default: 0
    },
    // How long should the tween take
    duration: {
      type: Number,
      default: 500
    },
    // The easing function
    easing: {
      type: String,
      default: 'easeOutQuart'
    },
    // A function to format the value
    formatter: {
      type: Function,
      default: function _default(val) {
        return parseInt(val);
      }
    }
  },
  // The tweened value
  data: function data() {
    return {
      num: this.initial
    };
  },
  // The computed output value
  computed: {
    output: function output() {
      return this.formatter(this.num);
    }
  },
  // Stop and destroy tween
  destroyed: function destroyed() {
    return this.reset();
  },
  // Tween the value it changes
  watch: {
    value: {
      immediate: true,
      handler: function handler() {
        var _this = this;

        this.reset();
        this.tween = new _shifty.Tweenable();
        return this.tween.tween({
          from: {
            num: this.num
          },
          to: {
            num: this.value
          },
          easing: {
            num: this.easing
          },
          duration: this.duration,
          // Update the tweened value
          step: function step(state) {
            return _this.num = parseFloat(state.num);
          }
        });
      }
    }
  },
  // Stop existing tween and cleanup
  methods: {
    reset: function reset() {
      if (this.tween) {
        if (this.tween.isPlaying()) {
          this.tween.stop();
        }

        return this.tween.dispose();
      }
    }
  },
  // Render the component
  render: function render(create) {
    return create('span', this.output);
  }
};
exports.default = _default2;