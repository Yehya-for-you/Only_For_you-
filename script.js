const target=new Date('2027-02-07T00:00:00');
function tick(){let diff=target-new Date();if(diff<=0){['days','hours','minutes','seconds'].forEach(x=>document.getElementById(x).textContent='0');document.getElementById('countNote').textContent='Heute ist dein Tag, mein Häschen! Alles Liebe zum Geburtstag! ♡';return}
let d=Math.floor(diff/86400000),h=Math.floor(diff%86400000/3600000),m=Math.floor(diff%3600000/60000),s=Math.floor(diff%60000/1000);
document.getElementById('days').textContent=d;document.getElementById('hours').textContent=String(h).padStart(2,'0');document.getElementById('minutes').textContent=String(m).padStart(2,'0');document.getElementById('seconds').textContent=String(s).padStart(2,'0')}
tick();setInterval(tick,1000);
function openSecret(){document.getElementById('envelope').classList.toggle('open');document.getElementById('secret').classList.toggle('show');}
document.getElementById('envelope').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openSecret()}});
async function toggleMusic(){const a=document.getElementById('audio'),b=document.getElementById('musicButton');if(a.paused){try{await a.play();b.textContent='Ⅱ Musik pausieren'}catch(e){b.textContent='♫ Erneut abspielen';alert('Die Musik konnte nicht gestartet werden. Bitte tippe noch einmal auf den Musik-Button.')}}else{a.pause();b.textContent='♫ Musik abspielen'}}
document.getElementById('audio').addEventListener('ended',()=>document.getElementById('musicButton').textContent='♫ Musik abspielen');
const qs=[
{q:'Was haben wir zusammen gespielt, während wir stundenlang telefoniert haben?',a:['Minecraft','Roblox ♡','Fortnite'],c:1,why:'Genau! Unsere langen Telefonate und Roblox-Abende. ♡'},
{q:'Was hat mein Herz beim ersten Mal besonders berührt?',a:['Deine erste Liebesbotschaft','Ein Geschenk','Ein Filmabend'],c:0,why:'Deine erste Liebesbotschaft — ein Moment, den ich nie vergesse. ♡'},
{q:'Wie lange gehen wir schon gemeinsam unseren Weg?',a:['Ein paar Wochen','Mehr als drei Jahre','Ein halbes Jahr'],c:1,why:'Mehr als drei Jahre voller Erinnerungen — und hoffentlich noch unendlich viele mehr. ♡'}
];let qi=0;
function choose(btn,ok){document.querySelectorAll('.answer').forEach(b=>b.disabled=true);btn.classList.add(ok?'correct':'wrong');if(!ok)document.querySelectorAll('.answer')[qs[qi].c].classList.add('correct');document.getElementById('quizResult').textContent=ok?qs[qi].why:'Fast, mein Häschen! Die richtige Antwort ist markiert. ♡';document.getElementById('nextQ').style.display='inline-block'}
function nextQuestion(){qi++;if(qi>=qs.length){document.getElementById('question').textContent='Du bist meine Lieblingsperson — heute und jeden Tag. ♡';document.getElementById('answers').innerHTML='';document.getElementById('quizResult').textContent='Danke, dass du unsere Erinnerungen mit mir teilst!';document.getElementById('nextQ').style.display='none';return}
let q=qs[qi];document.getElementById('question').textContent=q.q;document.getElementById('answers').innerHTML=q.a.map((a,i)=>`<button class="answer" onclick="choose(this,${i===q.c})">${a}</button>`).join('');document.getElementById('quizResult').textContent='';document.getElementById('nextQ').style.display='none'}
function surprise(){document.getElementById('surpriseText').textContent='Ich liebe dich, meine kleine Leo. Auf unser Für immer. ♡';for(let i=0;i<24;i++)setTimeout(makeHeart,i*90)}
function makeHeart(){let h=document.createElement('div');h.className='heart';h.textContent=['♡','♥','✧'][Math.floor(Math.random()*3)];h.style.left=Math.random()*100+'vw';h.style.fontSize=(14+Math.random()*22)+'px';h.style.animationDuration=(3+Math.random()*3)+'s';document.body.appendChild(h);setTimeout(()=>h.remove(),6500)}
setInterval(()=>{if(Math.random()<.45)makeHeart()},1800);
