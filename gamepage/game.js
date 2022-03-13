//名字 序号 地区 星级 元素 武器
var SerChara=[  ["八重神子",0,"dq",5,"lei","fq"],["云堇",1,"ly",4,"yan","cq"],["申鹤",2,"ly",5,"bing","cq"],
                ["荒泷一斗",3,"dq",5,"yan","ssj"],["五郎",4,"dq",4,"yan","g"],["优菈",5,"md",5,"bing","ssj"],
                ["阿贝多",6,"md",5,"yan","dsj"],["托马",7,"dq",4,"huo","cq"],["胡桃",8,"ly",5,"huo","cq"],
                ["达达利亚",9,"ly",5,"shui","g"],["雷电将军",10,"dq",5,"lei","cq"],["珊瑚宫心海",11,"dq",5,"shui","fq"],
                ["宵宫",12,"ly",5,"huo","g"],["神里绫华",13,"dq",5,"bing","dsj"],["枫原万叶",14,"dq",5,"feng","dsj"],
                ["温迪",15,"md",5,"feng","g"],["刻晴",16,"ly",5,"lei","dsj"],["莫娜",17,"md",5,"shui","fq"],
                ["可莉",18,"md",5,"huo","fq"],["琴",19,"md",5,"feng","ssj"],["迪卢克",20,"md",5,"huo","ssj"],
                ["七七",21,"ly",5,"bing","dsj"],["魈",22,"ly",5,"feng","cq"],["钟离",23,"ly",5,"yan","cq"],
                ["甘雨",24,"ly",5,"bing","g"],["早柚",25,"dq",4,"feng","ssj"],["九条裟罗",26,"dq",4,"lei","g"],
                ["凝光",27,"ly",4,"yan","fq"],["菲谢尔",28,"md",4,"lei","g"],["班尼特",29,"md",4,"huo","dsj"],
                ["丽莎",30,"md",4,"lei","fq"],["行秋",31,"ly",4,"shui","dsj"],["迪奥娜",32,"md",4,"bing","g"],
                ["安柏",33,"md",4,"huo","g"],["重云",34,"ly",4,"bing","ssj"],["雷泽",35,"md",4,"lei","ssj"],
                ["芭芭拉",36,"md",4,"shui","fq"],["罗莎莉亚",37,"md",4,"bing","cq"],["香菱",38,"ly",4,"huo","cq"],
                ["凯亚",39,"md",4,"bing","dsj"],["北斗",40,"ly",4,"lei","ssj"],["诺艾尔",41,"md",4,"yan","ssj"],
                ["砂糖",42,"md",4,"feng","fq"],["辛焱",43,"ly",4,"huo","ssj"],["烟绯",44,"ly",4,"huo","g"]
            ];

var ans=Math.floor(Math.random()*45),ALLGuessNum=1,maxnum=6;



/*根据id获取元素对象*/
function my$(id){
    return document.getElementById(id);
}
 
/**
 * 设置任意元素的中间文本内容
 * @param {*} element 标签元素
 * @param {*} text    文本内容
 */
function setInnerText(element,text){
    if(typeof element.textContent === "undefined"){
        element.innerText = text;
    }else{
        element.textContent = text;
    }
}


//搜索框函数
var keywords = ["八重神子","云堇","申鹤","荒泷一斗","五郎","优菈",
                "阿贝多","托马","胡桃","达达利亚","雷电将军","珊瑚宫心海",
                "宵宫","神里绫华","枫原万叶","温迪","刻晴","莫娜","可莉",
                "琴","迪卢克","七七","魈","钟离","甘雨","早柚",
                "九条裟罗","凝光","菲谢尔","班尼特","丽莎","行秋","迪奥娜",
                "安柏","重云","雷泽","芭芭拉","罗莎莉亚","香菱","凯亚",
                "北斗","诺艾尔","砂糖","辛焱","烟绯"];
