import fs from 'fs';

try {
  const imageBuffer = fs.readFileSync('public/favicon.png');
  const base64Data = imageBuffer.toString('base64');
  const svg = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circleView">
      <circle cx="256" cy="256" r="256" fill="#FFFFFF" />
    </clipPath>
  </defs>
  <image width="512" height="512" href="data:image/png;base64,${base64Data}" clip-path="url(#circleView)" preserveAspectRatio="xMidYMid slice" />
</svg>`;
  fs.writeFileSync('public/favicon.svg', svg);
  console.log('Successfully generated public/favicon.svg');
} catch (e) {
  console.error('Error generating SVG:', e);
}
