let streak = localStorage.getItem("streak") || 0;

document.getElementById("streak").innerHTML = streak + " 🔥";

function toggleDarkMode(){

document.body.classList.toggle("dark");

}

function predictHealth(){

let study = document.getElementById("study").value;
let exercise = document.getElementById("exercise").value;
let sleep = document.getElementById("sleep").value;
let food = document.getElementById("food").value;

let score = 0;

if(exercise >= 30) score += 30;
if(sleep >= 7) score += 25;
if(food >= 3) score += 25;
if(study >= 3) score += 20;

let health;

if(score >= 80)
health="Excellent Health";

else if(score >= 60)
health="Good Health";

else
health="Lifestyle Needs Improvement";

document.getElementById("result").innerHTML =
"Health Score: "+score+"% | "+health;

document.getElementById("summaryScore").innerHTML = score+"%";

/* DAILY STREAK */

if(score>=60){
streak++;
}else{
streak=0;
}

localStorage.setItem("streak",streak);

document.getElementById("streak").innerHTML = streak + " 🔥";

dietSuggestion(food);

}

function predictAIHealth(){

let study = Number(document.getElementById("study").value);
let exercise = Number(document.getElementById("exercise").value);
let sleep = Number(document.getElementById("sleep").value);
let food = Number(document.getElementById("food").value);
let water = Number(document.getElementById("waterInput").value);

let score=0;

if(exercise>=30) score+=20;
if(sleep>=7) score+=20;
if(food>=3) score+=20;
if(water>=6) score+=20;
if(study>=3) score+=20;

let prediction;

if(score>=85)
prediction="Excellent Lifestyle";

else if(score>=65)
prediction="Good Health";

else if(score>=45)
prediction="Moderate Health";

else
prediction="Poor Lifestyle";

document.getElementById("loading").style.display="block";
document.getElementById("aiResult").innerHTML="";

setTimeout(function(){

document.getElementById("loading").style.display="none";

document.getElementById("aiResult").innerHTML=
"AI Prediction: "+prediction;

document.getElementById("meterPercent").innerHTML=score+"%";

document.getElementById("meterPercentBox").innerHTML=score+"%";

document.getElementById("healthBar").style.width=score+"%";

},2000);

}

function calculateBMI(){

let height=document.getElementById("height").value/100;
let weight=document.getElementById("weight").value;

let bmi=weight/(height*height);

document.getElementById("bmiResult").innerHTML=
"Your BMI: "+bmi.toFixed(2);

document.getElementById("summaryBMI").innerHTML=
bmi.toFixed(2);

}

function dietSuggestion(food){

let suggestion;

if(food>=3)
suggestion="Good diet! Keep eating healthy.";

else
suggestion="Increase fruits and vegetables.";

document.getElementById("diet").innerHTML=suggestion;

}

const ctx=document.getElementById('healthChart');

new Chart(ctx,{
type:'line',

data:{
labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],

datasets:[
{
label:'Exercise Minutes',
data:[30,45,20,60,40,50,35],
borderColor:'green',
fill:false
},
{
label:'Sleep Hours',
data:[7,6,8,7,7.5,8,6.5],
borderColor:'blue',
fill:false
}
]
},

options:{
responsive:true
}

});