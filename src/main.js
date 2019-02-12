//脚本主入口 
//import "babel-polyfill";斗鱼已经引用
import { openRoomList } from "./someRoom/getRoomList";
import { userData } from "./userData/user"
var main = () => {
    if (window.location.href == 'https://www.douyu.com/') { //需打开斗鱼主页面入口
        let dataUrl = `${userData.dataMainUrl}clickNum=${userData.clickNum}&did=${userData.did}&type=${userData.roomType}&show_num=${userData.roomNum}&uid=${userData.uid}&bzdata=0`;
        //打开数据页面
        window.open(dataUrl);
    };
    //获取并打开抽奖房间
    openRoomList();
};
main();
//总循环
setInterval(() => {
    userData.clickNum += 3; //三个分类一循环
    main();
}, userData.mainInterval)