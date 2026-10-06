const labels=["Sep 4","Sep 5","Sep 6","Sep 7","Sep 18","Sep 19","Sep 26","Sep 27","Sep 27*","Sep 27**","Sep 27***"];
const goals=[0,1,0,1,0,1,1,2,0,0,1];
const assists=[1,2,1,2,2,2,2,2,0,0,2];
let cumulative=0;
const points=goals.map((g,i)=>{cumulative+=g+assists[i];return cumulative;});
const ctx=document.getElementById("pointsChart");
if(ctx && window.Chart){
 new Chart(ctx,{type:"bar",data:{labels,datasets:[
 {label:"Goals + Assists",data:goals.map((g,i)=>g+assists[i]),backgroundColor:"rgba(183,255,74,.28)",borderColor:"#b7ff4a",borderWidth:1},
 {label:"Cumulative points",data:points,type:"line",borderColor:"#fff",backgroundColor:"#fff",tension:.3,pointRadius:3}
 ]},options:{responsive:true,plugins:{legend:{labels:{color:"#9ba1ad"}}},scales:{x:{ticks:{color:"#777e89"},grid:{color:"#20242c"}},y:{ticks:{color:"#777e89"},grid:{color:"#20242c"},beginAtZero:true}}}});
}