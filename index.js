let homeCount=0
let guestCount=0
function homeOne(){
    homeCount+=1
    document.getElementById('home-points').textContent=homeCount
}
function homeTwo(){
    homeCount+=2
    document.getElementById('home-points').textContent=homeCount
}
function homeThree(){
    homeCount+=3
    document.getElementById('home-points').textContent=homeCount
}
function guestOne(){
    guestCount+=1
    document.getElementById('guest-points').textContent=guestCount
}
function guestTwo(){
    guestCount+=2
    document.getElementById('guest-points').textContent=guestCount
}
function guestThree(){
    guestCount+=3
    document.getElementById('guest-points').textContent=guestCount
}