import { userData } from '../userData/user.js'
import filter from "./filterRoom";

function openRoomList() {
    //当前页面不是数据页面跳出
    //if(window.location.href.indexOf(baseUrl) == -1) throw new Error('数据页面错误');
    if (window.location.href.indexOf(userData.dataMainUrl) != -1) {
        //抽奖房间数据
        var DATA = JSON.parse(document.getElementsByTagName('body')[0].innerHTML),
            roomIdList = [];
        //房间号
        DATA.room.forEach((item) => {
            roomIdList.push(Number(item.roomid));
        });
        //console.log(roomIdList)
        //过滤抽奖房间包括已经打开的和非弹幕抽奖的房间
        var filterRoomList = localStorage.getItem('filterRoomList') ? JSON.parse(localStorage.getItem('filterRoomList')) : [],
            newLocalRoomList = [], //本地的房间列表
            filterRoomIdList = []; //没到时间的房间号
        filterRoomList.forEach((item) => {
            if (item.expiredTime > new Date().getTime()) { //还没到时间
                newLocalRoomList.push(item);
                filterRoomIdList.push(Number(item.roomId));
            };
        });
        //console.log(filterRoomIdList)
        //重新放入本地
        localStorage.setItem('filterRoomList', JSON.stringify(newLocalRoomList));
        //最终要打开的房间号 取交集
        var finalRoomList = new Set(roomIdList.filter(x => !new Set(filterRoomIdList).has(x)));
        //console.log(Array.from(finalRoomList))
        //遍历并打开抽奖房间
        for (let i of Array.from(finalRoomList).slice(0, userData.openRoomNum)) {
            window.close();
            window.open('https://www.douyu.com/' + i)
        };
    }
    //过滤抽奖房间并执行
    filter();
};
export { openRoomList }