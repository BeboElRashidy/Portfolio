(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",a="day",u="week",o="month",c="quarter",f="year",h="date",l="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,a=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:f,w:u,d:a,D:h,h:s,m:i,s:r,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",M={};M[p]=m;var w=function(t){return t instanceof S},g=function t(e,n,r){var i;if(!e)return p;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(i=s),n&&(M[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;M[u]=e,i=u}return!r&&i&&(p=i),i||!r&&p},b=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},D=v;D.l=g,D.i=w,D.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function m(t){this.$L=g(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===l)},y.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return b(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<b(t)},y.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,c=!!D.u(e)||e,l=D.p(t),d=function(t,e){var r=D.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?r:r.endOf(a)},$=function(t,e){return D.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,y=this.$M,v=this.$D,p="set"+(this.$u?"UTC":"");switch(l){case f:return c?d(1,0):d(31,11);case o:return c?d(1,y):d(0,y+1);case u:var M=this.$locale().weekStart||0,w=(m<M?m+7:m)-M;return d(c?v-w:v+(6-w),y);case a:case h:return $(p+"Hours",0);case s:return $(p+"Minutes",1);case i:return $(p+"Seconds",2);case r:return $(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var u,c=D.p(t),l="set"+(this.$u?"UTC":""),d=(u={},u[a]=l+"Date",u[h]=l+"Date",u[o]=l+"Month",u[f]=l+"FullYear",u[s]=l+"Hours",u[i]=l+"Minutes",u[r]=l+"Seconds",u[n]=l+"Milliseconds",u)[c],$=c===a?this.$D+(e-this.$W):e;if(c===o||c===f){var m=this.clone().set(h,1);m.$d[d]($),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d]($);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[D.p(t)]()},y.add=function(n,c){var h,l=this;n=Number(n);var d=D.p(c),$=function(t){var e=b(l);return D.w(e.date(e.date()+Math.round(t*n)),l)};if(d===o)return this.set(o,this.$M+n);if(d===f)return this.set(f,this.$y+n);if(d===a)return $(1);if(d===u)return $(7);var m=(h={},h[i]=t,h[s]=e,h[r]=1e3,h)[d]||1,y=this.$d.getTime()+n*m;return D.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return D.s(s%12||12,t,"0")},m=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace($,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return D.s(e.$y,4,"0");case"M":return u+1;case"MM":return D.s(u+1,2,"0");case"MMM":return h(n.monthsShort,u,c,3);case"MMMM":return h(c,u);case"D":return e.$D;case"DD":return D.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return D.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(e.$s);case"ss":return D.s(e.$s,2,"0");case"SSS":return D.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,l){var d,$=this,m=D.p(h),y=b(n),v=(y.utcOffset()-this.utcOffset())*t,p=this-y,M=function(){return D.m($,y)};switch(m){case f:d=M()/12;break;case o:d=M();break;case c:d=M()/3;break;case u:d=(p-v)/6048e5;break;case a:d=(p-v)/864e5;break;case s:d=p/e;break;case i:d=p/t;break;case r:d=p/1e3;break;default:d=p}return l?d:D.a(d)},y.daysInMonth=function(){return this.endOf(o).$D},y.$locale=function(){return M[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=g(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),_=S.prototype;return b.prototype=_,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",a],["$M",o],["$y",f],["$D",h]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,S,b),t.$i=!0),b},b.locale=g,b.isDayjs=w,b.unix=function(t){return b(1e3*t)},b.en=M[p],b.Ls=M,b.p={},b}()},110:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,s,a,u){for(var o,c,f,h=s.$locale().relativeTime||i,l=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],d=l.length,$=0;$<d;$+=1){var m=l[$];m.d&&(o=a?n(e).diff(s,m.d,!0):s.diff(e,m.d,!0));var y=(t.rounding||Math.round)(Math.abs(o));if(f=o>0,y<=m.r||!m.r){y<=1&&$>0&&(m=l[$-1]);var v=h[m.l];u&&(y=u(""+y)),c="string"==typeof v?v.replace("%d",y):v(y,r,m.l,f);break}}if(r)return c;var p=f?h.future:h.past;return"function"==typeof p?p(c):p.replace("%s",c)},r.to=function(t,e){return s(t,e,this,!0)},r.from=function(t,e){return s(t,e,this)};var a=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(a(this),t)},r.fromNow=function(t){return this.from(a(this),t)}}}()},519:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function a(t){try{o(r.next(t))}catch(t){s(t)}}function u(t){try{o(r.throw(t))}catch(t){s(t)}}function o(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}o((r=r.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var n,r,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(u){return function(o){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,u[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=e.call(t,a)}catch(t){u=[6,t],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,o])}}},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=s(n(484)),u=s(n(110));function o(){return r(this,void 0,void 0,(function(){var t,e;return i(this,(function(n){switch(n.label){case 0:return t=new URLSearchParams({email:"b.abdelaal@innopolis.university"}),[4,fetch("https://fwd.innopolis.university/api/hw2?".concat(t))];case 1:case 3:return[4,n.sent().json()];case 2:return e=n.sent(),[4,fetch("https://fwd.innopolis.university/api/comic?id=".concat(e))];case 4:return[2,n.sent()]}}))}))}a.default.extend(u.default),r(void 0,void 0,void 0,(function(){var t,e,n,r,s,u;return i(this,(function(i){switch(i.label){case 0:return[4,o()];case 1:return t=i.sent(),e=(0,a.default)().set("year",t.year).set("month",t.month-1).set("date",t.day),(n=document.createElement("img")).src=t.img,n.alt=t.alt,(r=document.createElement("h2")).textContent=t.safe_title,(s=document.createElement("p")).textContent=e.fromNow(),(u=document.getElementById("data"))&&u.append(r,s,n),[2]}}))}))}},e={};!function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}(519)})();