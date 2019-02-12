/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var userData={"uiphone":"18458234087","uid":"259139326","did":"2c70931b180a84b1d202ff3400061501","dataMainUrl":"https://www.douyu.com/member/recommlist/getfreshlistajax?",//roomid数据页面拼写主干
"clickNum":1,//用户获取roomid点击次数
"roomNum":5,//获取房间数量
"roomType":2,//直播分类 2抽奖
"openRoomNum":1,//打开直播间数量 默认为1 最大为userData.roomNum
"mainInterval":60000,//300000五分钟执行一次main
"domDrawImage":"custom_ld-7d1c3c",//抽奖标识图片
"domDrawTime":"custom_p-a19f30",// 抽奖剩余时间
"domDrawTitle":"b_title-ce7efa",//抽奖模态框
"domDrawCondition":"b_p3_0-b82a87",//抽奖条件
"drawFilterArr":["\u52A0\u5165\u7C89\u4E1D\u56E2","\u9001\u51FA\u4E0B\u65B9\u793C\u7269"],//主播抽奖设置
"drawInputValue":"b_input-6be2de",//抽奖口令
"followBtn":"Title-followBtn",//关注按钮
"followBtnText":"Title-followText",//是否关注了
"userInput":"ChatSend-txt",//用户输入框
"userSendBtn":"ChatSend-button",//弹幕发送按钮
"userSendTimeOut":"ChatSend-button is-gray",//弹幕间隔
"userSendDefinedMessage":"\u4E3B\u64AD\u771F\u597D\u770B",//防止重复发言的自定义发言
"userSendDefinedInterval":30000,//用户自定义最快发言间隔
"getDomtime":15000//获取页面元素的时间 取决于电脑速度
};exports.userData=userData;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _getRoomList=__webpack_require__(3);var _user=__webpack_require__(0);//脚本主入口 
//import "babel-polyfill";斗鱼已经引用
var main=function main(){if(window.location.href=="https://www.douyu.com/"){//需打开斗鱼主页面入口
var dataUrl=_user.userData.dataMainUrl+"clickNum="+_user.userData.clickNum+"&did="+_user.userData.did+"&type="+_user.userData.roomType+"&show_num="+_user.userData.roomNum+"&uid="+_user.userData.uid+"&bzdata=0";//打开数据页面
window.open(dataUrl)};//获取并打开抽奖房间
(0,_getRoomList.openRoomList)()};main();//总循环
setInterval(function(){_user.userData.clickNum+=3;//三个分类一循环
main()},_user.userData.mainInterval);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});exports.openRoomList=undefined;var _user=__webpack_require__(0);var _filterRoom=__webpack_require__(4);var _filterRoom2=_interopRequireDefault(_filterRoom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function openRoomList(){//当前页面不是数据页面跳出
//if(window.location.href.indexOf(baseUrl) == -1) throw new Error('数据页面错误');
if(window.location.href.indexOf(_user.userData.dataMainUrl)!=-1){//抽奖房间数据
var DATA=JSON.parse(document.getElementsByTagName('body')[0].innerHTML),roomIdList=[];//房间号
DATA.room.forEach(function(item){roomIdList.push(Number(item.roomid))});//console.log(roomIdList)
//过滤抽奖房间包括已经打开的和非弹幕抽奖的房间
var filterRoomList=localStorage.getItem('filterRoomList')?JSON.parse(localStorage.getItem('filterRoomList')):[],newLocalRoomList=[],//本地的房间列表
filterRoomIdList=[];//没到时间的房间号
filterRoomList.forEach(function(item){if(item.expiredTime>new Date().getTime()){//还没到时间
newLocalRoomList.push(item);filterRoomIdList.push(Number(item.roomId))};});//console.log(filterRoomIdList)
//重新放入本地
localStorage.setItem('filterRoomList',JSON.stringify(newLocalRoomList));//最终要打开的房间号 取交集
var finalRoomList=new Set(roomIdList.filter(function(x){return!new Set(filterRoomIdList).has(x)}));//console.log(Array.from(finalRoomList))
//遍历并打开抽奖房间
var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=Array.from(finalRoomList).slice(0,_user.userData.openRoomNum)[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var i=_step.value;window.close();window.open('https://www.douyu.com/'+i)}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}};}//过滤抽奖房间并执行
(0,_filterRoom2.default)()};exports.openRoomList=openRoomList;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:true});var _user=__webpack_require__(0);function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i]}return arr2}else{return Array.from(arr)}}//import { startBonus } from './handleDrawRoom'
//用户数据
var filter=function filter(){//主地址   
var homeUrl='https://www.douyu.com/',//匹配抽奖房间号 为至少1位以上数字
reg=/^\d{1,}$/,//主播房间号
roomId=window.location.href.slice(homeUrl.length,window.location.href.length);//判断当前是不是抽奖房间地址
if(reg.test(roomId)||window.location.href.indexOf('rid=')!=-1){//抽奖房间
//window.onload = () =>{
setTimeout(function(){//抽奖点击图标来判断抽奖时间是否到了
document.getElementsByClassName(_user.userData.domDrawImage)[0]==undefined?window.close():'';//无论是是否符合条件的房间只要打开后就加到本地防止下次循环打开 直到过期
//抽奖剩余时间    
var domDrawTime=document.getElementsByClassName(_user.userData.domDrawTime)[0].innerHTML,expiredTime=Number(domDrawTime.slice(0,domDrawTime.indexOf(':')))*60000+Number(domDrawTime.slice(domDrawTime.indexOf(':')+1,domDrawTime.length))*1000+new Date().getTime(),filterObj={roomId:roomId,expiredTime:expiredTime};//带条件的房间过滤掉并加入过期时间防止下一次循环打开 时间戳
var filterRoomArr=localStorage.getItem('filterRoomList')?[filterObj].concat(_toConsumableArray(JSON.parse(localStorage.getItem('filterRoomList')))):[filterObj];localStorage.setItem('filterRoomList',JSON.stringify(filterRoomArr));//抽奖条件模态框显示               
document.getElementsByClassName(_user.userData.domDrawTitle)[0]==undefined?document.getElementsByClassName(_user.userData.domDrawImage)[0].click():'';//过滤条件抽奖房间
//若有任意一个符合条件的则为true
var flag=_user.userData.drawFilterArr.some(function(v){return document.getElementsByClassName(_user.userData.domDrawCondition)[0].innerHTML.indexOf(v)!=-1});//有粉丝团和送礼物的抽奖房间
if(flag)window.close();//关闭当前房间
// 只是关注或弹幕抽奖房间
var startBonus=__webpack_require__(5);//执行抽奖动作
startBonus},_user.userData.getDomtime);//}
};};exports.default=filter;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _user=__webpack_require__(0);//发送弹幕
var send=function send(command){//口令赋值到用户输入框
document.getElementsByClassName(_user.userData.userInput)[0].value=command;//发送弹幕
document.getElementsByClassName(_user.userData.userSendBtn)[0].click()};// 抽奖
//进入抽奖房间
var handler=function handler(arg){//抽奖点击图标
document.getElementsByClassName(_user.userData.domDrawImage)[0]==undefined?window.close():'';//抽奖条件模态框显示    
document.getElementsByClassName(_user.userData.domDrawTitle)[0]==undefined?document.getElementsByClassName(_user.userData.domDrawImage)[0].click():'';//口令
var command=document.getElementsByClassName(_user.userData.drawInputValue)[0].value;if(arg==0){send(command);//是否关注该主播
document.getElementsByClassName(_user.userData.domDrawCondition)[0].innerHTML.indexOf('\u5173\u6CE8\u4E3B\u64AD')!==-1?getComputedStyle(document.getElementsByClassName(_user.userData.followBtnText)[1],null).getPropertyValue('display')=='block'?'':document.getElementsByClassName(_user.userData.followBtn)[0].click():'';send(command);return Number(document.getElementsByClassName(_user.userData.userSendTimeOut)[0].innerHTML)*1500}else if(arg%2==0){//发送抽奖弹幕
send(command)}else{//发送虚假弹幕
send(_user.userData.userSendDefinedMessage)}};//获取时间间隔
var initTime=handler(0)<_user.userData.userSendDefinedInterval?_user.userData.userSendDefinedInterval:handler(0),//保证发言最快ji秒一次
//计数器 为了区别相同弹幕
counter=1;console.log('\u53D1\u8A00\u95F4\u9694'+initTime);setInterval(function(){handler(counter);console.log('\u53D1\u8A00\u6B21\u6570'+counter);counter++},initTime);

/***/ })
/******/ ]);