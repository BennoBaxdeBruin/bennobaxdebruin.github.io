const trackingDiv = document.getElementById('tracking');
const clicks = 0
const form = document.getElementById('form');

document.body.addEventListener('click', (e) => {
    clicks += 1;
})

form.addEventListener('submit', (e) => {
    e.defaultPrevented();
    trackingDiv.innerText('clicks: ' + clicks);
})