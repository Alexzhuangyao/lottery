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
    title: "现金红包",
    img: "./img/xjhb.jpg"
  },
  {
    type: 2,
    count: 1,
    text: "二等奖(一)",
    title: "摩飞多功能料理圆锅",
    img: "../img/mf.jpg"
  },
  {
    type: 3,
    count: 1,
    text: "二等奖(二)",
    title: "海尔扫地机器人",
    img: "../img/sdjqr.jpg"
  },
  {
    type: 4,
    count: 1,
    text: "二等奖(三)",
    title: "飞利浦电动牙刷",
    img: "../img/ddys.jpg"
  },
  {
    type: 5,
    count: 1,
    text: "三等奖(一)",
    title: "小米变频塔扇",
    img: "../img/bpts.jpg"
  },
  {
    type: 6,
    count: 1,
    text: "三等奖(二)",
    title: "srue早餐机",
    img: "../img/zcj.jpg"
  },
  {
    type: 7,
    count: 1,
    text: "三等奖(三)",
    title: "苏泊尔烤箱",
    img: "../img/sbekx.jpg"
  },
  {
    type: 8,
    count: 1,
    text: "三等奖(四)",
    title: "九阳养生壶",
    img: "../img/ysh.jpg"
  },
  {
    type: 9,
    count: 1,
    text: "三等奖(五)",
    title: "小米恒温电热水壶",
    img: "../img/drsh.jpg"
  },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 1, 1, 1, 1,1,1,1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "俊达&好雨";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
