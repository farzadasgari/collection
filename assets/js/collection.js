document.addEventListener("DOMContentLoaded", function() {
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
document.body.style.paddingTop = navbarHeight + 'px';
});

document.getElementById('chatButton').addEventListener('click', function() {
    var chatBox = document.getElementById('chatBox');
    chatBox.classList.toggle('show');
});