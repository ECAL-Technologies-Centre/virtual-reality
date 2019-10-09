// Hides the cursor when idle

var j;
var justHidden = false;
const elHTML = document.querySelector('html');

document.addEventListener('mousemove', () => {
    if (!justHidden) {
        justHidden = false;
        console.log('move');
        clearTimeout(j);
        elHTML.style.cursor = 'default';
        j = setTimeout(hide, 60 * 1000);
    }
});

function hide() {
    elHTML.style.cursor = 'none';
    justHidden = true;
    setTimeout(function() {
        justHidden = false;
    }, 500);
}
