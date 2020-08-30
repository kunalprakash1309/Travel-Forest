function enterSite(){
    console.log("hello")
    document.querySelector('#landing').style.transform = "translateX(200vw)"
    document.querySelector('#dimmed-bg').style.transform = "translate(0)";
    document.querySelector('#dimmed-bg').style.visibility = "visible";

    document.querySelector('#full-site').style.transform = "translate(0)";
    document.querySelector('#full-site').style.visibility = "visible";
}


function showSideBar(){
    document.querySelector('#register-side-bar').style.transform = "translateX(0)";
    document.querySelector('#visible-section').style.visibility = "hidden";
    document.querySelector('#form').style.visibility = "visible";
}

function hideSideBar(){

    document.querySelector('#register-side-bar').style.transform = "translateX(28vw)";
    document.querySelector('#visible-section').style.visibility = "visible";
    document.querySelector('#form').style.visibility = "hidden";
}

document.querySelector('#register-side-bar').addEventListener('mouseenter', showSideBar);
document.querySelector('#register-side-bar').addEventListener('mouseleave', hideSideBar);


function updateUsers(){
    let currentUsers = getRandom(100000, 200000);


    function addUsers(currentUsers){

        currentUsers = String(currentUsers)
        currentUsers = currentUsers.replace(",","");
        
        currentUsers = Number(currentUsers)
        currentUsers++;

        currentUsers = String(currentUsers);

        let t = addComma(currentUsers)

        function addComma(currentUsers){
            totalUsers = currentUsers.slice(0, 3) + "," + currentUsers.slice(3,6);
            return totalUsers;
        }

        document.querySelector('#total-users').innerText = t

        setTimeout(function(){
            addUsers(t)
        },getRandom(200, 2000))
    }

    addUsers(currentUsers)

    function getRandom(min, max){
        return Math.floor(Math.random()*(max-min) + min)
    }
}

updateUsers()