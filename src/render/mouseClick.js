window.addEventListener("load", function () {
  let body = document.getElementById("root");
  const words = [
    "陈颖仪",
    "多喝热水",
    "去西藏",
    "有一点点想你",
    "一起看日出",
    "一起看日落",
    "我爱你",
    "希望有个好结局",
    "带你回家",
    "带我回家",
    "多喝热水",
    "少生气",
    "你笑起来真好看",
    "不吵架",
    "向往以后",
    "一心一意",
    "做很多事情",
    "去旅游",
    "看雪山",
    "潜水去",
    "下雨天",
    "好喜欢你做的饭",
    "煲的汤真好喝",
    "相伴",
    "啵啵啵",
    "想每天都能见到你",
  ];

  const content = words.map((i) => `❤ 《 ${i} 》❤`);

  body.addEventListener("dblclick", function (e) {
    let x = e.pageX;
    let y = e.pageY;
    let randContent = Math.ceil(Math.random() * content.length);
    let text = new Text(x, y, randContent);
    let span = document.createElement("span");
    span.style.color = text.getRandom();
    text.create(span);
    setTimeout(function () {
      text.out(span);
    }, 1900);
  });

  function Text(x, y, rand) {
    this.x = x;
    this.y = y;
    this.rand = rand;
  }
  Text.prototype.create = function (_this) {
    // let body = document.body;
    _this.innerHTML = content[this.rand - 1];
    _this.className = "text";
    _this.style.top = this.y - 20 + "px";
    _this.style.left = this.x - 50 + "px";
    _this.style.position = "absolute";
    _this.style.animation = "remove 2s";
    _this.style.userSelect = "none";
    body.appendChild(_this);
    let i = 0;
    setInterval(() => {
      _this.style.top = this.y - 20 - i + "px";
      i++;
    }, 10);
  };
  Text.prototype.out = function (_this) {
    _this.remove();
  };
  Text.prototype.getRandom = function () {
    let allType = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
    let allTypeArr = allType.split(",");
    let color = "#";
    for (let i = 0; i < 6; i++) {
      const random = parseInt((Math.random() * allTypeArr.length).toString());
      color += allTypeArr[random];
    }
    return color;
  };
});
