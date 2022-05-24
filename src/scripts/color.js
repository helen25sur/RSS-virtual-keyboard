const colorSelection = document.getElementById('color-selection');

function hexToRGB(h) {
  let r = 0;
  let g = 0;
  let b = 0;

  // 3 digits
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;

    // 6 digits
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }

  return {
    value: `rgb(${+r}, ${+g}, ${+b})`,
    red: +r,
    green: +g,
    blue: +b,
  };
}

function RGBToHSL(rgb) {
  // Make r, g, and b fractions of 1
  let r = rgb.red;
  let g = rgb.green;
  let b = rgb.blue;
  r /= 255;
  g /= 255;
  b /= 255;
  // Find greatest and smallest channel values
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  // Calculate hue
  // No difference
  if (delta === 0) {
    h = 0;
  } else if (cmax === r) { // Red is max
    h = ((g - b) / delta) % 6;
  } else if (cmax === g) { // Green is max
    h = (b - r) / delta + 2;
  } else { // Blue is max
    h = (r - g) / delta + 4;
  }
  h = Math.round(h * 60);
  // Make negative hues positive behind 360°
  if (h < 0) {
    h += 360;
  }
  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return {
    value: `hsl(${h}, ${s}%, ${l}%)`,
    hue: h,
    saturation: `${s}%`,
    lightness: `${l}%`,
  };
}

colorSelection.addEventListener('input', (event) => {
  const valueColor = event.target.value;
  const colorRGB = hexToRGB(valueColor);
  const colorHSL = RGBToHSL(colorRGB);
  document.body.style.setProperty('--font-color-hue', colorHSL.hue);
  document.body.style.setProperty('--font-color-saturation', colorHSL.saturation);
  document.body.style.setProperty('--font-color-lightness', colorHSL.lightness);
});