var tempArr = [];   //临时数组
my$("txt").onkeyup = function () {
    var text = this.value;
 
    // 判断是否存在下拉框，存在删除，
    if (my$("dv")) {
        my$("box").removeChild(my$("dv"));
    } else {
        // Do-nothing
    }
 
    // 临时数组初始化，处理临时数组数据
    tempArr = [];
    for (let i = 0; i < keywords.length; i++) {
        if ((0 == keywords[i].indexOf(text)) && (0 != text.length)) {
            tempArr.push(keywords[i]);
        } else {
            // Do-nothing
        }
    }
 
    // 文本框是空的，临时数组也是空的，不用创建div
    if (this.value.length == 0 || tempArr.length == 0) {
        // 如果页面中又这个div，删除这个div
        if (my$("dv")) {
            my$("box").removeChild(my$("dv"));
        }
        return;
    }
 
    // 创建div,把div加入到id="box"的标签中
    var dvObj = document.createElement("div");
    my$("box").appendChild(dvObj);
    dvObj.id = "dv";
    dvObj.style.position = "absolute";
    dvObj.style.left = "9%";
    dvObj.style.width = "155px";
    dvObj.style.border = "1px solid green";
    dvObj.style.color = "aliceblue";
    dvObj.style.fontSize = "12px";

    // 遍历tempArr数组，创建p，添加到dvObj里面
    for (let i = 0; i < tempArr.length; i++) {
        var pObj = document.createElement("p");
        // pObj.innerHTML = tempArr[i];
        // 在p标签内部添加文本文字
        setInnerText(pObj,tempArr[i]);
        dvObj.appendChild(pObj);
 
        // 注册鼠标进入事件，鼠标进入，添加黄色背景图
        pObj.onmouseover = function () {
            this.style.backgroundColor = "#A52A2A";
        };
 
        // 注册鼠标移除事件，鼠标移除，移除背景色
        pObj.onmouseout = function () {
            this.style.backgroundColor = "";
        };
        pObj.onclick = function(){
            document.getElementById('txt').value = tempArr[i];
            my$("box").removeChild(my$("dv"));
        }
    }
}

//canvas绘制
var canvas=document.querySelector('#DrawArea');
var context=canvas.getContext("2d"); 
canvas.width=350;
canvas.height=500;
context.font = "15px 黑体";
context.fillStyle = "#8470FF";
var imgURL=document.createElement('img');
imgURL.src="../img/rightwrong.png";



function CharaTurn(name){//角色序号转换
    for(let i=0;i<SerChara.length;i++){
        if(name==SerChara[i][0]){
            return SerChara[i][1];
        }
    }
    return -1;
}


serch = function(){//主函数
    GuessNum=CharaTurn(document.getElementById('txt').value);
    l:if(GuessNum!=-1){
        //alert(GuessNum);

        context.fillText(SerChara[GuessNum][0],10,(ALLGuessNum-1)*80+40);
        
        for(let i=2;i<=5;i++){
            if(SerChara[ans][i]==SerChara[GuessNum][i])
                context.drawImage(imgURL,0,0,240,240,(i-2)*70+70,(ALLGuessNum-1)*80,70,70);
            else
                context.drawImage(imgURL,240,0,240,240,(i-2)*70+70,(ALLGuessNum-1)*80,70,70);
        }
        if(GuessNum==ans){
            context.fillText(SerChara[ans][0]+" 对了",160,(ALLGuessNum)*80+20);
            my$("main").removeChild(my$("box"));
            func_restart();
            return;
        }


        var temp=440-80*ALLGuessNum;
        document.getElementById('box').style.bottom=`${temp}px`;
        document.getElementById('txt').value = "";
    }
    else{
        return;
    }
    ALLGuessNum++;
    document.getElementById('chanceNum').innerHTML= `你还有${6-ALLGuessNum}次机会 猜猜这是什么角色`
    if(ALLGuessNum==maxnum && GuessNum!=ans){
        context.fillText("5次白给了! 答案是"+SerChara[ans][0],120,(ALLGuessNum-1)*80+20);
        my$("main").removeChild(my$("box"));
        ALLGuessNum--;
        func_restart();
        return;
    }


}

var func_restart = function(){
    var restart =document.createElement("button");
    var temp=200+80*(ALLGuessNum);
    restart.id = "restart";
    restart.onclick = function(){
        window.location.reload();
    }
    restart.style.height = "30px";
    restart.style.width = "80px";
    restart.innerHTML = "再来亿次!"
    restart.style.position = "absolute";
    restart.style.borderRadius = "8px";
    restart.style.left ="50%";
    restart.style.top = `${temp}px`
    my$("main").appendChild(restart);
}

function  info(){
    document.getElementById("infoBox").style.display="";
}

function closeinfo(){
    document.getElementById("infoBox").style.display="none";
}