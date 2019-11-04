window.addEventListener('keydown',function(e){
    document.getElementById('key').textContent = e.key;
    document.getElementById('key_code').textContent = e.keyCode;
    document.getElementById('result').textContent =e.keyCode;
    document.getElementById('code').textContent = `Key ${e.key}`;
})