var tl = gsap.timeline({scrollTrigger:{
  trigger: ".two",
  start: "0% 95%",
  end: "50% 50%",
  scrub: true,
  // markers: true,
}})

tl.to("#me",{
  top: "120%",
  left: "0%"
}, 'orange')
tl.to("#javaScript",{
  top:"170%",
  left: "45%"
  
}, 'orange')
tl.to("#orange",{
  width: "15%",
  top:"170%",
  left: "60%"
}, 'orange')
tl.to("#react",{
  top:"110%",
  // rotate: "130deg",
  left: "70%"
}, 'orange')
tl.to("#gsap",{
  top:"110%",
  // rotate: "130deg",
  left: "45%"
}, 'orange')

var tl2 = gsap.timeline({scrollTrigger:{
  trigger: ".three",
  start: "70% 95%",
  end: "30% 50%",

  scrub: true,
  // markers: true,
}})


// tl2.from(".lemon1",{
//   rotate: "-90deg",
//   left: "-100%",
//   top: "110%",
// }, 'ca')
tl2.from("#card1",{
  rotate: "-90deg",
  top: "110%",
  left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
  rotate: "90deg",
  left: "100%",
  top: "110%",
}, 'ca')
tl2.from("#card2",{
  rotate: "90deg",
  top: "110%",
  left: "100%",
}, 'ca')



var tl3 = gsap.timeline()

tl3.from(".one h1",{
  y:100,
  opacity:0,
  stagger:0.5
 })
 tl3.from("#main a, .cntr-nav a, .ri-menu-fill",{
  y:-100,
  duration:1,
  delay:0.5,
  opacity: 0,
  stagger:0.2
 })
 

 tl3.from(".one img",{
  scale:0,
  opacity:0,
  duration:1,
  delay:1,
  rotate:360,
  stagger:0.2
 })

 