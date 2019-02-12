import { userData } from '../userData/user.js'
//import { startBonus } from './handleDrawRoom'
//用户数据
var filter = () => {
    //主地址   
    let homeUrl = 'https://www.douyu.com/',
        //匹配抽奖房间号 为至少1位以上数字
        reg = /^\d{1,}$/,
        //主播房间号
        roomId = window.location.href.slice(homeUrl.length, window.location.href.length);
    //判断当前是不是抽奖房间地址
    if (reg.test(roomId) || window.location.href.indexOf('rid=') != -1) {
        //抽奖房间
        //window.onload = () =>{
        setTimeout(function() {
                //抽奖点击图标来判断抽奖时间是否到了
                document.getElementsByClassName(userData.domDrawImage)[0] == undefined ? window.close() : '';
                //无论是是否符合条件的房间只要打开后就加到本地防止下次循环打开 直到过期
                //抽奖剩余时间    
                let domDrawTime = document.getElementsByClassName(userData.domDrawTime)[0].innerHTML,
                    expiredTime = Number(domDrawTime.slice(0, domDrawTime.indexOf(':'))) * 60000 + Number(domDrawTime.slice(domDrawTime.indexOf(':') + 1, domDrawTime.length)) * 1000 + new Date().getTime(),
                    filterObj = { roomId, expiredTime };
                //带条件的房间过滤掉并加入过期时间防止下一次循环打开 时间戳
                var filterRoomArr = localStorage.getItem('filterRoomList') ? [filterObj, ...JSON.parse(localStorage.getItem('filterRoomList'))] : [filterObj];
                localStorage.setItem('filterRoomList', JSON.stringify(filterRoomArr));
                //抽奖条件模态框显示               
                document.getElementsByClassName(userData.domDrawTitle)[0] == undefined ? document.getElementsByClassName(userData.domDrawImage)[0].click() : '';
                //过滤条件抽奖房间
                //若有任意一个符合条件的则为true
                var flag = userData.drawFilterArr.some(v => { return document.getElementsByClassName(userData.domDrawCondition)[0].innerHTML.indexOf(v) != -1 });
                //有粉丝团和送礼物的抽奖房间
                if (flag) window.close(); //关闭当前房间
                // 只是关注或弹幕抽奖房间
                let startBonus = require('./handleDrawRoom');
                //执行抽奖动作
                startBonus;
            }, userData.getDomtime)
            //}
    };
}
export default filter