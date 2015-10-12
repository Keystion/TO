/* !function(e){"use strict";function t(){var e=['<div class="player-controls">','<div class="player-progress">','<label for="seek{id}" class="sr-only">Seek</label>','<input id="seek{id}" class="player-progress-seek" type="range" min="0" max="100" step="0.5" value="0" data-player="seek">','<progress class="player-progress-played" max="100" value="0">',"<span>0</span>% "+C.i18n.played,"</progress>",'<progress class="player-progress-buffer" max="100" value="0">',"<span>0</span>% "+C.i18n.buffered,"</progress>","</div>",'<span class="player-controls-left">'];return o(C.controls,"restart")&&e.push('<button type="button" data-player="restart">','<svg><use xlink:href="#'+C.iconPrefix+'-restart" /></svg>','<span class="sr-only">'+C.i18n.restart+"</span>","</button>"),o(C.controls,"rewind")&&e.push('<button type="button" data-player="rewind">','<svg><use xlink:href="#'+C.iconPrefix+'-rewind" /></svg>','<span class="sr-only">'+C.i18n.rewind+"</span>","</button>"),o(C.controls,"play")&&e.push('<button type="button" data-player="play">','<svg><use xlink:href="#'+C.iconPrefix+'-play" /></svg>','<span class="sr-only">'+C.i18n.play+"</span>","</button>",'<button type="button" data-player="pause">','<svg><use xlink:href="#'+C.iconPrefix+'-pause" /></svg>','<span class="sr-only">'+C.i18n.pause+"</span>","</button>"),o(C.controls,"fast-forward")&&e.push('<button type="button" data-player="fast-forward">','<svg><use xlink:href="#'+C.iconPrefix+'-fast-forward" /></svg>','<span class="sr-only">'+C.i18n.forward+"</span>","</button>"),o(C.controls,"current-time")&&e.push('<span class="player-time">','<span class="sr-only">'+C.i18n.currentTime+"</span>",'<span class="player-current-time">00:00</span>',"</span>"),o(C.controls,"duration")&&e.push('<span class="player-time">','<span class="sr-only">'+C.i18n.duration+"</span>",'<span class="player-duration">00:00</span>',"</span>"),e.push("</span>",'<span class="player-controls-right">'),o(C.controls,"mute")&&e.push('<button type="button" data-player="mute">','<svg class="icon-muted"><use xlink:href="#'+C.iconPrefix+'-muted" /></svg>','<svg><use xlink:href="#'+C.iconPrefix+'-volume" /></svg>','<span class="sr-only">'+C.i18n.toggleMute+"</span>","</button>"),o(C.controls,"volume")&&e.push('<label for="volume{id}" class="sr-only">'+C.i18n.volume+"</label>",'<input id="volume{id}" class="player-volume" type="range" min="0" max="10" value="5" data-player="volume">'),o(C.controls,"captions")&&e.push('<button type="button" data-player="captions">','<svg class="icon-captions-on"><use xlink:href="#'+C.iconPrefix+'-captions-on" /></svg>','<svg><use xlink:href="#'+C.iconPrefix+'-captions-off" /></svg>','<span class="sr-only">'+C.i18n.toggleCaptions+"</span>","</button>"),o(C.controls,"fullscreen")&&e.push('<button type="button" data-player="fullscreen">','<svg class="icon-exit-fullscreen"><use xlink:href="#'+C.iconPrefix+'-exit-fullscreen" /></svg>','<svg><use xlink:href="#'+C.iconPrefix+'-enter-fullscreen" /></svg>','<span class="sr-only">'+C.i18n.toggleFullscreen+"</span>","</button>"),e.push("</span>","</div>"),e.join("")}function n(e,t){C.debug&&window.console&&console[t?"error":"log"](e)}function r(){var e,t,n,r=navigator.userAgent,a=navigator.appName,s=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10);return-1!==navigator.appVersion.indexOf("Windows NT")&&-1!==navigator.appVersion.indexOf("rv:11")?(a="IE",s="11;"):-1!==(t=r.indexOf("MSIE"))?(a="IE",s=r.substring(t+5)):-1!==(t=r.indexOf("Chrome"))?(a="Chrome",s=r.substring(t+7)):-1!==(t=r.indexOf("Safari"))?(a="Safari",s=r.substring(t+7),-1!==(t=r.indexOf("Version"))&&(s=r.substring(t+8))):-1!==(t=r.indexOf("Firefox"))?(a="Firefox",s=r.substring(t+8)):(e=r.lastIndexOf(" ")+1)<(t=r.lastIndexOf("/"))&&(a=r.substring(e,t),s=r.substring(t+1),a.toLowerCase()==a.toUpperCase()&&(a=navigator.appName)),-1!==(n=s.indexOf(";"))&&(s=s.substring(0,n)),-1!==(n=s.indexOf(" "))&&(s=s.substring(0,n)),o=parseInt(""+s,10),isNaN(o)&&(s=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10)),{name:a,version:o,ios:/(iPad|iPhone|iPod)/g.test(navigator.platform)}}function a(e,t){var n=e.media;if("video"==e.type)switch(t){case"video/webm":return!(!n.canPlayType||!n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/,""));case"video/mp4":return!(!n.canPlayType||!n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/,""));case"video/ogg":return!(!n.canPlayType||!n.canPlayType('video/ogg; codecs="theora"').replace(/no/,""))}else if("audio"==e.type)switch(t){case"audio/mpeg":return!(!n.canPlayType||!n.canPlayType("audio/mpeg;").replace(/no/,""));case"audio/ogg":return!(!n.canPlayType||!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/,""));case"audio/wav":return!(!n.canPlayType||!n.canPlayType('audio/wav; codecs="1"').replace(/no/,""))}return!1}function s(e){if(!document.querySelectorAll('script[src="'+e+'"]').length){var t=document.createElement("script");t.src=e;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}}function o(e,t){return Array.prototype.indexOf&&-1!=e.indexOf(t)}function i(e,t,n){return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),n)}function u(e,t){e.length||(e=[e]);for(var n=e.length-1;n>=0;n--){var r=n>0?t.cloneNode(!0):t,a=e[n],s=a.parentNode,o=a.nextSibling;r.appendChild(a),o?s.insertBefore(r,o):s.appendChild(r)}}function l(e){for(var t=e.parentNode;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e)}function c(e){e.parentNode.removeChild(e)}function p(e,t){e.insertBefore(t,e.firstChild)}function d(e,t){for(var n in t)e.setAttribute(n,t[n])}function f(e,t,n){if(e)if(e.classList)e.classList[n?"add":"remove"](t);else{var r=(" "+e.className+" ").replace(/\s+/g," ").replace(" "+t+" ","");e.className=r+(n?" "+t:"")}}function m(e,t,n,r){var a=t.split(" ");if(e instanceof NodeList)for(var s=0;s<e.length;s++)e[s]instanceof Node&&m(e[s],arguments[1],arguments[2],arguments[3]);else for(var o=0;o<a.length;o++)e[r?"addEventListener":"removeEventListener"](a[o],n,!1)}function y(e,t,n){e&&m(e,t,n,!0)}function b(e,t,n){e&&m(e,t,n,!1)}function v(e,t){var n=document.createEvent("MouseEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function g(e,t){return t="boolean"==typeof t?t:!e.getAttribute("aria-pressed"),e.setAttribute("aria-pressed",t),t}function h(e,t){return 0===e||0===t||isNaN(e)||isNaN(t)?0:(e/t*100).toFixed(2)}function w(e,t){for(var n in t)t[n]&&t[n].constructor&&t[n].constructor===Object?(e[n]=e[n]||{},w(e[n],t[n])):e[n]=t[n];return e}function k(){var e={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",element:null,prefix:""},t="webkit moz o ms khtml".split(" ");if("undefined"!=typeof document.cancelFullScreen)e.supportsFullScreen=!0;else for(var n=0,r=t.length;r>n;n++){if(e.prefix=t[n],"undefined"!=typeof document[e.prefix+"CancelFullScreen"]){e.supportsFullScreen=!0;break}if("undefined"!=typeof document.msExitFullscreen&&document.msFullscreenEnabled){e.prefix="ms",e.supportsFullScreen=!0;break}}return e.supportsFullScreen&&(e.fullScreenEventName="ms"==e.prefix?"MSFullscreenChange":e.prefix+"fullscreenchange",e.isFullScreen=function(e){switch("undefined"==typeof e&&(e=document.body),this.prefix){case"":return document.fullscreenElement==e;case"moz":return document.mozFullScreenElement==e;default:return document[this.prefix+"FullscreenElement"]==e}},e.requestFullScreen=function(e){return"undefined"==typeof e&&(e=document.body),""===this.prefix?e.requestFullScreen():e[this.prefix+("ms"==this.prefix?"RequestFullscreen":"RequestFullScreen")]()},e.cancelFullScreen=function(){return""===this.prefix?document.cancelFullScreen():document[this.prefix+("ms"==this.prefix?"ExitFullscreen":"CancelFullScreen")]()},e.element=function(){return""===this.prefix?document.fullscreenElement:document[this.prefix+"FullscreenElement"]}),e}function x(){var e={supported:function(){try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}}()};return e}function T(o){function w(e){if(!ft.usingTextTracks&&"video"===ft.type&&ft.supported.full){for(ft.subcount=0,e="number"==typeof e?e:ft.media.currentTime;A(ft.captions[ft.subcount][0])<e.toFixed(1);)if(ft.subcount++,ft.subcount>ft.captions.length-1){ft.subcount=ft.captions.length-1;break}if(ft.media.currentTime.toFixed(1)>=E(ft.captions[ft.subcount][0])&&ft.media.currentTime.toFixed(1)<=A(ft.captions[ft.subcount][0])){ft.currentCaption=ft.captions[ft.subcount][1];var t=ft.currentCaption.trim();ft.captionsContainer.innerHTML!=t&&(ft.captionsContainer.innerHTML="",ft.captionsContainer.innerHTML=t)}else ft.captionsContainer.innerHTML=""}}function T(){ft.buttons.captions&&(f(ft.container,C.classes.captions.enabled,!0),C.captions.defaultActive&&(f(ft.container,C.classes.captions.active,!0),g(ft.buttons.captions,!0)))}function E(e){var t=[];return t=e.split(" --> "),P(t[0])}function A(e){var t=[];return t=e.split(" --> "),P(t[1])}function P(e){if(null===e||void 0===e)return 0;var t,n=[],r=[];return n=e.split(","),r=n[0].split(":"),t=Math.floor(60*r[0]*60)+Math.floor(60*r[1])+Math.floor(r[2])}function N(e){return ft.container.querySelectorAll(e)}function M(e){return N(e)[0]}function I(){try{return window.self!==window.top}catch(e){return!0}}function L(){var e=C.html;if(n("Injecting custom controls."),e||(e=t()),e=i(e,"{seektime}",C.seekTime),e=i(e,"{id}",Math.floor(1e4*Math.random())),ft.container.insertAdjacentHTML("beforeend",e),C.tooltips)for(var r=N(C.selectors.labels),a=r.length-1;a>=0;a--){var s=r[a];f(s,C.classes.hidden,!1),f(s,C.classes.tooltip,!0)}}function O(){try{return ft.controls=M(C.selectors.controls),ft.buttons={},ft.buttons.seek=M(C.selectors.buttons.seek),ft.buttons.play=M(C.selectors.buttons.play),ft.buttons.pause=M(C.selectors.buttons.pause),ft.buttons.restart=M(C.selectors.buttons.restart),ft.buttons.rewind=M(C.selectors.buttons.rewind),ft.buttons.forward=M(C.selectors.buttons.forward),ft.buttons.fullscreen=M(C.selectors.buttons.fullscreen),ft.buttons.mute=M(C.selectors.buttons.mute),ft.buttons.captions=M(C.selectors.buttons.captions),ft.checkboxes=N('[type="checkbox"]'),ft.progress={},ft.progress.container=M(C.selectors.progress.container),ft.progress.buffer={},ft.progress.buffer.bar=M(C.selectors.progress.buffer),ft.progress.buffer.text=ft.progress.buffer.bar&&ft.progress.buffer.bar.getElementsByTagName("span")[0],ft.progress.played={},ft.progress.played.bar=M(C.selectors.progress.played),ft.progress.played.text=ft.progress.played.bar&&ft.progress.played.bar.getElementsByTagName("span")[0],ft.volume=M(C.selectors.buttons.volume),ft.duration=M(C.selectors.duration),ft.currentTime=M(C.selectors.currentTime),ft.seekTime=N(C.selectors.seekTime),!0}catch(e){return n("It looks like there's a problem with your controls html. Bailing.",!0),ft.media.setAttribute("controls",""),!1}}function q(){if(ft.buttons.play){var e=ft.buttons.play.innerText||C.i18n.play;"undefined"!=typeof C.title&&C.title.length&&(e+=", "+C.title),ft.buttons.play.setAttribute("aria-label",e)}}function V(){if(!ft.media)return n("No audio or video element found!",!0),!1;if(ft.supported.full&&(ft.media.removeAttribute("controls"),f(ft.container,C.classes.type.replace("{0}",ft.type),!0),f(ft.container,C.classes.stopped,null===ft.media.getAttribute("autoplay")),ft.browser.ios&&f(ft.container,"ios",!0),"video"===ft.type)){var e=document.createElement("div");e.setAttribute("class",C.classes.videoWrapper),u(ft.media,e),ft.videoContainer=e}"youtube"==ft.type&&H(ft.media.getAttribute("data-video-id")),null!==ft.media.getAttribute("autoplay")&&D()}function H(e){for(var t=N('[id^="youtube"]'),n=t.length-1;n>=0;n--)c(t[n]);var r=document.createElement("div");r.setAttribute("id","youtube-"+Math.floor(1e4*Math.random())),ft.media.appendChild(r),f(ft.media,C.classes.videoWrapper,!0),f(ft.media,C.classes.embedWrapper,!0),"object"==typeof YT?R(e,r):(s("https://www.youtube.com/iframe_api"),S.youtube.push(function(){R(e,r)}),window.onYouTubeIframeAPIReady=function(){for(var e=S.youtube.length-1;e>=0;e--)S.youtube[e](),S.youtube.splice(e,1)})}function R(e,t){n("YouTube API Ready"),"timer"in ft||(ft.timer={}),ft.embed=new YT.Player(t.id,{videoId:e,playerVars:{autoplay:0,controls:ft.supported.full?0:1,rel:0,showinfo:0,iv_load_policy:3,cc_load_policy:C.captions.defaultActive?1:0,cc_lang_pref:"en",wmode:"transparent",modestbranding:1,disablekb:1},events:{onReady:function(e){var t=e.target;ft.media.play=function(){t.playVideo()},ft.media.pause=function(){t.pauseVideo()},ft.media.stop=function(){t.stopVideo()},ft.media.duration=t.getDuration(),ft.media.paused=!0,ft.media.currentTime=t.getCurrentTime(),ft.media.muted=t.isMuted(),v(ft.media,"timeupdate"),window.clearInterval(ft.timer.buffering),ft.timer.buffering=window.setInterval(function(){ft.media.buffered=t.getVideoLoadedFraction(),v(ft.media,"progress"),1===ft.media.buffered&&window.clearInterval(ft.timer.buffering)},200),ft.supported.full&&(ft.container.querySelectorAll(C.selectors.controls).length||dt(),C.displayDuration&&rt())},onStateChange:function(e){var t=e.target;switch(window.clearInterval(ft.timer.playing),e.data){case 0:ft.media.paused=!0,v(ft.media,"ended");break;case 1:ft.media.paused=!1,v(ft.media,"play"),ft.timer.playing=window.setInterval(function(){ft.media.currentTime=t.getCurrentTime(),v(ft.media,"timeupdate")},200);break;case 2:ft.media.paused=!0,v(ft.media,"pause")}}}})}function B(){if("video"===ft.type){ft.videoContainer.insertAdjacentHTML("afterbegin",'<div class="'+C.selectors.captions.replace(".","")+'"><span></span></div>'),ft.captionsContainer=M(C.selectors.captions).querySelector("span"),ft.usingTextTracks=!1,ft.media.textTracks&&(ft.usingTextTracks=!0);for(var e,t="",r=ft.media.childNodes,a=0;a<r.length;a++)"track"===r[a].nodeName.toLowerCase()&&(e=r[a].kind,("captions"===e||"subtitles"===e)&&(t=r[a].getAttribute("src")));if(ft.captionExists=!0,""===t?(ft.captionExists=!1,n("No caption track found.")):n("Caption track found; URI: "+t),ft.captionExists){for(var s=ft.media.textTracks,o=0;o<s.length;o++)s[o].mode="hidden";if(T(ft),("IE"===ft.browser.name&&ft.browser.version>=10||"Firefox"===ft.browser.name&&ft.browser.version>=31||"Chrome"===ft.browser.name&&ft.browser.version>=43||"Safari"===ft.browser.name&&ft.browser.version>=7)&&(n("Detected unsupported browser for HTML5 captions. Using fallback."),ft.usingTextTracks=!1),ft.usingTextTracks){n("TextTracks supported.");for(var i=0;i<s.length;i++){var u=s[i];("captions"===u.kind||"subtitles"===u.kind)&&y(u,"cuechange",function(){ft.captionsContainer.innerHTML="",this.activeCues[0]&&this.activeCues[0].hasOwnProperty("text")&&ft.captionsContainer.appendChild(this.activeCues[0].getCueAsHTML().trim())})}}else if(n("TextTracks not supported so rendering captions manually."),ft.currentCaption="",ft.captions=[],""!==t){var l=new XMLHttpRequest;l.onreadystatechange=function(){if(4===l.readyState)if(200===l.status){var e,t=[],r=l.responseText;t=r.split("\n\n");for(var a=0;a<t.length;a++)e=t[a],ft.captions[a]=[],ft.captions[a]=e.split("\n");ft.captions.shift(),n("Successfully loaded the caption file via AJAX.")}else n("There was a problem loading the caption file via AJAX.",!0)},l.open("get",t,!0),l.send()}if("Safari"===ft.browser.name&&ft.browser.version>=7){n("Safari 7+ detected; removing track from DOM."),s=ft.media.getElementsByTagName("track");for(var c=0;c<s.length;c++)ft.media.removeChild(s[c])}}else f(ft.container,C.classes.captions.enabled)}}function j(){if("audio"!=ft.type&&C.fullscreen.enabled){var e=F.supportsFullScreen;e||C.fullscreen.fallback&&!I()?(n((e?"Native":"Fallback")+" fullscreen enabled."),f(ft.container,C.classes.fullscreen.enabled,!0)):n("Fullscreen not supported and fallback disabled."),g(ft.buttons.fullscreen,!1),C.fullscreen.hideControls&&f(ft.container,C.classes.fullscreen.hideControls,!0)}}function D(){ft.media.play()}function _(){ft.media.pause()}function W(e){e===!0?D():e===!1?_():ft.media[ft.media.paused?"play":"pause"]()}function Y(e){"number"!=typeof e&&(e=C.seekTime),U(ft.media.currentTime-e)}function z(e){"number"!=typeof e&&(e=C.seekTime),U(ft.media.currentTime+e)}function U(e){var t=0,r=ft.media.paused;"number"==typeof e?t=e:"object"!=typeof e||"input"!==e.type&&"change"!==e.type||(t=e.target.value/e.target.max*ft.media.duration),0>t?t=0:t>ft.media.duration&&(t=ft.media.duration);try{ft.media.currentTime=t.toFixed(1)}catch(a){}"youtube"==ft.type&&(ft.embed.seekTo(t),r&&_(),v(ft.media,"timeupdate")),n("Seeking to "+ft.media.currentTime+" seconds"),w(t)}function X(){f(ft.container,C.classes.playing,!ft.media.paused),f(ft.container,C.classes.stopped,ft.media.paused)}function J(e){function t(){f(ft.container,C.classes.hover,!0),window.clearTimeout(a),s||(a=window.setTimeout(function(){f(ft.container,C.classes.hover,!1)},2e3))}function n(e){s="mouseenter"===e.type}var r=F.supportsFullScreen;e&&e.type===F.fullScreenEventName?ft.isFullscreen=F.isFullScreen(ft.container):r?(F.isFullScreen(ft.container)?F.cancelFullScreen():F.requestFullScreen(ft.container),ft.isFullscreen=F.isFullScreen(ft.container)):(ft.isFullscreen=!ft.isFullscreen,ft.isFullscreen?(y(document,"keyup",$),document.body.style.overflow="hidden"):(b(document,"keyup",$),document.body.style.overflow="")),f(ft.container,C.classes.fullscreen.active,ft.isFullscreen),g(ft.buttons.fullscreen,ft.isFullscreen);var a,s=!1;C.fullscreen.hideControls&&(f(ft.controls,C.classes.hover,!1),m(ft.controls,"mouseenter mouseleave",n,ft.isFullscreen),m(ft.container,"mousemove",t,ft.isFullscreen))}function $(e){27===(e.which||e.charCode||e.keyCode)&&ft.isFullscreen&&J()}function G(e){"undefined"==typeof e&&(e=C.storage.enabled&&x().supported?window.localStorage[C.storage.key]||C.volume:C.volume),e>10&&(e=10),0>e&&(e=0),ft.media.volume=parseFloat(e/10),"youtube"==ft.type&&(ft.embed.setVolume(100*ft.media.volume),v(ft.media,"volumechange")),ft.media.muted&&e>0&&K()}function K(e){"boolean"!=typeof e&&(e=!ft.media.muted),g(ft.buttons.mute,e),ft.media.muted=e,"youtube"===ft.type&&(ft.embed[ft.media.muted?"mute":"unMute"](),v(ft.media,"volumechange"))}function Q(){var e=ft.media.muted?0:10*ft.media.volume;ft.supported.full&&ft.volume&&(ft.volume.value=e),C.storage.enabled&&x().supported&&window.localStorage.setItem(C.storage.key,e),f(ft.container,C.classes.muted,0===e),ft.supported.full&&ft.buttons.mute&&g(ft.buttons.mute,0===e)}function Z(e){ft.supported.full&&ft.buttons.captions&&("boolean"!=typeof e&&(e=-1===ft.container.className.indexOf(C.classes.captions.active)),g(ft.buttons.captions,e),f(ft.container,C.classes.captions.active,e))}function et(e){var t="waiting"===e.type;clearTimeout(ft.loadingTimer),ft.loadingTimer=setTimeout(function(){f(ft.container,C.classes.loading,t)},t?250:0)}function tt(e){var t=ft.progress.played.bar,n=ft.progress.played.text,r=0;if(e)switch(e.type){case"timeupdate":case"seeking":r=h(ft.media.currentTime,ft.media.duration),"timeupdate"==e.type&&ft.buttons.seek&&(ft.buttons.seek.value=r);break;case"change":case"input":r=e.target.value;break;case"playing":case"progress":t=ft.progress.buffer.bar,n=ft.progress.buffer.text,r=function(){var e=ft.media.buffered;return e&&e.length?h(e.end(0),ft.media.duration):"number"==typeof e?100*e:0}()}t&&(t.value=r),n&&(n.innerHTML=r)}function nt(e,t){if(t){ft.secs=parseInt(e%60),ft.mins=parseInt(e/60%60),ft.hours=parseInt(e/60/60%60);var n=parseInt(ft.media.duration/60/60%60)>0;ft.secs=("0"+ft.secs).slice(-2),ft.mins=("0"+ft.mins).slice(-2),t.innerHTML=(n?ft.hours+":":"")+ft.mins+":"+ft.secs}}function rt(){var e=ft.media.duration||0;!ft.duration&&C.displayDuration&&ft.media.paused&&nt(e,ft.currentTime),ft.duration&&nt(e,ft.duration)}function at(e){nt(ft.media.currentTime,ft.currentTime),tt(e)}function st(){for(var e=ft.media.querySelectorAll("source"),t=e.length-1;t>=0;t--)c(e[t]);ft.media.removeAttribute("src")}function ot(e){if(e.src){var t=document.createElement("source");d(t,e),p(ft.media,t)}}function it(e){if("youtube"===ft.type&&"string"==typeof e)return ft.embed.destroy(),H(e),at(),void 0;if(_(),U(),st(),"string"==typeof e)ot({src:e});else if(e.constructor===Array)for(var t in e)ot(e[t]);ft.supported.full&&(at(),X()),ft.media.load(),null!==ft.media.getAttribute("autoplay")&&D()}function ut(e){"video"===ft.type&&ft.media.setAttribute("poster",e)}function lt(){function e(){var e=document.activeElement;e&&e!=document.body?document.querySelector&&(e=document.querySelector(":focus")):e=null;for(var t in ft.buttons){var n=ft.buttons[t];f(n,"tab-focus",n===e)}}var t="IE"==ft.browser.name?"change":"input";y(window,"keyup",function(t){var n=t.keyCode?t.keyCode:t.which;9==n&&e()});for(var n in ft.buttons){var r=ft.buttons[n];y(r,"blur",function(){f(r,"tab-focus",!1)})}y(ft.buttons.play,"click",function(){D(),setTimeout(function(){ft.buttons.pause.focus()},100)}),y(ft.buttons.pause,"click",function(){_(),setTimeout(function(){ft.buttons.play.focus()},100)}),y(ft.buttons.restart,"click",U),y(ft.buttons.rewind,"click",Y),y(ft.buttons.forward,"click",z),y(ft.buttons.seek,t,U),y(ft.volume,t,function(){G(this.value)}),y(ft.buttons.mute,"click",K),y(ft.buttons.fullscreen,"click",J),F.supportsFullScreen&&y(document,F.fullScreenEventName,J),y(ft.media,"timeupdate seeking",at),y(ft.media,"timeupdate",w),y(ft.media,"loadedmetadata",rt),y(ft.buttons.captions,"click",Z),y(ft.media,"ended",function(){"video"===ft.type&&(ft.captionsContainer.innerHTML=""),X()}),y(ft.media,"progress playing",tt),y(ft.media,"volumechange",Q),y(ft.media,"play pause",X),y(ft.media,"waiting canplay seeked",et),"video"===ft.type&&C.click&&y(ft.videoContainer,"click",function(){ft.media.paused?v(ft.buttons.play,"click"):ft.media.ended?(U(),v(ft.buttons.play,"click")):v(ft.buttons.pause,"click")})}function ct(){if(!ft.init)return null;if(ft.container.setAttribute("class",C.selectors.container.replace(".","")),ft.init=!1,c(M(C.selectors.controls)),"youtube"===ft.type)return ft.embed.destroy(),void 0;"video"===ft.type&&(c(M(C.selectors.captions)),l(ft.videoContainer)),ft.media.setAttribute("controls","");var e=ft.media.cloneNode(!0);ft.media.parentNode.replaceChild(e,ft.media)}function pt(){if(ft.init)return null;F=k(),ft.browser=r(),ft.media=ft.container.querySelectorAll("audio, video, div")[0];var t=ft.media.tagName.toLowerCase();if(ft.type="div"===t?ft.media.getAttribute("data-type"):t,ft.supported=e.supported(ft.type),!ft.supported.basic)return!1;if(n(ft.browser.name+" "+ft.browser.version),V(),"video"==ft.type||"audio"==ft.type){if(!ft.supported.full)return ft.init=!0,void 0;dt(),C.displayDuration&&rt(),q()}ft.init=!0}function dt(){return L(),O()?(B(),G(),Q(),j(),lt(),void 0):!1}var ft=this;return ft.container=o,pt(),ft.init?{media:ft.media,play:D,pause:_,restart:U,rewind:Y,forward:z,seek:U,source:it,poster:ut,setVolume:G,togglePlay:W,toggleMute:K,toggleCaptions:Z,toggleFullscreen:J,isFullscreen:function(){return ft.isFullscreen||!1},support:function(e){return a(ft,e)},destroy:ct,restore:pt}:{}}var F,C,S={youtube:[]},E={enabled:!0,debug:!1,seekTime:10,volume:5,click:!0,tooltips:!1,displayDuration:!0,iconPrefix:"icon",selectors:{container:".player",controls:".player-controls",labels:"[data-player] .sr-only, label .sr-only",buttons:{seek:'[data-player="seek"]',play:'[data-player="play"]',pause:'[data-player="pause"]',restart:'[data-player="restart"]',rewind:'[data-player="rewind"]',forward:'[data-player="fast-forward"]',mute:'[data-player="mute"]',volume:'[data-player="volume"]',captions:'[data-player="captions"]',fullscreen:'[data-player="fullscreen"]'},progress:{container:".player-progress",buffer:".player-progress-buffer",played:".player-progress-played"},captions:".player-captions",currentTime:".player-current-time",duration:".player-duration"},classes:{videoWrapper:"player-video-wrapper",embedWrapper:"player-video-embed",type:"player-{0}",stopped:"stopped",playing:"playing",muted:"muted",loading:"loading",tooltip:"player-tooltip",hidden:"sr-only",hover:"player-hover",captions:{enabled:"captions-enabled",active:"captions-active"},fullscreen:{enabled:"fullscreen-enabled",active:"fullscreen-active",hideControls:"fullscreen-hide-controls"}},captions:{defaultActive:!1},fullscreen:{enabled:!0,fallback:!0,hideControls:!0},storage:{enabled:!0,key:"plyr_volume"},controls:["restart","rewind","play","fast-forward","current-time","duration","mute","volume","captions","fullscreen"],i18n:{restart:"Restart",rewind:"Rewind {seektime} secs",play:"Play",pause:"Pause",forward:"Forward {seektime} secs",played:"played",buffered:"buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",toggleMute:"Toggle Mute",toggleCaptions:"Toggle Captions",toggleFullscreen:"Toggle Fullscreen"}};e.supported=function(e){var t,n,a=r(),s="IE"===a.name&&a.version<=9,o=/iPhone|iPod/i.test(navigator.userAgent),i=!!document.createElement("audio").canPlayType,u=!!document.createElement("video").canPlayType;switch(e){case"video":t=u,n=t&&!s&&!o;break;case"audio":t=i,n=t&&!s;break;case"youtube":t=!0,n=!s&&!o;break;default:t=i&&u,n=t&&!s}return{basic:t,full:n}},e.setup=function(t){if(C=w(E,t),!C.enabled||!e.supported().basic)return!1;for(var n=document.querySelectorAll(C.selectors.container),r=[],a=n.length-1;a>=0;a--){var s=n[a];if("undefined"==typeof s.plyr){var o=new T(s);s.plyr=Object.keys(o).length?o:!1,"function"==typeof C.onSetup&&C.onSetup.apply(s.plyr)}r.push(s.plyr)}return r}}(this.plyr=this.plyr||{}); */

