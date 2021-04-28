/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
    {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 1,
    text: "一等奖",
    title: "戴森吸尘器",
    img: "./img/dyson.jpg"
  },
  {
    type: 2,
    count: 1,
    text: "二等奖(一)",
    title: "松下电饭煲",
    img: "../img/dfb.jpg"
  },
  {
    type: 3,
    count: 1,
    text: "二等奖(二)",
    title: "美的电饭煲",
    img: "../img/dfb.jpg"
  },
  {
    type: 4,
    count: 1,
    text: "三等奖(一)",
    title: "膳魔师榨汁机",
    img: "../img/thermos.jpg"
  },
  {
    type: 5,
    count: 1,
    text: "三等奖(二)",
    title: "陶瓷电热水壶套装",
    img: "../img/dsh.jpg"
  },
  {
    type: 6,
    count: 1,
    text: "三等奖(三)",
    title: "国色青花碗碟套装",
    img: "../img/qhwd.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 1, 1, 1, 1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "小庄&小费";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
