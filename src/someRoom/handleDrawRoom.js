//进入抽奖房间
import { userData } from '../userData/user.js'
//发送弹幕
var send = (command) => {
    //口令赋值到用户输入框
    document.getElementsByClassName(userData.userInput)[0].value = command;
    //发送弹幕
    document.getElementsByClassName(userData.userSendBtn)[0].click();
};
// 抽奖
var handler = (arg) => {
    //抽奖点击图标
    document.getElementsByClassName(userData.domDrawImage)[0] == undefined ? window.close() : '';
    //抽奖条件模态框显示    
    document.getElementsByClassName(userData.domDrawTitle)[0] == undefined ? document.getElementsByClassName(userData.domDrawImage)[0].click() : '';
    //口令
    let command = document.getElementsByClassName(userData.drawInputValue)[0].value;
    if (arg == 0) {
        send(command);
        //是否关注该主播
        document.getElementsByClassName(userData.domDrawCondition)[0].innerHTML.indexOf('关注主播') !== -1 ? (getComputedStyle(document.getElementsByClassName(userData.followBtnText)[1], null).getPropertyValue("display") == "block" ? '' : document.getElementsByClassName(userData.followBtn)[0].click()) : '';
        send(command);
        return Number(document.getElementsByClassName(userData.userSendTimeOut)[0].innerHTML) * 1500;
    } else if (arg % 2 == 0) { //发送抽奖弹幕
        send(command);
    } else { //发送虚假弹幕
        send(userData.userSendDefinedMessage);
    }
};
//获取时间间隔
var initTime = handler(0) < userData.userSendDefinedInterval ? userData.userSendDefinedInterval : handler(0), //保证发言最快ji秒一次
    //计数器 为了区别相同弹幕
    counter = 1;
console.log('发言间隔' + initTime);
setInterval(() => {
    handler(counter);
    console.log('发言次数' + counter);
    counter++;
}, initTime);