(this["webpackJsonpcorona-kirtan"]=this["webpackJsonpcorona-kirtan"]||[]).push([[0],Array(22).concat([function(e,t,a){e.exports=a.p+"static/media/footer_text.3bb693b9.png"},,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/player_buttons.c0e9888b.png"},function(e,t,a){e.exports=a.p+"static/media/player_buttons.c9ae8686.png"},function(e,t,a){e.exports=a.p+"static/media/player.db316bfc.png"},,function(e,t,a){e.exports=a.p+"static/media/left_icons.cd5dd878.png"},function(e,t,a){e.exports=a.p+"static/media/left_icons.c8f1745c.png"},function(e,t,a){e.exports=a.p+"static/media/left_icons.02e02047.png"},function(e,t,a){e.exports=a.p+"static/media/right_icons.5ed952b7.png"},function(e,t,a){e.exports=a.p+"static/media/right_icons.d2138c08.png"},function(e,t,a){e.exports=a.p+"static/media/right_icons.074d97c2.png"},function(e,t,a){e.exports=a.p+"static/media/top_text.9d833f11.png"},function(e,t,a){e.exports=a.p+"static/media/top_text.2ca5383a.png"},function(e,t,a){e.exports=a.p+"static/media/top_text.f2e933e4.png"},function(e,t,a){e.exports=a.p+"static/media/bottom_text.f12d7647.png"},function(e,t,a){e.exports=a.p+"static/media/bottom_text.58b174ea.png"},function(e,t,a){e.exports=a.p+"static/media/bottom_text.f1a0a948.png"},function(e,t,a){e.exports=a.p+"static/media/player_buttons.2880b726.png"},function(e,t,a){e.exports=a.p+"static/media/logo.43e80148.png"},,function(e,t,a){e.exports=a(83)},,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),c=a.n(r),i=(a(66),a(60)),m=a(15),s=a(4),o=a(3),u=(a(70),a(71),a(72),a(73),a(74),a(6)),d=a(7),p=a(8),h=a(9),x=a(23),f=(a(76),a(41)),g=a.n(f),E=a(42),w=a.n(E),b=a(43),v=a.n(b),N=a(44),k=a.n(N);var y=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).convertTrackFileToPlaylist=function(e){var t=[];e.tracks.forEach((function(e){var a={};a.name=e.track.name,a.artist=e.track.artist,a.date=e.track.date,a.src=e.track.url,a.location=e.track.location,a.homepage=e.track.homepage,t.push(a)})),n.shuffle(t),n.setState({playlist:t})},n.shuffle=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}},n.handleClickPrevious=function(){var e=n.state.currentMusicIndex-1;e<0&&(e=n.state.playlist.length-1),n.setState({currentMusicIndex:e})},n.handleClickNext=function(){var e=n.state.currentMusicIndex+1;e>=n.state.playlist.length&&(e=0),n.setState({currentMusicIndex:e})},n.state={playlist:[],currentMusicIndex:0},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://iskconnyc.nyc3.cdn.digitaloceanspaces.com/files.yaml",{mode:"cors"}).then((function(e){return e.text()})).then((function(t){e.convertTrackFileToPlaylist(g.a.parse(t))}))}},{key:"render",value:function(){var e,t=this,a="",n="";return 0!==this.state.playlist.length&&(a=this.state.playlist[this.state.currentMusicIndex].src,e=this.state.playlist[this.state.currentMusicIndex],n="Radhadesh Mellows"===e.location?l.a.createElement("div",{className:"artist-credit"},"Kirtan Led By ",e.artist," | ",l.a.createElement("a",{href:e.homepage},"Radhadesh Mellows")):l.a.createElement("div",{className:"artist-credit"},"Kirtan Led By ",e.artist)),l.a.createElement(o.a,{queries:{small:"(max-width: 699px)",medium:"(min-width: 700px) and (max-width: 1149px)",large:"(min-width: 1150px)"}},(function(e){return l.a.createElement("div",null,e.large&&l.a.createElement("div",null,l.a.createElement("img",{className:"player-buttons",src:w.a,alt:""}),l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.facebook.com/brooklynlotus",className:"link-left"},"\xa0")),l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.facebook.com/iskconnyc",className:"link-right"},"\xa0")),l.a.createElement(m.a,null,l.a.createElement(x.a,{className:"audio-player",showSkipControls:!0,showJumpControls:!1,autoPlayAfterSrcChange:!0,header:n,onClickPrevious:t.handleClickPrevious,onClickNext:t.handleClickNext,onEnded:t.handleClickNext,src:a,style:{width:"60%",height:"auto"}}))),e.medium&&l.a.createElement("div",null,l.a.createElement("img",{className:"player-buttons",src:v.a,alt:""}),l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.facebook.com/brooklynlotus",className:"link-left"},"\xa0")),l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.facebook.com/iskconnyc",className:"link-right"},"\xa0")),l.a.createElement(x.a,{className:"audio-player",showSkipControls:!0,showJumpControls:!1,autoPlayAfterSrcChange:!0,header:n,onClickPrevious:t.handleClickPrevious,onClickNext:t.handleClickNext,onEnded:t.handleClickNext,src:a,style:{width:"50%",height:"auto"}})),e.small&&l.a.createElement("div",null,l.a.createElement("img",{className:"player-buttons",src:k.a,alt:""}),l.a.createElement(x.a,{className:"audio-player",showSkipControls:!0,showJumpControls:!1,autoPlayAfterSrcChange:!0,header:n,onClickPrevious:t.handleClickPrevious,onClickNext:t.handleClickNext,onEnded:t.handleClickNext,src:a,style:{width:"60%",height:"auto"}})))}))}}]),a}(l.a.Component),C=a(46),j=a.n(C),O=a(47),_=a.n(O),M=a(48),q=a.n(M),P=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(o.a,{queries:{small:"(max-width: 699px)",medium:"(min-width: 700px) and (max-width: 1149px)",large:"(min-width: 1150px)"}},(function(e){return l.a.createElement("div",null,e.small&&l.a.createElement("img",{className:"icons-left",src:q.a,alt:""}),e.medium&&l.a.createElement("img",{className:"icons-left",src:_.a,alt:""}),e.large&&l.a.createElement("img",{className:"icons-left",src:j.a,alt:""}))})))}}]),a}(l.a.Component),S=a(49),I=a.n(S),J=a(50),A=a.n(J),B=a(51),T=a.n(B),F=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(o.a,{queries:{small:"(max-width: 699px)",medium:"(min-width: 700px) and (max-width: 1149px)",large:"(min-width: 1150px)"}},(function(e){return l.a.createElement("div",null,e.small&&l.a.createElement("img",{className:"icons-right",src:T.a,alt:""}),e.medium&&l.a.createElement("img",{className:"icons-right",src:A.a,alt:""}),e.large&&l.a.createElement("img",{className:"icons-right",src:I.a,alt:""}))})))}}]),a}(l.a.Component),K=a(52),L=a.n(K),R=a(53),W=a.n(R),D=a(54),$=a.n(D),z=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(o.a,{queries:{small:"(max-width: 699px)",medium:"(min-width: 700px) and (max-width: 1049px)",large:"(min-width: 1150px)"}},(function(e){return l.a.createElement("div",null,e.small&&l.a.createElement("img",{className:"text-top",src:$.a,alt:""}),e.medium&&l.a.createElement("img",{className:"text-top",src:W.a,alt:""}),e.large&&l.a.createElement("img",{className:"text-top",src:L.a,alt:""}))})))}}]),a}(l.a.Component),G=a(55),H=a.n(G),Q=a(56),U=a.n(Q),V=a(57),X=a.n(V),Y=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(o.a,{queries:{small:"(max-width: 699px)",medium:"(min-width: 700px) and (max-width: 1149px)",large:"(min-width: 1150px)"}},(function(e){return l.a.createElement("div",null,e.small&&l.a.createElement("img",{className:"text-btm",src:X.a,alt:""}),e.medium&&l.a.createElement("img",{className:"text-btm",src:U.a,alt:""}),e.large&&l.a.createElement("img",{className:"text-btm",src:H.a,alt:""}))})))}}]),a}(l.a.Component),Z=a(58),ee=a.n(Z),te=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(o.a,{queries:{small:"(max-width: 699px)",medium:"(min-width: 700px) and (max-width: 1149px)",large:"(min-width: 1150px)"}},(function(e){return l.a.createElement("div",null,e.small&&l.a.createElement("div",null,l.a.createElement("img",{className:"buttons",src:ee.a,alt:""}),l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.facebook.com/brooklynlotus",className:"link-left"},"\xa0")),l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.facebook.com/iskconnyc",className:"link-right"},"\xa0"))))})))}}]),a}(l.a.Component),ae=a(22),ne=a.n(ae),le=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(o.a,{queries:{small:"(max-width: 699px)",medium:"(min-width: 700px) and (max-width: 1149px)",large:"(min-width: 1150px)"}},(function(e){return l.a.createElement("div",null,e.large&&l.a.createElement("img",{className:"text-ftr",src:ne.a,alt:""}),e.medium&&l.a.createElement("img",{className:"text-ftr",src:ne.a,alt:""}),e.small&&l.a.createElement("img",{className:"text-ftr",src:ne.a,alt:""}))})))}}]),a}(l.a.Component),re=a(59),ce=a.n(re),ie=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(o.a,{queries:{large:"(min-width: 1150px)"}},(function(e){return l.a.createElement("div",null,e.large&&l.a.createElement("img",{className:"logo",src:ce.a,alt:"mantra break logo"}))})))}}]),a}(l.a.Component);var me=function(){return l.a.createElement(i.a,{fluid:!0,className:"full"},l.a.createElement(m.a,{className:"mantra-logo"},l.a.createElement(s.a,{xl:2,lg:2,md:2,sm:2,xs:2,className:"log-left"},l.a.createElement(o.a,{queries:{small:"(max-width: 699px)",medium:"(min-width: 700px) and (max-width: 1149px)",large:"(min-width: 1150px)"}},(function(e){return l.a.createElement("div",null,e.large&&l.a.createElement(P,null))}))),l.a.createElement(s.a,{xl:8,lg:8,md:8,sm:8,xs:8,className:"log-mid"},l.a.createElement(ie,null)),l.a.createElement(s.a,{xl:2,lg:2,md:2,sm:2,xs:2,className:"log-right"},l.a.createElement(o.a,{queries:{small:"(max-width: 699px)",medium:"(min-width: 700px) and (max-width: 1149px)",large:"(min-width: 1150px)"}},(function(e){return l.a.createElement("div",null,e.large&&l.a.createElement(F,null))})))),l.a.createElement(m.a,{className:"mantra-top"},l.a.createElement(s.a,{xl:2,lg:2,md:2,sm:2,xs:2,className:"top-left"},l.a.createElement(o.a,{queries:{small:"(max-width: 699px)",medium:"(min-width: 700px) and (max-width: 1149px)",large:"(min-width: 1150px)"}},(function(e){return l.a.createElement("div",null,e.medium&&l.a.createElement(P,null),e.small&&l.a.createElement(P,null))}))),l.a.createElement(s.a,{xl:8,lg:8,md:8,sm:8,xs:8,className:"top-mid"},l.a.createElement(z,null)),l.a.createElement(s.a,{xl:2,lg:2,md:2,sm:2,xs:2,className:"top-right"},l.a.createElement(o.a,{queries:{small:"(max-width: 699px)",medium:"(min-width: 700px) and (max-width: 1149px)",large:"(min-width: 1150px)"}},(function(e){return l.a.createElement("div",null,e.medium&&l.a.createElement(F,null),e.small&&l.a.createElement(F,null))})))),l.a.createElement(m.a,{className:"mantra-player"},l.a.createElement(s.a,{xl:3,lg:3,md:2,sm:2,xs:2,className:"ply-left"}),l.a.createElement(s.a,{xl:6,lg:6,md:8,sm:8,xs:8,className:"ply-mid"},l.a.createElement(y,null)),l.a.createElement(s.a,{xl:3,lg:3,md:2,sm:2,xs:2,className:"ply-right"})),l.a.createElement(m.a,{className:"mantra-buttons"},l.a.createElement(s.a,{xl:4,lg:4,md:4,sm:4,xs:4,className:"pbn-left"}),l.a.createElement(s.a,{xl:4,lg:4,md:4,sm:4,xs:4,className:"pbn-mid"},l.a.createElement(te,null)),l.a.createElement(s.a,{xl:4,lg:4,md:4,sm:4,xs:4,className:"pbn-right"})),l.a.createElement(m.a,{className:"mantra-btm"},l.a.createElement(s.a,{xl:2,lg:2,md:2,sm:2,xs:2,className:"btm-left"}),l.a.createElement(s.a,{xl:8,lg:8,md:8,sm:8,xs:8,className:"btm-mid"},l.a.createElement(Y,null)),l.a.createElement(s.a,{xl:2,lg:2,md:2,sm:2,xs:2,className:"btm-right"})),l.a.createElement(m.a,{className:"mantra-ftr"},l.a.createElement(s.a,{xl:2,lg:2,md:2,sm:2,xs:2,className:"ftr-left"}),l.a.createElement(s.a,{xl:8,lg:8,md:8,sm:8,xs:8,className:"ftr-mid"},l.a.createElement(le,null)),l.a.createElement(s.a,{xl:2,lg:2,md:2,sm:2,xs:2,className:"ftr-right"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[61,1,2]]]);
//# sourceMappingURL=main.8a22f98d.chunk.js.map