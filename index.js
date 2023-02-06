let cursor = document.getElementById('cursor')
document.addEventListener('mousemove', (e) => {
    // console.log(e.clientX,e.clientY);
    cursor.style.top = (e.pageY - 15) + 'px'
    cursor.style.left = (e.pageX - 15) + 'px'
})
document.addEventListener('click', () => {
    cursor.classList.add('click')
    setTimeout(() => {
        cursor.classList.remove('click')
    }, 300)
})
