var cursor = document.querySelector("#cursor")

window.addEventListener("mousemove",function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
})

var loadingPage = document.querySelector("#loading-pg");
var laoder = document.querySelector("#loader");
var tl = gsap.timeline();
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#main2",
        start:"top top",
        end:"bottom 60%",
    },
})


tl.to(laoder,{
    width: "100%",
    duration: 2,
})
.to(loadingPage,{
    y: "-100%",
})

tl2
.to("#rotating-circle",{
    y: 150,
    duration: .7,
    ease: Power0
})
.to("#rotating-circle",{
    rotate: "130deg",
    x: 100,
    y: 238
})
.to("#rotating-circle",{
    rotate: "1080deg",
    x: 1149,
    duration: 2
})
.to("#block-2",{
    rotate: "90deg",
    duration: 1,
    ease: Bounce.easeOut
})

gsap.from("#sec-1",{
    scrollTrigger:{
        trigger:"#sec-1",
        start:"top 70%",
    },
    y: 40,
    opacity: .5,
})

gsap.from("#sec-2",{
    scrollTrigger:{
        trigger:"#sec-2",
        start:"top 70%",
    },
    y: 160,
    opacity: .5,
})

gsap.from("#sec-3",{
    scrollTrigger:{
        trigger:"#sec-3",
        start:"top 70%",
    },
    y: 40,
    opacity: .5,
})

gsap.from("#sec-4",{
    scrollTrigger:{
        trigger:"#sec-4",
        start:"top 70%",
    },
    y: 160,
    opacity: .5,
})

gsap.from("#cr2",{
    scrollTrigger:{
        trigger:"#main4",
        start:"top 70%",
    },
    x:"-120%",
    duration:1
})

gsap.from("#cr3",{
    scrollTrigger:{
        trigger:"#main4",
        start:"top 70%",
    },
    x:"-230%",
    duration:1
})

var cardMove = document.querySelectorAll(".dets-cards");

cardMove.forEach(function(e){
    e.addEventListener("mouseenter",()=>{
        cursor.style.scale = .5;
        e.style.transform = "translate(10px)";
    })
    e.addEventListener("mouseleave",()=>{
        cursor.style.scale = 1;
        e.style.transform = "translate(-10px)";
    })
})

var c = document.querySelectorAll(".c");

c.forEach(function(e){
    e.addEventListener("mouseenter",()=>{
        cursor.style.scale = .5;
    })
    e.addEventListener("mouseleave",()=>{
        cursor.style.scale = 1;
    })
})

var sections = document.querySelectorAll(".sections");

sections.forEach(function(dets){
    dets.addEventListener("mouseenter",()=>{
        dets.style.scale = 1.02;
    });

    dets.addEventListener("mouseleave",()=>{
        dets.style.scale = 1;
    });
})