const text=document.querySelector('.center img');
const div=document.querySelector('.center');
let angle=0;
const radius=50;
function range(){
  return Math.floor(Math.random()*256);
}
setInterval(()=>{ div.style.backgroundColor=`rgb(${range()}, ${range()}, ${range()})`;
},10);
function orbit(){
  angle=(angle-30)%360;
  text.style.transform=`rotate(${angle}deg)`;
  requestAnimationFrame(orbit);

}
orbit();
