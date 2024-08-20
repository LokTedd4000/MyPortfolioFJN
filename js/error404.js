document.addEventListener('mousemove', function(e) {
    var torch = document.querySelector('.torch');
    torch.style.left = e.pageX - 0 + 'px';
    torch.style.top = e.pageY - 0 + 'px';
});
