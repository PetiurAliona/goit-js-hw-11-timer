parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
class t{constructor({selector:t,targetDate:e}){this.selector=t,this.date=e,this.intervalId=null,this.start()}start(){this.intervalId=setInterval(()=>{const t=this.date.getTime()-Date.now();this.render(this.getTime(t))},1e3)}stop(){clearInterval(this.intervalId)}getTime(t){return{days:Math.floor(t/864e5).toString().padStart(2,"0"),hours:Math.floor(t%864e5/36e5).toString().padStart(2,"0"),mins:Math.floor(t%36e5/6e4).toString().padStart(2,"0"),secs:Math.floor(t%6e4/1e3).toString().padStart(2,"0")}}render({days:t,hours:e,mins:r,secs:a}){if(a<0)return this.stop(),!1;document.querySelector('[data-value="days"]').textContent=t,document.querySelector('[data-value="hours"]').textContent=e,document.querySelector('[data-value="mins"]').textContent=r,document.querySelector('[data-value="secs"]').textContent=a}}new t({selector:"#timer-1",targetDate:new Date("Jul 30, 2021")});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.0d7a4111.js.map