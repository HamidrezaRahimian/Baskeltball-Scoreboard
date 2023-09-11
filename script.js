let teamHome =document.getElementById("home-pts");
let countHome = 0 ;
let teamGuest =document.getElementById("guest-pts");
let countGuest = 0 ;


function homeAddPoint (){
    countHome += 1 ;
    teamHome.innerText = countHome
}
function homeAddTwoPoints (){
    countHome += 2 ;
    teamHome.innerText = countHome
}
function homeAddThreePoints (){
    countHome += 3 ;
    teamHome.innerText = countHome
}

function guestAddPoint (){
    countGuest += 1 ;
    teamGuest.innerText = countGuest
}
function guestAddTwoPoints (){
    countGuest += 2 ;
    teamGuest.innerText = countGuest
}
function guestAddThreePoints (){
    countGuest += 3 ;
    teamGuest.innerText = countGuest}


    function resetall(){
        countHome = 0 ;
        teamHome.innerText = countHome
        countGuest= 0 ;
        teamGuest.innerText = countGuest
    }