const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const direction = document.getElementById('direction');
const preview = document.getElementById('preview');
const cssOutput = document.getElementById('css-output');

function updateGradient() {
    const gradientDirection = direction.value;
    const gradientColor1 = color1.value;
    const gradientColor2 = color2.value;

    const gradient = `linear-gradient(${gradientDirection}deg, ${gradientColor1}, ${gradientColor2})`;

    preview.style.background = gradient;
    cssOutput.value = `background: ${gradient};`;
}

color1.addEventListener('input', updateGradient);
color2.addEventListener('input', updateGradient);
direction.addEventListener('input', updateGradient);

updateGradient();
