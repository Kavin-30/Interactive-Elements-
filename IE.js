function changeColor(button) {
    const randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const colors = ['#007BFF', '#F1C40F', '#E74C3C', '#27AE60', '#9B59B6', '#F39C12'];
    return colors[Math.floor(Math.random() * colors.length)];
}