// ==========================================================================
// Plyr
// plyr.js v1.3.6
// https://github.com/selz/plyr
// License: The MIT License (MIT)
// ==========================================================================
// Credits: http://paypal.github.io/accessible-html5-video-player/
// ==========================================================================

(function (api) {
    'use strict';
    /*global YT*/

    // Globals
    var fullscreen, config, callbacks = { youtube: [] };

    // Default config
    var defaults = {
        enabled:                true,
        debug:                  false,
        seekTime:               10,
        volume:                 5,
        click:                  true,
        tooltips:               false,
        displayDuration:        true,
        iconPrefix:             'icon',
        selectors: {
            container:          '.player',
            controls:           '.player-controls',
            labels:             '[data-player] .sr-only, label .sr-only',
            buttons: {
                seek:           '[data-player="seek"]',
                play:           '[data-player="play"]',
                pause:          '[data-player="pause"]',
                restart:        '[data-player="restart"]',
                rewind:         '[data-player="rewind"]',
                forward:        '[data-player="fast-forward"]',
                mute:           '[data-player="mute"]',
                volume:         '[data-player="volume"]',
                captions:       '[data-player="captions"]',
                fullscreen:     '[data-player="fullscreen"]'
            },
            progress: {
                container:      '.player-progress',
                buffer:         '.player-progress-buffer',
                played:         '.player-progress-played'
            },
            captions:           '.player-captions',
            currentTime:        '.player-current-time',
            duration:           '.player-duration'
        },
        classes: {
            videoWrapper:       'player-video-wrapper',
            embedWrapper:       'player-video-embed',
            type:               'player-{0}',
            stopped:            'stopped',
            playing:            'playing',
            muted:              'muted',
            loading:            'loading',
            tooltip:            'player-tooltip',
            hidden:             'sr-only',
            hover:              'player-hover',
            captions: {
                enabled:        'captions-enabled',
                active:         'captions-active'
            },
            fullscreen: {
                enabled:        'fullscreen-enabled',
                active:         'fullscreen-active',
                hideControls:   'fullscreen-hide-controls'
            }
        },
        captions: {
            defaultActive:      false
        },
        fullscreen: {
            enabled:            true,
            fallback:           true,
            hideControls:       true
        },
        storage: {
            enabled:            true,
            key:                'plyr_volume'
        },
        controls:               ['restart', 'rewind', 'play', 'fast-forward', 'current-time', 'duration', 'mute', 'volume', 'captions', 'fullscreen'],
        i18n: {
            restart:            'Restart',
            rewind:             'Rewind {seektime} secs',
            play:               'Play',
            pause:              'Pause',
            forward:            'Forward {seektime} secs',
            played:             'played',
            buffered:           'buffered',
            currentTime:        'Current time',
            duration:           'Duration',
            volume:             'Volume',
            toggleMute:         'Toggle Mute',
            toggleCaptions:     'Toggle Captions',
            toggleFullscreen:   'Toggle Fullscreen'
        }
    };

    // Build the default HTML
    function _buildControls() {
        // Open and add the progress and seek elements
        var html = [
        '<div class="player-controls">',
            '<div class="player-progress">',
                '<label for="seek{id}" class="sr-only">Seek</label>',
                '<input id="seek{id}" class="player-progress-seek" type="range" min="0" max="100" step="0.5" value="0" data-player="seek">',
                '<progress class="player-progress-played" max="100" value="0">',
                    '<span>0</span>% ' + config.i18n.played,
                '</progress>',
                '<progress class="player-progress-buffer" max="100" value="0">',
                    '<span>0</span>% ' + config.i18n.buffered,
                '</progress>',
            '</div>',
            '<span class="player-controls-left">'];

        // Restart button
        if (_inArray(config.controls, 'restart')) {
            html.push(
                '<button type="button" data-player="restart">',
                    '<svg><use xlink:href="#' + config.iconPrefix + '-restart" /></svg>',
                    '<span class="sr-only">' + config.i18n.restart + '</span>',
                '</button>'
            );
        }

        // Rewind button
        if (_inArray(config.controls, 'rewind')) {
            html.push(
                '<button type="button" data-player="rewind">',
                    '<svg><use xlink:href="#' + config.iconPrefix + '-rewind" /></svg>',
                    '<span class="sr-only">' + config.i18n.rewind + '</span>',
                '</button>'
            );
        }

        // Play/pause button
        if (_inArray(config.controls, 'play')) {
            html.push(
                '<button type="button" data-player="play">',
                    '<svg><use xlink:href="#' + config.iconPrefix + '-play" /></svg>',
                    '<span class="sr-only">' + config.i18n.play + '</span>',
                '</button>',
                '<button type="button" data-player="pause">',
                    '<svg><use xlink:href="#' + config.iconPrefix + '-pause" /></svg>',
                    '<span class="sr-only">' + config.i18n.pause + '</span>',
                '</button>'
            );
        }

        // Fast forward button
        if (_inArray(config.controls, 'fast-forward')) {
            html.push(
                '<button type="button" data-player="fast-forward">',
                    '<svg><use xlink:href="#' + config.iconPrefix + '-fast-forward" /></svg>',
                    '<span class="sr-only">' + config.i18n.forward + '</span>',
                '</button>'
            );
        }

        // Media current time display
        if (_inArray(config.controls, 'current-time')) {
            html.push(
                '<span class="player-time">',
                    '<span class="sr-only">' + config.i18n.currentTime + '</span>',
                    '<span class="player-current-time">00:00</span>',
                '</span>'
            );
        }

        // Media duration display
        if (_inArray(config.controls, 'duration')) {
            html.push(
                '<span class="player-time">',
                    '<span class="sr-only">' + config.i18n.duration + '</span>',
                    '<span class="player-duration">00:00</span>',
                '</span>'
            );
        }

        // Close left controls
        html.push(
            '</span>',
            '<span class="player-controls-right">'
        );

        // Toggle mute button
        if (_inArray(config.controls, 'mute')) {
            html.push(
                '<button type="button" data-player="mute">',
                    '<svg class="icon-muted"><use xlink:href="#' + config.iconPrefix + '-muted" /></svg>',
                    '<svg><use xlink:href="#' + config.iconPrefix + '-volume" /></svg>',
                    '<span class="sr-only">' + config.i18n.toggleMute + '</span>',
                '</button>'
            );
        }

        // Volume range control
        if (_inArray(config.controls, 'volume')) {
            html.push(
                '<label for="volume{id}" class="sr-only">' + config.i18n.volume + '</label>',
                '<input id="volume{id}" class="player-volume" type="range" min="0" max="10" value="5" data-player="volume">'
            );
        }

        // Toggle captions button
        if (_inArray(config.controls, 'captions')) {
            html.push(
                '<button type="button" data-player="captions">',
                    '<svg class="icon-captions-on"><use xlink:href="#' + config.iconPrefix + '-captions-on" /></svg>',
                    '<svg><use xlink:href="#' + config.iconPrefix + '-captions-off" /></svg>',
                    '<span class="sr-only">' + config.i18n.toggleCaptions + '</span>',
                '</button>'
            );
        }

        // Toggle fullscreen button
        if (_inArray(config.controls, 'fullscreen')) {
            html.push(
                '<button type="button" data-player="fullscreen">',
                    '<svg class="icon-exit-fullscreen"><use xlink:href="#' + config.iconPrefix + '-exit-fullscreen" /></svg>',
                    '<svg><use xlink:href="#' + config.iconPrefix + '-enter-fullscreen" /></svg>',
                    '<span class="sr-only">' + config.i18n.toggleFullscreen + '</span>',
                '</button>'
            );
        }

        // Close everything
        html.push(
            '</span>',
        '</div>'
        );

        return html.join('');
    }

    // Debugging
    function _log(text, error) {
        if (config.debug && window.console) {
            console[(error ? 'error' : 'log')](text);
        }
    }

    // Credits: http://paypal.github.io/accessible-html5-video-player/
    // Unfortunately, due to mixed support, UA sniffing is required
    function _browserSniff() {
        var nAgt = navigator.userAgent,
            name = navigator.appName,
            fullVersion = '' + parseFloat(navigator.appVersion),
            majorVersion = parseInt(navigator.appVersion, 10),
            nameOffset,
            verOffset,
            ix;

        // MSIE 11
        if ((navigator.appVersion.indexOf('Windows NT') !== -1) && (navigator.appVersion.indexOf('rv:11') !== -1)) {
            name = 'IE';
            fullVersion = '11;';
        }
        // MSIE
        else if ((verOffset=nAgt.indexOf('MSIE')) !== -1) {
            name = 'IE';
            fullVersion = nAgt.substring(verOffset + 5);
        }
        // Chrome
        else if ((verOffset=nAgt.indexOf('Chrome')) !== -1) {
            name = 'Chrome';
            fullVersion = nAgt.substring(verOffset + 7);
        }
        // Safari
        else if ((verOffset=nAgt.indexOf('Safari')) !== -1) {
            name = 'Safari';
            fullVersion = nAgt.substring(verOffset + 7);
            if ((verOffset=nAgt.indexOf('Version')) !== -1) {
                fullVersion = nAgt.substring(verOffset + 8);
            }
        }
        // Firefox
        else if ((verOffset=nAgt.indexOf('Firefox')) !== -1) {
            name = 'Firefox';
            fullVersion = nAgt.substring(verOffset + 8);
        }
        // In most other browsers, 'name/version' is at the end of userAgent 
        else if ((nameOffset=nAgt.lastIndexOf(' ') + 1) < (verOffset=nAgt.lastIndexOf('/'))) {
            name = nAgt.substring(nameOffset,verOffset);
            fullVersion = nAgt.substring(verOffset + 1);

            if (name.toLowerCase() == name.toUpperCase()) {
                name = navigator.appName;
            }
        }
        // Trim the fullVersion string at semicolon/space if present
        if ((ix = fullVersion.indexOf(';')) !== -1) {
            fullVersion = fullVersion.substring(0, ix);
        }
        if ((ix = fullVersion.indexOf(' ')) !== -1) {
            fullVersion = fullVersion.substring(0, ix);
        }
        // Get major version
        majorVersion = parseInt('' + fullVersion, 10);
        if (isNaN(majorVersion)) {
            fullVersion = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        // Return data
        return {
            name:       name,
            version:    majorVersion,
            ios:        /(iPad|iPhone|iPod)/g.test(navigator.platform)
        };
    }

    // Check for mime type support against a player instance
    // Credits: http://diveintohtml5.info/everything.html 
    // Related: http://www.leanbackplayer.com/test/h5mt.html
    function _supportMime(player, mimeType) {
        var media = player.media;

        // Only check video types for video players
        if (player.type == 'video') {
            // Check type
            switch (mimeType) {
                case 'video/webm':   return !!(media.canPlayType && media.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ''));
                case 'video/mp4':    return !!(media.canPlayType && media.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ''));
                case 'video/ogg':    return !!(media.canPlayType && media.canPlayType('video/ogg; codecs="theora"').replace(/no/, ''));
            }
        }

        // Only check audio types for audio players
        else if (player.type == 'audio') {
            // Check type
            switch (mimeType) {
                case 'audio/mpeg':   return !!(media.canPlayType && media.canPlayType('audio/mpeg;').replace(/no/, ''));
                case 'audio/ogg':    return !!(media.canPlayType && media.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));
                case 'audio/wav':    return !!(media.canPlayType && media.canPlayType('audio/wav; codecs="1"').replace(/no/, ''));
            }
        }        

        // If we got this far, we're stuffed
        return false;
    }

    // Inject a script
    function _injectScript(source) {
        if (document.querySelectorAll('script[src="' + source + '"]').length) {
            return;
        }

        var tag = document.createElement('script');
        tag.src = source;
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Element exists in an array
    function _inArray(haystack, needle) {
        return Array.prototype.indexOf && (haystack.indexOf(needle) != -1);
    }
    
    // Replace all
    function _replaceAll(string, find, replace) {
        return string.replace(new RegExp(find.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'), replace);
    }

    // Wrap an element
    function _wrap(elements, wrapper) {
        // Convert `elements` to an array, if necessary.
        if (!elements.length) {
            elements = [elements];
        } 
        
        // Loops backwards to prevent having to clone the wrapper on the
        // first element (see `child` below).
        for (var i = elements.length - 1; i >= 0; i--) {
            var child   = (i > 0) ? wrapper.cloneNode(true) : wrapper;
            var element = elements[i];
            
            // Cache the current parent and sibling.
            var parent  = element.parentNode;
            var sibling = element.nextSibling;
            
            // Wrap the element (is automatically removed from its current
            // parent).
            child.appendChild(element);
            
            // If the element had a sibling, insert the wrapper before
            // the sibling to maintain the HTML structure; otherwise, just
            // append it to the parent.
            if (sibling) {
                parent.insertBefore(child, sibling);
            } 
            else {
                parent.appendChild(child);
            }
        }
    }

    // Unwrap an element
    // http://plainjs.com/javascript/manipulation/unwrap-a-dom-element-35/
    function _unwrap(wrapper) {
        // Get the element's parent node
        var parent = wrapper.parentNode;

        // Move all children out of the element
        while (wrapper.firstChild) {
            parent.insertBefore(wrapper.firstChild, wrapper);
        }

        // Remove the empty element
        parent.removeChild(wrapper);
    }

    // Remove an element
    function _remove(element) {
        element.parentNode.removeChild(element);
    }

    // Prepend child
    function _prependChild(parent, element) {
        parent.insertBefore(element, parent.firstChild);
    }

    // Set attributes
    function _setAttributes(element, attributes) {
        for (var key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }

    // Toggle class on an element
    function _toggleClass(element, name, state) {
        if (element) {
            if (element.classList) {
                element.classList[state ? 'add' : 'remove'](name);
            }
            else {
                var className = (' ' + element.className + ' ').replace(/\s+/g, ' ').replace(' ' + name + ' ', '');
                element.className = className + (state ? ' ' + name : '');
            }
        }
    }

    // Toggle event
    function _toggleHandler(element, events, callback, toggle) {
        var eventList = events.split(' ');

        // If a nodelist is passed, call itself on each node
        if (element instanceof NodeList) {
            for (var x = 0; x < element.length; x++) {
                if (element[x] instanceof Node) {
                    _toggleHandler(element[x], arguments[1], arguments[2], arguments[3]);
                }
            }
            return;
        }

        // If a single node is passed, bind the event listener
        for (var i = 0; i < eventList.length; i++) {
            element[toggle ? 'addEventListener' : 'removeEventListener'](eventList[i], callback, false);
        }
    }

    // Bind event
    function _on(element, events, callback) {
        if (element) {
            _toggleHandler(element, events, callback, true);
        }
    }

    // Unbind event
    function _off(element, events, callback) {
        if (element) {
            _toggleHandler(element, events, callback, false);
        }
    }

    // Trigger event
    function _triggerEvent(element, event) {
        // Create faux event
        var fauxEvent = document.createEvent('MouseEvents');

        // Set the event type
        fauxEvent.initEvent(event, true, true);

        // Dispatch the event
        element.dispatchEvent(fauxEvent);
    }

    // Toggle aria-pressed state on a toggle button
    function _toggleState(target, state) {
        // Get state
        state = (typeof state === 'boolean' ? state : !target.getAttribute('aria-pressed'));
        
        // Set the attribute on target
        target.setAttribute('aria-pressed', state);
        
        return state;
    }

    // Get percentage
    function _getPercentage(current, max) {
        if (current === 0 || max === 0 || isNaN(current) || isNaN(max)) {
            return 0;
        }
        return ((current / max) * 100).toFixed(2);
    }

    // Deep extend/merge two Objects
    // http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
    // Removed call to arguments.callee (used explicit function name instead)
    function _extend(destination, source) {
        for (var property in source) {
            if (source[property] && source[property].constructor && source[property].constructor === Object) {
                destination[property] = destination[property] || {};
                _extend(destination[property], source[property]);
            } 
            else {
                destination[property] = source[property];
            }
        }
        return destination;
    }

    // Fullscreen API
    function _fullscreen() {
        var fullscreen = {
                supportsFullScreen: false,
                isFullScreen: function() { return false; },
                requestFullScreen: function() {},
                cancelFullScreen: function() {},
                fullScreenEventName: '',
                element: null,
                prefix: ''
            },
            browserPrefixes = 'webkit moz o ms khtml'.split(' ');

        // Check for native support
        if (typeof document.cancelFullScreen !== 'undefined') {
            fullscreen.supportsFullScreen = true;
        }
        else {
            // Check for fullscreen support by vendor prefix
            for (var i = 0, il = browserPrefixes.length; i < il; i++ ) {
                fullscreen.prefix = browserPrefixes[i];

                if (typeof document[fullscreen.prefix + 'CancelFullScreen'] !== 'undefined') {
                    fullscreen.supportsFullScreen = true;
                    break;
                }
                // Special case for MS (when isn't it?)
                else if (typeof document.msExitFullscreen !== 'undefined' && document.msFullscreenEnabled) {
                    fullscreen.prefix = 'ms';
                    fullscreen.supportsFullScreen = true;
                    break;
                }
            }
        }

        // Update methods to do something useful
        if (fullscreen.supportsFullScreen) {
            // Yet again Microsoft awesomeness,
            // Sometimes the prefix is 'ms', sometimes 'MS' to keep you on your toes
            fullscreen.fullScreenEventName = (fullscreen.prefix == 'ms' ? 'MSFullscreenChange' : fullscreen.prefix + 'fullscreenchange');

            fullscreen.isFullScreen = function(element) {
                if (typeof element === 'undefined') {
                    element = document.body;
                }
                switch (this.prefix) {
                    case '':
                        return document.fullscreenElement == element;
                    case 'moz':
                        return document.mozFullScreenElement == element;
                    default:
                        return document[this.prefix + 'FullscreenElement'] == element;
                }
            };
            fullscreen.requestFullScreen = function(element) {
                if (typeof element === 'undefined') {
                    element = document.body;
                }
                return (this.prefix === '') ? element.requestFullScreen() : element[this.prefix + (this.prefix == 'ms' ? 'RequestFullscreen' : 'RequestFullScreen')]();
            };
            fullscreen.cancelFullScreen = function() {
                return (this.prefix === '') ? document.cancelFullScreen() : document[this.prefix + (this.prefix == 'ms' ? 'ExitFullscreen' : 'CancelFullScreen')]();
            };
            fullscreen.element = function() {
                return (this.prefix === '') ? document.fullscreenElement : document[this.prefix + 'FullscreenElement'];
            };
        }

        return fullscreen;
    }

    // Local storage
    function _storage() {
        var storage = {
            supported: (function() {
                try {
                    return 'localStorage' in window && window.localStorage !== null;
                } 
                catch(e) {
                    return false;
                }
            })()
        };
        return storage;
    }

    // Player instance
    function Plyr(container) {
        var player = this;
        player.container = container;

        // Captions functions
        // Seek the manual caption time and update UI
        function _seekManualCaptions(time) {
            // If it's not video, or we're using textTracks, bail.
            if (player.usingTextTracks || player.type !== 'video' || !player.supported.full) {
                return;
            }

            // Reset subcount
            player.subcount = 0;

            // Check time is a number, if not use currentTime
            // IE has a bug where currentTime doesn't go to 0
            // https://twitter.com/Sam_Potts/status/573715746506731521
            time = typeof time === 'number' ? time : player.media.currentTime;

            while (_timecodeMax(player.captions[player.subcount][0]) < time.toFixed(1)) {
                player.subcount++;
                if (player.subcount > player.captions.length-1) {
                    player.subcount = player.captions.length-1;
                    break;
                }
            }

            // Check if the next caption is in the current time range
            if (player.media.currentTime.toFixed(1) >= _timecodeMin(player.captions[player.subcount][0]) && 
                player.media.currentTime.toFixed(1) <= _timecodeMax(player.captions[player.subcount][0])) {
                    player.currentCaption = player.captions[player.subcount][1];

                // Trim caption text
                var content = player.currentCaption.trim();

                // Render the caption (only if changed)
                if (player.captionsContainer.innerHTML != content) {
                    // Empty caption
                    // Otherwise NVDA reads it twice
                    player.captionsContainer.innerHTML = '';

                    // Set new caption text
                    player.captionsContainer.innerHTML = content;
                }
            }
            else {
                player.captionsContainer.innerHTML = '';
            }
        }

        // Display captions container and button (for initialization)
        function _showCaptions() {
            // If there's no caption toggle, bail
            if (!player.buttons.captions) {
                return;
            }

            _toggleClass(player.container, config.classes.captions.enabled, true);

            if (config.captions.defaultActive) {
                _toggleClass(player.container, config.classes.captions.active, true);
                _toggleState(player.buttons.captions, true);
            }
        }

        // Utilities for caption time codes
        function _timecodeMin(tc) {
            var tcpair = [];
            tcpair = tc.split(' --> ');
            return _subTcSecs(tcpair[0]);
        }
        function _timecodeMax(tc) {
            var tcpair = [];
            tcpair = tc.split(' --> ');
            return _subTcSecs(tcpair[1]);
        }
        function _subTcSecs(tc) {
            if (tc === null || tc === undefined) {
                return 0;
            }
            else {
                var tc1 = [],
                    tc2 = [],
                    seconds;
                tc1 = tc.split(',');
                tc2 = tc1[0].split(':');
                seconds = Math.floor(tc2[0]*60*60) + Math.floor(tc2[1]*60) + Math.floor(tc2[2]);
                return seconds;
            }
        }

        // Find all elements
        function _getElements(selector) {
            return player.container.querySelectorAll(selector);
        }

        // Find a single element
        function _getElement(selector) {
            return _getElements(selector)[0];
        }

        // Determine if we're in an iframe
        function _inFrame() {
            try {
                return window.self !== window.top;
            } 
            catch (e) {
                return true;
            }
        }

        // Insert controls
        function _injectControls() {
            // Make a copy of the html
            var html = config.html;

            // Insert custom video controls
            _log('Injecting custom controls.');

            // If no controls are specified, create default
            if (!html) {
                html = _buildControls();
            }

            // Replace seek time instances
            html = _replaceAll(html, '{seektime}', config.seekTime);

            // Replace all id references with random numbers
            html = _replaceAll(html, '{id}', Math.floor(Math.random() * (10000)));

            // Inject into the container
            player.container.insertAdjacentHTML('beforeend', html);

            // Setup tooltips
            if (config.tooltips) {
                var labels = _getElements(config.selectors.labels);

                for (var i = labels.length - 1; i >= 0; i--) {
                    var label = labels[i];

                    _toggleClass(label, config.classes.hidden, false);
                    _toggleClass(label, config.classes.tooltip, true);
                }
            }
        }

        // Find the UI controls and store references
        function _findElements() {
            try {
                player.controls                 = _getElement(config.selectors.controls);

                // Buttons
                player.buttons = {};
                player.buttons.seek             = _getElement(config.selectors.buttons.seek);
                player.buttons.play             = _getElement(config.selectors.buttons.play);
                player.buttons.pause            = _getElement(config.selectors.buttons.pause);
                player.buttons.restart          = _getElement(config.selectors.buttons.restart);
                player.buttons.rewind           = _getElement(config.selectors.buttons.rewind);
                player.buttons.forward          = _getElement(config.selectors.buttons.forward);
                player.buttons.fullscreen       = _getElement(config.selectors.buttons.fullscreen);

                // Inputs
                player.buttons.mute             = _getElement(config.selectors.buttons.mute);
                player.buttons.captions         = _getElement(config.selectors.buttons.captions);
                player.checkboxes               = _getElements('[type="checkbox"]');

                // Progress
                player.progress = {};
                player.progress.container       = _getElement(config.selectors.progress.container);

                // Progress - Buffering
                player.progress.buffer          = {};
                player.progress.buffer.bar      = _getElement(config.selectors.progress.buffer);
                player.progress.buffer.text     = player.progress.buffer.bar && player.progress.buffer.bar.getElementsByTagName('span')[0];

                // Progress - Played
                player.progress.played          = {};
                player.progress.played.bar      = _getElement(config.selectors.progress.played);
                player.progress.played.text     = player.progress.played.bar && player.progress.played.bar.getElementsByTagName('span')[0];

                // Volume
                player.volume                   = _getElement(config.selectors.buttons.volume);

                // Timing
                player.duration                 = _getElement(config.selectors.duration);
                player.currentTime              = _getElement(config.selectors.currentTime);
                player.seekTime                 = _getElements(config.selectors.seekTime);

                return true;
            }
            catch(e) {
                _log('It looks like there\'s a problem with your controls html. Bailing.', true);

                // Restore native video controls
                player.media.setAttribute('controls', '');

                return false;
            }
        }

        // Setup aria attribute for play
        function _setupPlayAria() {
            // If there's no play button, bail
            if (!player.buttons.play) {
                return;
            }

            // Find the current text
            var label = player.buttons.play.innerText || config.i18n.play;

            // If there's a media title set, use that for the label
            if (typeof(config.title) !== 'undefined' && config.title.length) {
                label += ', ' + config.title;
            }

            player.buttons.play.setAttribute('aria-label', label);
        }

        // Setup media
        function _setupMedia() {
            // If there's no media, bail
            if (!player.media) {
                _log('No audio or video element found!', true);
                return false;
            }

            if (player.supported.full) {
                // Remove native video controls
                player.media.removeAttribute('controls');
        
                // Add type class
                _toggleClass(player.container, config.classes.type.replace('{0}', player.type), true);

                // If there's no autoplay attribute, assume the video is stopped and add state class
                _toggleClass(player.container, config.classes.stopped, (player.media.getAttribute('autoplay') === null));
            
                // Add iOS class
                if (player.browser.ios) {
                    _toggleClass(player.container, 'ios', true);
                }

                // Inject the player wrapper
                if (player.type === 'video') {
                    // Create the wrapper div
                    var wrapper = document.createElement('div');
                    wrapper.setAttribute('class', config.classes.videoWrapper);

                    // Wrap the video in a container
                    _wrap(player.media, wrapper);

                    // Cache the container
                    player.videoContainer = wrapper;
                }
            }

            // YouTube
            if (player.type == 'youtube') {
                _setupYouTube(player.media.getAttribute('data-video-id'));
            }

            // Autoplay
            if (player.media.getAttribute('autoplay') !== null) {
                _play();
            }
        }

        // Setup YouTube
        function _setupYouTube(id) {
            // Remove old containers
            var containers = _getElements('[id^="youtube"]');
            for (var i = containers.length - 1; i >= 0; i--) {
                _remove(containers[i]);
            }

            // Create the YouTube container
            var container = document.createElement('div');
            container.setAttribute('id', 'youtube-' + Math.floor(Math.random() * (10000)));
            player.media.appendChild(container);

            // Add embed class for responsive
            _toggleClass(player.media, config.classes.videoWrapper, true);
            _toggleClass(player.media, config.classes.embedWrapper, true);

            if (typeof YT === 'object') {
                _YTReady(id, container);
            }
            else {
                // Load the API
                _injectScript('https://www.youtube.com/iframe_api');

                // Add callback to queue
                callbacks.youtube.push(function() { _YTReady(id, container); });

                // Setup callback for the API
                window.onYouTubeIframeAPIReady = function () { 
                    for (var i = callbacks.youtube.length - 1; i >= 0; i--) {
                        // Fire callback
                        callbacks.youtube[i]();

                        // Remove from queue
                        callbacks.youtube.splice(i, 1);
                    }
                };
            }
        }

        // Handle API ready
        function _YTReady(id, container) {
            _log('YouTube API Ready');

            // Setup timers object
            // We have to poll YouTube for updates
            if (!('timer' in player)) {
                player.timer = {};
            }

            // Setup instance
            // https://developers.google.com/youtube/iframe_api_reference
            player.embed = new YT.Player(container.id, {
                videoId: id,
                playerVars: {
                    autoplay: 0,
                    controls: (player.supported.full ? 0 : 1),
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                    cc_load_policy: (config.captions.defaultActive ? 1 : 0),
                    cc_lang_pref: 'en',
                    wmode: 'transparent',
                    modestbranding: 1,
                    disablekb: 1
                },
                events: {
                    'onReady': function(event) {
                        // Get the instance
                        var instance = event.target;

                        // Create a faux HTML5 API using the YouTube API
                        player.media.play = function() { instance.playVideo(); };
                        player.media.pause = function() { instance.pauseVideo(); };
                        player.media.stop = function() { instance.stopVideo(); };
                        player.media.duration = instance.getDuration();
                        player.media.paused = true;
                        player.media.currentTime = instance.getCurrentTime();
                        player.media.muted = instance.isMuted();

                        // Trigger timeupdate
                        _triggerEvent(player.media, 'timeupdate');

                        // Reset timer
                        window.clearInterval(player.timer.buffering);

                        // Setup buffering
                        player.timer.buffering = window.setInterval(function() {
                            // Get loaded % from YouTube
                            player.media.buffered = instance.getVideoLoadedFraction();
                            
                            // Trigger progress
                            _triggerEvent(player.media, 'progress');

                            // Bail if we're at 100%
                            if (player.media.buffered === 1) {
                                window.clearInterval(player.timer.buffering);
                            }
                        }, 200);

                        if (player.supported.full) {
                            // Only setup controls once
                            if (!player.container.querySelectorAll(config.selectors.controls).length) {
                                _setupInterface();
                            }

                            // Display duration if available
                            if (config.displayDuration) {
                                _displayDuration();
                            }
                        }
                    },
                    'onStateChange': function(event) {
                        // Get the instance
                        var instance = event.target;

                        // Reset timer
                        window.clearInterval(player.timer.playing);

                        // Handle events
                        // -1   Unstarted
                        // 0    Ended
                        // 1    Playing
                        // 2    Paused
                        // 3    Buffering
                        // 5    Video cued    
                        switch (event.data) {
                            case 0: 
                                player.media.paused = true;
                                _triggerEvent(player.media, 'ended');
                                break;

                            case 1:
                                player.media.paused = false;
                                _triggerEvent(player.media, 'play');

                                // Poll to get playback progress
                                player.timer.playing = window.setInterval(function() {
                                    // Set the current time
                                    player.media.currentTime = instance.getCurrentTime();

                                    // Trigger timeupdate
                                    _triggerEvent(player.media, 'timeupdate');
                                }, 200);

                                break;

                            case 2:
                                player.media.paused = true;
                                _triggerEvent(player.media, 'pause');
                        }
                    }
                }
            });
        }

        // Setup captions
        function _setupCaptions() {
            if (player.type === 'video') {
                // Inject the container
                player.videoContainer.insertAdjacentHTML('afterbegin', '<div class="' + config.selectors.captions.replace('.', '') + '"><span></span></div>');

                // Cache selector
                player.captionsContainer = _getElement(config.selectors.captions).querySelector('span');

                // Determine if HTML5 textTracks is supported
                player.usingTextTracks = false;
                if (player.media.textTracks) {
                    player.usingTextTracks = true;
                }

                // Get URL of caption file if exists
                var captionSrc = '',
                    kind,
                    children = player.media.childNodes;

                for (var i = 0; i < children.length; i++) {
                    if (children[i].nodeName.toLowerCase() === 'track') {
                        kind = children[i].kind;
                        if (kind === 'captions' || kind === 'subtitles') {
                            captionSrc = children[i].getAttribute('src');
                        }
                    }
                }

                // Record if caption file exists or not
                player.captionExists = true;
                if (captionSrc === '') {
                    player.captionExists = false;
                    _log('No caption track found.');
                }
                else {
                    _log('Caption track found; URI: ' + captionSrc);
                }

                // If no caption file exists, hide container for caption text
                if (!player.captionExists) {
                    _toggleClass(player.container, config.classes.captions.enabled);
                }
                // If caption file exists, process captions
                else {
                    // Turn off native caption rendering to avoid double captions 
                    // This doesn't seem to work in Safari 7+, so the <track> elements are removed from the dom below
                    var tracks = player.media.textTracks;
                    for (var x = 0; x < tracks.length; x++) {
                        tracks[x].mode = 'hidden';
                    }

                    // Enable UI
                    _showCaptions(player);

                    // Disable unsupported browsers than report false positive
                    if ((player.browser.name === 'IE' && player.browser.version >= 10) || 
                        (player.browser.name === 'Firefox' && player.browser.version >= 31) || 
                        (player.browser.name === 'Chrome' && player.browser.version >= 43) || 
                        (player.browser.name === 'Safari' && player.browser.version >= 7)) {
                        // Debugging
                        _log('Detected unsupported browser for HTML5 captions. Using fallback.');

                        // Set to false so skips to 'manual' captioning
                        player.usingTextTracks = false;
                    }

                    // Rendering caption tracks
                    // Native support required - http://caniuse.com/webvtt
                    if (player.usingTextTracks) {
                        _log('TextTracks supported.');
            
                        for (var y = 0; y < tracks.length; y++) {
                            var track = tracks[y];

                            if (track.kind === 'captions' || track.kind === 'subtitles') {
                                _on(track, 'cuechange', function() {
                                    // Clear container
                                    player.captionsContainer.innerHTML = '';

                                    // Display a cue, if there is one
                                    if (this.activeCues[0] && this.activeCues[0].hasOwnProperty('text')) {
                                        player.captionsContainer.appendChild(this.activeCues[0].getCueAsHTML().trim());
                                    }
                                });
                            }
                        }
                    }
                    // Caption tracks not natively supported
                    else {
                        _log('TextTracks not supported so rendering captions manually.');

                        // Render captions from array at appropriate time
                        player.currentCaption = '';
                        player.captions = [];

                        if (captionSrc !== '') {
                            // Create XMLHttpRequest Object
                            var xhr = new XMLHttpRequest();

                            xhr.onreadystatechange = function() {
                                if (xhr.readyState === 4) {
                                    if (xhr.status === 200) {
                                        var records = [],
                                            record,
                                            req = xhr.responseText;

                                        records = req.split('\n\n');

                                        for (var r = 0; r < records.length; r++) {
                                            record = records[r];
                                            player.captions[r] = [];
                                            player.captions[r] = record.split('\n');
                                        }

                                        // Remove first element ('VTT')
                                        player.captions.shift();

                                        _log('Successfully loaded the caption file via AJAX.');
                                    } 
                                    else {
                                        _log('There was a problem loading the caption file via AJAX.', true);
                                    }
                                }
                            };
                            
                            xhr.open('get', captionSrc, true);

                            xhr.send();
                        }
                    }

                    // If Safari 7+, removing track from DOM [see 'turn off native caption rendering' above]
                    if (player.browser.name === 'Safari' && player.browser.version >= 7) {
                        _log('Safari 7+ detected; removing track from DOM.');

                        // Find all <track> elements
                        tracks = player.media.getElementsByTagName('track');
                        
                        // Loop through and remove one by one
                        for (var t = 0; t < tracks.length; t++) {
                            player.media.removeChild(tracks[t]);
                        }
                    }
                }
            }
        }

        // Setup fullscreen
        function _setupFullscreen() {
            if (player.type != 'audio' && config.fullscreen.enabled) {
                // Check for native support
                var nativeSupport = fullscreen.supportsFullScreen;

                if (nativeSupport || (config.fullscreen.fallback && !_inFrame())) {
                    _log((nativeSupport ? 'Native' : 'Fallback') + ' fullscreen enabled.');

                    // Add styling hook
                    _toggleClass(player.container, config.classes.fullscreen.enabled, true);
                }
                else {
                    _log('Fullscreen not supported and fallback disabled.');
                }

                // Toggle state
                _toggleState(player.buttons.fullscreen, false);

                // Set control hide class hook
                if (config.fullscreen.hideControls) {
                    _toggleClass(player.container, config.classes.fullscreen.hideControls, true);
                }
            }   
        }

        // Play media
        function _play() {
            player.media.play();
        }

        // Pause media
        function _pause() {
            player.media.pause();
        }

        // Toggle playback
        function _togglePlay(toggle) {
            // Play
            if (toggle === true) {
                _play();
            }
            // Pause
            else if (toggle === false) {
                _pause();
            }
            // True toggle
            else {
                player.media[player.media.paused ? 'play' : 'pause']();
            }
        }

        // Rewind
        function _rewind(seekTime) {
            // Use default if needed
            if (typeof seekTime !== 'number') {
                seekTime = config.seekTime;
            }
            _seek(player.media.currentTime - seekTime);
        }

        // Fast forward
        function _forward(seekTime) {
            // Use default if needed
            if (typeof seekTime !== 'number') {
                seekTime = config.seekTime;
            }
            _seek(player.media.currentTime + seekTime);
        }

        // Seek to time
        // The input parameter can be an event or a number
        function _seek(input) {
            var targetTime = 0,
                paused = player.media.paused;

            // Explicit position
            if (typeof input === 'number') {
                targetTime = input;
            }
            // Event
            else if (typeof input === 'object' && (input.type === 'input' || input.type === 'change')) {
                // It's the seek slider
                // Seek to the selected time
                targetTime = ((input.target.value / input.target.max) * player.media.duration);
            }

            // Normalise targetTime
            if (targetTime < 0) {
                targetTime = 0;
            }
            else if (targetTime > player.media.duration) {
                targetTime = player.media.duration;
            }

            // Set the current time
            // Try/catch incase the media isn't set and we're calling seek() from source() and IE moans
            try {
                player.media.currentTime = targetTime.toFixed(1);
            }
            catch(e) {}

            // YouTube
            if (player.type == 'youtube') {
                player.embed.seekTo(targetTime);

                if (paused) {
                    _pause();
                }

                // Trigger timeupdate
                _triggerEvent(player.media, 'timeupdate');
            }

            // Logging
            _log('Seeking to ' + player.media.currentTime + ' seconds');

            // Special handling for 'manual' captions
            _seekManualCaptions(targetTime);
        }

        // Check playing state
        function _checkPlaying() {
            _toggleClass(player.container, config.classes.playing, !player.media.paused);
            _toggleClass(player.container, config.classes.stopped, player.media.paused);
        }

        // Toggle fullscreen
        function _toggleFullscreen(event) {
            // Check for native support
            var nativeSupport = fullscreen.supportsFullScreen;

            // If it's a fullscreen change event, it's probably a native close
            if (event && event.type === fullscreen.fullScreenEventName) {
                player.isFullscreen = fullscreen.isFullScreen(player.container);
            }
            // If there's native support, use it
            else if (nativeSupport) {
                // Request fullscreen
                if (!fullscreen.isFullScreen(player.container)) {
                    fullscreen.requestFullScreen(player.container);
                }
                // Bail from fullscreen
                else {
                    fullscreen.cancelFullScreen();
                }

                // Check if we're actually full screen (it could fail)
                player.isFullscreen = fullscreen.isFullScreen(player.container);
            }
            else {
                // Otherwise, it's a simple toggle
                player.isFullscreen = !player.isFullscreen;

                // Bind/unbind escape key
                if (player.isFullscreen) {
                    _on(document, 'keyup', _handleEscapeFullscreen);
                    document.body.style.overflow = 'hidden';
                }
                else {
                    _off(document, 'keyup', _handleEscapeFullscreen);
                    document.body.style.overflow = '';
                }
            }

            // Set class hook
            _toggleClass(player.container, config.classes.fullscreen.active, player.isFullscreen);

            // Set button state
            _toggleState(player.buttons.fullscreen, player.isFullscreen);
            
            // Toggle controls visibility based on mouse movement and location
            var hoverTimer, isMouseOver = false;

            // Show the player controls
            function _showControls() {
                // Set shown class
                _toggleClass(player.container, config.classes.hover, true);

                // Clear timer every movement
                window.clearTimeout(hoverTimer);

                // If the mouse is not over the controls, set a timeout to hide them
                if (!isMouseOver) {
                    hoverTimer = window.setTimeout(function() {
                        _toggleClass(player.container, config.classes.hover, false);
                    }, 2000);
                }
            }

            // Check mouse is over the controls
            function _setMouseOver (event) {
                isMouseOver = (event.type === 'mouseenter');
            }

            if (config.fullscreen.hideControls) {
                // Hide on entering full screen
                _toggleClass(player.controls, config.classes.hover, false);

                // Keep an eye on the mouse location in relation to controls
                _toggleHandler(player.controls, 'mouseenter mouseleave', _setMouseOver, player.isFullscreen);

                // Show the controls on mouse move
                _toggleHandler(player.container, 'mousemove', _showControls, player.isFullscreen);
            }
        }

        // Bail from faux-fullscreen 
        function _handleEscapeFullscreen(event) {
            // If it's a keypress and not escape, bail
            if ((event.which || event.charCode || event.keyCode) === 27 && player.isFullscreen) {
                _toggleFullscreen();
            }
        }

        // Set volume
        function _setVolume(volume) {
            // Use default if no value specified
            if (typeof volume === 'undefined') {
                if (config.storage.enabled && _storage().supported) {
                    volume = window.localStorage[config.storage.key] || config.volume;
                }
                else {
                    volume = config.volume;
                }                
            }

            // Maximum is 10
            if (volume > 10) {
                volume = 10;
            }
            // Minimum is 0
            if (volume < 0) {
                volume = 0;
            }

            // Set the player volume
            player.media.volume = parseFloat(volume / 10);

            // YouTube
            if (player.type == 'youtube') {
                player.embed.setVolume(player.media.volume * 100);

                // Trigger timeupdate
                _triggerEvent(player.media, 'volumechange');
            }

            // Toggle muted state
            if (player.media.muted && volume > 0) {
                _toggleMute();
            } 
        }

        // Mute
        function _toggleMute(muted) {
            // If the method is called without parameter, toggle based on current value
            if (typeof muted !== 'boolean') {
                muted = !player.media.muted;
            }

            // Set button state
            _toggleState(player.buttons.mute, muted);

            // Set mute on the player
            player.media.muted = muted;

            // YouTube
            if (player.type === 'youtube') {
                player.embed[player.media.muted ? 'mute' : 'unMute']();

                // Trigger timeupdate
                _triggerEvent(player.media, 'volumechange');
            }
        }

        // Update volume UI and storage
        function _updateVolume() {
            // Get the current volume
            var volume = player.media.muted ? 0 : (player.media.volume * 10);

            // Update the <input type="range"> if present
            if (player.supported.full && player.volume) {
                player.volume.value = volume;
            }

            // Store the volume in storage
            if (config.storage.enabled && _storage().supported) {
                window.localStorage.setItem(config.storage.key, volume);
            }

            // Toggle class if muted
            _toggleClass(player.container, config.classes.muted, (volume === 0));
            
            // Update checkbox for mute state
            if (player.supported.full && player.buttons.mute) {
                _toggleState(player.buttons.mute, (volume === 0));
            }
        }

        // Toggle captions
        function _toggleCaptions(show) {
            // If there's no full support, or there's no caption toggle
            if (!player.supported.full || !player.buttons.captions) {
                return;
            }

            // If the method is called without parameter, toggle based on current value
            if (typeof show !== 'boolean') {
                show = (player.container.className.indexOf(config.classes.captions.active) === -1);
            }

            // Toggle state
            _toggleState(player.buttons.captions, show);

            // Add class hook
            _toggleClass(player.container, config.classes.captions.active, show);
        }

        // Check if media is loading
        function _checkLoading(event) {
            var loading = (event.type === 'waiting');

            // Clear timer
            clearTimeout(player.loadingTimer);

            // Timer to prevent flicker when seeking
            player.loadingTimer = setTimeout(function() {
                _toggleClass(player.container, config.classes.loading, loading);
            }, (loading ? 250 : 0));
        }

        // Update <progress> elements
        function _updateProgress(event) {
            var progress    = player.progress.played.bar,
                text        = player.progress.played.text,
                value       = 0;

            if (event) {
                switch (event.type) {
                    // Video playing
                    case 'timeupdate':
                    case 'seeking':
                        value = _getPercentage(player.media.currentTime, player.media.duration);

                        // Set seek range value only if it's a 'natural' time event
                        if (event.type == 'timeupdate' && player.buttons.seek) {
                            player.buttons.seek.value = value;
                        }
            
                        break;

                    // Events from seek range
                    case 'change':
                    case 'input':
                        value = event.target.value;
                        break;


                    // Check buffer status
                    case 'playing':
                    case 'progress':
                        progress    = player.progress.buffer.bar;
                        text        = player.progress.buffer.text;
                        value       = (function() {
                                        var buffered = player.media.buffered;

                                        // HTML5
                                        if (buffered && buffered.length) {
                                            return _getPercentage(buffered.end(0), player.media.duration);
                                        }
                                        // YouTube returns between 0 and 1
                                        else if (typeof buffered === 'number') {
                                            return (buffered * 100);
                                        }

                                        return 0;
                                    })();
                }
            }

            // Set values
            if (progress) {
                progress.value = value;
            }
            if (text) {
                text.innerHTML = value;
            }
        }

        // Update the displayed time
        function _updateTimeDisplay(time, element) {
            // Bail if there's no duration display
            if (!element) {
                return;
            }

            player.secs = parseInt(time % 60);
            player.mins = parseInt((time / 60) % 60);
            player.hours = parseInt(((time / 60) / 60) % 60);

            // Do we need to display hours?
            var displayHours = (parseInt(((player.media.duration / 60) / 60) % 60) > 0);
            
            // Ensure it's two digits. For example, 03 rather than 3.
            player.secs = ('0' + player.secs).slice(-2);
            player.mins = ('0' + player.mins).slice(-2);

            // Render
            element.innerHTML = (displayHours ? player.hours + ':' : '') + player.mins + ':' + player.secs;
        }

        // Show the duration on metadataloaded
        function _displayDuration() {
            var duration = player.media.duration || 0;

            // If there's only one time display, display duration there
            if (!player.duration && config.displayDuration && player.media.paused) {
                _updateTimeDisplay(duration, player.currentTime);
            }

            // If there's a duration element, update content
            if (player.duration) {
                _updateTimeDisplay(duration, player.duration);
            }
        }

        // Handle time change event
        function _timeUpdate(event) {
            // Duration
            _updateTimeDisplay(player.media.currentTime, player.currentTime);

            // Playing progress
            _updateProgress(event);
        }

        // Remove <source> children and src attribute
        function _removeSources() {
            // Find child <source> elements
            var sources = player.media.querySelectorAll('source');

            // Remove each
            for (var i = sources.length - 1; i >= 0; i--) {
                _remove(sources[i]);
            }

            // Remove src attribute
            player.media.removeAttribute('src');
        }

        // Inject a source
        function _addSource(attributes) {
            if (attributes.src) {
                // Create a new <source>
                var element = document.createElement('source');

                // Set all passed attributes
                _setAttributes(element, attributes);

                // Inject the new source
                _prependChild(player.media, element);
            }
        }

        // Update source
        // Sources are not checked for support so be careful
        function _parseSource(sources) {
            // YouTube
            if (player.type === 'youtube' && typeof sources === 'string') {
                // Destroy YouTube instance
                player.embed.destroy();

                // Re-setup YouTube
                // We don't use loadVideoBy[x] here since it has issues
                _setupYouTube(sources);

                // Update times
                _timeUpdate();

                // Bail
                return;
            }

            // Pause playback (webkit freaks out)
            _pause();

            // Restart
            _seek();

            // Remove current sources
            _removeSources();

            // If a single source is passed
            // .source('path/to/video.mp4')
            if (typeof sources === 'string') {
                _addSource({ src: sources });
            }

            // An array of source objects
            // Check if a source exists, use that or set the 'src' attribute?
            // .source([{ src: 'path/to/video.mp4', type: 'video/mp4' },{ src: 'path/to/video.webm', type: 'video/webm' }])
            else if (sources.constructor === Array) {
                for (var index in sources) {
                    _addSource(sources[index]);
                }
            }

            if (player.supported.full) {
                // Reset time display
                _timeUpdate();

                // Update the UI
                _checkPlaying();
            }

            // Re-load sources
            player.media.load();

            // Play if autoplay attribute is present
            if (player.media.getAttribute('autoplay') !== null) {
                _play();
            }
        }

        // Update poster
        function _updatePoster(source) {
            if (player.type === 'video') {
                player.media.setAttribute('poster', source);
            }
        }

        // Listen for events
        function _listeners() {
            // IE doesn't support input event, so we fallback to change
            var inputEvent = (player.browser.name == 'IE' ? 'change' : 'input');

            // Detect tab focus
            function checkFocus() {
                var focused = document.activeElement;
                if (!focused || focused == document.body) {
                    focused = null;
                }
                else if (document.querySelector) {
                    focused = document.querySelector(':focus');
                }
                for (var button in player.buttons) {
                    var element = player.buttons[button];

                    _toggleClass(element, 'tab-focus', (element === focused));
                }
            }
            _on(window, 'keyup', function(event) {
                var code = (event.keyCode ? event.keyCode : event.which);

                if (code == 9) {
                    checkFocus();
                }
            });
            for (var button in player.buttons) {
                var element = player.buttons[button];

                _on(element, 'blur', function() {
                    _toggleClass(element, 'tab-focus', false);
                });
            }

            // Play
            _on(player.buttons.play, 'click', function() {
                _play();
                setTimeout(function() { player.buttons.pause.focus(); }, 100);
            });

            // Pause
            _on(player.buttons.pause, 'click', function() {
                _pause();
                setTimeout(function() { player.buttons.play.focus(); }, 100);
            });

            // Restart
            _on(player.buttons.restart, 'click', _seek);

            // Rewind
            _on(player.buttons.rewind, 'click', _rewind);

            // Fast forward
            _on(player.buttons.forward, 'click', _forward);

            // Seek 
            _on(player.buttons.seek, inputEvent, _seek);

            // Set volume
            _on(player.volume, inputEvent, function() {
                _setVolume(this.value);
            });

            // Mute
            _on(player.buttons.mute, 'click', _toggleMute);

            // Fullscreen
            _on(player.buttons.fullscreen, 'click', _toggleFullscreen);

            // Handle user exiting fullscreen by escaping etc
            if (fullscreen.supportsFullScreen) {
                _on(document, fullscreen.fullScreenEventName, _toggleFullscreen);
            }
            
            // Time change on media
            _on(player.media, 'timeupdate seeking', _timeUpdate);

            // Update manual captions
            _on(player.media, 'timeupdate', _seekManualCaptions);

            // Display duration
            _on(player.media, 'loadedmetadata', _displayDuration);

            // Captions
            _on(player.buttons.captions, 'click', _toggleCaptions);

            // Handle the media finishing
            _on(player.media, 'ended', function() {
                // Clear 
                if (player.type === 'video') {
                    player.captionsContainer.innerHTML = '';
                }

                // Reset UI
                _checkPlaying();
            });

            // Check for buffer progress
            _on(player.media, 'progress playing', _updateProgress);

            // Handle native mute
            _on(player.media, 'volumechange', _updateVolume);

            // Handle native play/pause
            _on(player.media, 'play pause', _checkPlaying);

            // Loading
            _on(player.media, 'waiting canplay seeked', _checkLoading);

            // Click video
            if (player.type === 'video' && config.click) {
                _on(player.videoContainer, 'click', function() {
                    if (player.media.paused) {
                        _triggerEvent(player.buttons.play, 'click');
                    }
                    else if (player.media.ended) {
                        _seek();
                        _triggerEvent(player.buttons.play, 'click');
                    }
                    else {
                        _triggerEvent(player.buttons.pause, 'click');
                    }
                });
            }
        }

        // Destroy an instance
        // Event listeners are removed when elements are removed
        // http://stackoverflow.com/questions/12528049/if-a-dom-element-is-removed-are-its-listeners-also-removed-from-memory
        function _destroy() {
            // Bail if the element is not initialized
            if (!player.init) {
                return null;
            }

            // Reset container classname
            player.container.setAttribute('class', config.selectors.container.replace('.', ''));

            // Remove init flag
            player.init = false;

            // Remove controls
            _remove(_getElement(config.selectors.controls));

            // YouTube
            if (player.type === 'youtube') {
                player.embed.destroy();
                return;
            }

            // If video, we need to remove some more
            if (player.type === 'video') {
                // Remove captions
                _remove(_getElement(config.selectors.captions));

                // Remove video wrapper
                _unwrap(player.videoContainer);
            }

            // Restore native video controls
            player.media.setAttribute('controls', '');

            // Clone the media element to remove listeners
            // http://stackoverflow.com/questions/19469881/javascript-remove-all-event-listeners-of-specific-type
            var clone = player.media.cloneNode(true);
            player.media.parentNode.replaceChild(clone, player.media);
        }

        // Setup a player
        function _init() {
            // Bail if the element is initialized
            if (player.init) {
                return null;
            }

            // Setup the fullscreen api 
            fullscreen = _fullscreen();

            // Sniff out the browser
            player.browser = _browserSniff();

            // Get the media element
            player.media = player.container.querySelectorAll('audio, video, div')[0];

            // Set media type
            var tagName = player.media.tagName.toLowerCase();
            if (tagName === 'div') {
                player.type = player.media.getAttribute('data-type');
            }
            else {
                player.type = tagName;
            }
        
            // Check for full support
            player.supported = api.supported(player.type);

            // If no native support, bail
            if (!player.supported.basic) {
                return false;
            }

            // Debug info
            _log(player.browser.name + ' ' + player.browser.version);

            // Setup media
            _setupMedia();

            // Setup interface
            if (player.type == 'video' || player.type == 'audio') {
                // Bail if no support
                if (!player.supported.full) {
                    // Successful setup
                    player.init = true;

                    // Don't inject controls if no full support
                    return;
                }

                // Setup UI
                _setupInterface();

                // Display duration if available
                if (config.displayDuration) {
                    _displayDuration();
                }

                // Set up aria-label for Play button with the title option
                _setupPlayAria();
            }

            // Successful setup
            player.init = true;
        }

        function _setupInterface() {
            // Inject custom controls
            _injectControls();

            // Find the elements
            if (!_findElements()) {
                return false;
            }

            // Captions
            _setupCaptions();

            // Set volume
            _setVolume();
            _updateVolume();

            // Setup fullscreen
            _setupFullscreen();

            // Listeners
            _listeners();
        }

        // Initialize instance 
        _init();

        // If init failed, return an empty object
        if (!player.init) {
            return {};
        }

        return {
            media:              player.media,
            play:               _play,
            pause:              _pause,
            restart:            _seek,
            rewind:             _rewind,
            forward:            _forward,
            seek:               _seek,
            source:             _parseSource,
            poster:             _updatePoster,
            setVolume:          _setVolume,
            togglePlay:         _togglePlay,
            toggleMute:         _toggleMute,
            toggleCaptions:     _toggleCaptions,
            toggleFullscreen:   _toggleFullscreen,
            isFullscreen:       function() { return player.isFullscreen || false; },
            support:            function(mimeType) { return _supportMime(player, mimeType); },
            destroy:            _destroy,
            restore:            _init
        };
    }

    // Check for support 
    api.supported = function(type) {
        var browser = _browserSniff(),
            oldIE   = (browser.name === 'IE' && browser.version <= 9),
            iPhone  = /iPhone|iPod/i.test(navigator.userAgent),
            audio   = !!document.createElement('audio').canPlayType,
            video   = !!document.createElement('video').canPlayType,
            basic, full;

        switch (type) {
            case 'video': 
                basic = video;
                full  = (basic && (!oldIE && !iPhone));
                break;

            case 'audio': 
                basic = audio;
                full  = (basic && !oldIE);
                break;

            case 'youtube': 
                basic = true;
                full  = (!oldIE && !iPhone);
                break;

            default:
                basic = (audio && video);
                full  = (basic && !oldIE);
        }

        return {
            basic:  basic,
            full:   full
        };
    };

    // Expose setup function
    api.setup = function(options) {
        // Extend the default options with user specified
        config = _extend(defaults, options);

        // Bail if disabled or no basic support
        // You may want to disable certain UAs etc
        if (!config.enabled || !api.supported().basic) {
            return false;
        }

        // Get the players 
        var elements    = document.querySelectorAll(config.selectors.container),
            players     = [];

        // Create a player instance for each element
        for (var i = elements.length - 1; i >= 0; i--) {
            // Get the current element
            var element = elements[i];

            // Setup a player instance and add to the element
            if (typeof element.plyr === 'undefined') {
                // Create new instance
                var instance = new Plyr(element);

                // Set plyr to false if setup failed
                element.plyr = (Object.keys(instance).length ? instance : false);

                // Callback
                if (typeof config.onSetup === 'function') {
                    config.onSetup.apply(element.plyr);
                }
            }

            // Add to return array even if it's already setup
            players.push(element.plyr);
        }

        return players;
    };

}(this.plyr = this.plyr || {}));