const picture = document.getElementsByClassName("picture");
function large(picture) {
    let size = window.getComputedStyle(picture);
    /* 
    三元表达式 
    如果size.height的值为256px，那么执行问号后面的表达式，否则执行冒号后面的表达式 
    */ size.height === "256px" ? picture.style.setProperty("block-size", "768px") : picture.style.setProperty("block-size", "256px");
}
/* 为picture类中的每一个元素都添加一个点击事件  */ for(i = 0; i < picture.length; i++)picture[i].addEventListener("click", function(event) {
    large(event.target);
});

//# sourceMappingURL=index.869db7f3.js.map
