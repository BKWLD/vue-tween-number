# vue-tween-number
A Vue component that tweens changes to it's value.

![](http://yo.bkwld.com/2E3v1V2P1v0Q/download/Screen%20Recording%202017-10-02%20at%2004.12%20PM.gif)

## Usage

```js
// Add the component
Vue.component('tween-num', require('vue-tween-number'));
```

```html
<tween-num
	:value='2000'
	:initial='0'
	:duration='500'
	easing='easeOutQuart'
	:formatter='val => val.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2})'>
</tween-num>
```
