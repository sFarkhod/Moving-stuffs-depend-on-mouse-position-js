const eyes = document.querySelectorAll('.eye');
const eyes_l = document.querySelectorAll('.eye_l');


document.addEventListener('mousemove', (e)=> {
    // console.log(e)

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const monkey = document.getElementById('monkey');
    const rect = monkey.getBoundingClientRect();
    const monkeyX = rect.left + rect.width / 2
    const monkeyY = rect.top + rect.height / 2

    const angleDeg = angle(mouseX,mouseY,monkeyX,monkeyY);

    console.log(angleDeg);

    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`
    })

    eyes_l.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`
    })
})

function angle(cx,cy,ex,ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy,dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}