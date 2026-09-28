const W=window.WEDDING,$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function fill(){
document.title=`${W.bride} & ${W.groom}`;
["bride","gBride","sBride","cBride"].forEach(x=>$("#"+x).textContent=W.bride);
["groom","gGroom","sGroom","cGroom"].forEach(x=>$("#"+x).textContent=W.groom);
$("#dateLabel").textContent=W.dateLabel;$("#cDate").textContent=W.dateLabel;$("#intro").textContent=W.intro;
$("#hero").src=W.heroImage;$("#venueImg").src=W.venueImage;$("#dinnerImg").src=W.dinnerImage;$("#audio").src=W.music;
$("#venue").textContent=W.venue;$("#location").textContent=W.location;$("#venueText").textContent=W.venueText;
$("#dressText").textContent=W.dressText;$("#note").textContent=W.note;$("#closing").textContent=W.closing;$("#footerInitials").textContent=W.initials;
$("#timeline").innerHTML=W.schedule.map(x=>`<div class="row"><div class="event">${x.title}</div><div class="node"><b>${x.icon}</b></div><time>${x.time}</time></div>`).join("");
$("#palette").innerHTML=W.colors.map(c=>`<i style="background:${c}"></i>`).join("");
}
function tick(){let ms=Math.max(0,new Date(W.dateISO)-new Date()),s=Math.floor(ms/1000);$("#days").textContent=Math.floor(s/86400);$("#hours").textContent=String(Math.floor(s%86400/3600)).padStart(2,"0");$("#minutes").textContent=String(Math.floor(s%3600/60)).padStart(2,"0");$("#seconds").textContent=String(s%60).padStart(2,"0")}
fill();tick();setInterval(tick,1000);
$("#seal").onclick=()=>{let g=$("#gate");g.classList.add("open");$("#audio").play().then(()=>$("#musicBtn").classList.add("playing")).catch(()=>{});setTimeout(()=>{g.classList.add("hide");$("#site").classList.add("show");setTimeout(()=>$$(".reveal")[0].classList.add("in"),100)},1000)};
$("#musicBtn").onclick=()=>{let a=$("#audio");if(a.paused){a.play();$("#musicBtn").classList.add("playing")}else{a.pause();$("#musicBtn").classList.remove("playing")}};
let io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("in")),{threshold:.12});$$(".reveal").forEach(e=>io.observe(e));