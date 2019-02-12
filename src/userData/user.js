var userData = {
    "uiphone": "18458234087",
    "uid": "259139326",
    "did": "2c70931b180a84b1d202ff3400061501",
    "dataMainUrl": "https://www.douyu.com/member/recommlist/getfreshlistajax?", //roomid数据页面拼写主干
    "clickNum": 1, //用户获取roomid点击次数
    "roomNum": 5, //获取房间数量
    "roomType": 2, //直播分类 2抽奖
    "openRoomNum": 1, //打开直播间数量 默认为1 最大为userData.roomNum
    "mainInterval": 60000, //300000五分钟执行一次main
    "domDrawImage": "custom_ld-7d1c3c", //抽奖标识图片
    "domDrawTime": "custom_p-a19f30", // 抽奖剩余时间
    "domDrawTitle": "b_title-ce7efa", //抽奖模态框
    "domDrawCondition": "b_p3_0-b82a87", //抽奖条件
    "drawFilterArr": ["加入粉丝团", "送出下方礼物"], //主播抽奖设置
    "drawInputValue": "b_input-6be2de", //抽奖口令
    "followBtn": "Title-followBtn", //关注按钮
    "followBtnText": "Title-followText", //是否关注了
    "userInput": "ChatSend-txt", //用户输入框
    "userSendBtn": "ChatSend-button", //弹幕发送按钮
    "userSendTimeOut": "ChatSend-button is-gray", //弹幕间隔
    "userSendDefinedMessage": "主播真好看", //防止重复发言的自定义发言
    "userSendDefinedInterval": 30000, //用户自定义最快发言间隔
    "getDomtime": 15000 //获取页面元素的时间 取决于电脑速度
}
export { userData }