var checkButton = document.getElementById('button');
document.getElementById('dateString').value
if(checkButton){
checkButton.addEventListener('click', daysTill);
}

function daysTill(dateString) {
    var ch = new Date(document.getElementById('dateString').value);
    var today = new Date();
    var diff = ch.getTime() - today.getTime();
    var getTime = Math.ceil(diff / 1000 / 3600 / 24);
    //return getTime;
    var display = document.getElementById('days').textContent = getTime;
}
