// script.js

document.addEventListener('DOMContentLoaded', function() {
    const cardContainers = document.querySelectorAll('.card_top');
    const colors = ['#FF0000', '#00008B', '#FF00FF', '#808080', 'Purple', '	Green', '#00008B', '#FF0000'];
    let currentColorIndex = 0;

    function changeCardColors() {
        cardContainers.forEach((card, index) => {
            // setTimeout(() => {
            //     card.style.backgroundColor = colors[currentColorIndex];
            //     currentColorIndex = (currentColorIndex + 1)
            // }, index * 1000); // Change color every second for each card

            card.style.backgroundColor = colors[currentColorIndex];
            currentColorIndex = (currentColorIndex + 1);
        });
    }

    changeCardColors();
    // setInterval(changeCardColors, cardContainers.length * 1000); // Repeat the cycle
});
