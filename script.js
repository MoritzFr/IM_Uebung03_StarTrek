window.addEventListener('load', main);

function main() {
    const b1 = document.getElementById('b1');
    const b2 = document.getElementById('b2');
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const bitbsp = document.getElementById('bitbsp');
    const outbsp = document.getElementById('outbsp');

p2.style.display = 'none';
outbsp.style.display = 'none';
b1.className = "button disabled"

b1.addEventListener('click', (e) => {
    p1.style.display = 'block';
    p2.style.display = 'none';
    bitbsp.style.display = 'block';
    outbsp.style.display = 'none';
    b1.className = "button disabled";
    b2.className = "button";
})

b2.addEventListener('click', (e) => {
    p1.style.display = 'none';
    p2.style.display = 'block';
    bitbsp.style.display = 'none';
    outbsp.style.display = 'block';
    b2.className = "button disabled";
    b1.className = "button";
})

}