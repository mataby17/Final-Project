function updateClock(){
var now=new Date();
var dname=now.getDate(),
    month=now.getMonth(),
    datenum=now.getDate(),
    yr=now.getFullYear()
    hours=now.getHours(),
    min=now.getMinutes(),
    sec=now.getSeconds(),
    per="AM";
    if(hours==0){
        hours=12;
    }
    if(hours>12){
        hours=hours-12;
        per ="PM";
    }
    Number.prototype.pad =function(digits){
        for(var n=this.toString();n.length<digits;n=0+n);
        return n;
    }
    var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    var week=["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];
    var data =["dayname","month","daynum","year","hour","minutes","seconds","period"];
    var values=[week[dname],months[month],datenum,yr,hours,min,sec,per];
    for(var i =0;i<data.length;i++)
    document.getElementById(data[i]).firstChild.nodeValue = values[i];
}
function initClock(){
    updateClock();
    window.setInterval("updateClock()",1);
}

var i =0;
var images=[];
var time = 2000;
images[0]= 'Houseboats.jpg';
images[1]='Kerala.jpg';
images[2]='Munnar.jpg';
images[3]='image3.jpg';
images[4]='image4.jpg';
images[5]='image5.jpg'


function changeImg(){
    document.picture.src = images[i];
    if(i<images.length -1){
        i++;
    }else{
        i=0;

    }
    setTimeout("changeImg()",time);
}
window.onload = changeImg;

function newDoc(){
    window.location.assign("https://www.indiatoday.in/india/story/then-and-now-photos-show-how-floods-have-devastated-kerala-1322294-2018-08-24")
}
function great(obj){
    obj.innerHTML = "Welcome to Kerala!"
}
function welcome(obj){
    obj.innerHTML="Like this place?!"
}

function testForm(){
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const error = document.getElementById("error");
    var text;
    
    error.style.padding = "20px"
    if (firstname.length < 2){
        text ="Please enter valid first name";
        error.innerHTML = text;
        return false;
    }
    if (lastname.length < 2){
        text ="Please enter valid last name";
        error.innerHTML = text;
        return false;
    }
    if (phone.length<10 && isNaN(phone)){
        text ="Please enter valid phone number";
        error.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1){
        text ="Please enter valid email address";
        error.innerHTML = text;
        return false;
    }
    if (message.length<15){
        text ="Please type alteast 15 character feedback";
        error.innerHTML = text;
        return false;
    }
    alert("Thank you  "+ firstname);
    alert("Information Submitted Sucessfully!");
    return true;
}


