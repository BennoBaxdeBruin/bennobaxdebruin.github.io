const trackingDiv = document.getElementById('tracking');
const clicks = 0
const form = document.getElementById('form');
trackingDiv.innerText = 'hallo';

document.body.addEventListener('click', (e) => {
    clicks += 1;
})

