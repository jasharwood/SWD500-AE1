/* Navigation */
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

/* Pop Up */
window.onload = function popUp() {
    setTimeout(function(){
    document.getElementById('popUpMain').style.display = 'block'; }, 4000);
}

function closePopUp () {
    document.getElementById('popUpMain').style.display = 'none';
}

function thankyouMessage () {
    document.getElementById('thankYouMain').style.display = 'block';
    document.getElementById('popUpMain').style.display = 'none';
}

function closeMessage () {
    document.getElementById('thankYouMain').style.display = 'none';
}


