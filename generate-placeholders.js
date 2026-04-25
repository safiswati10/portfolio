#!/usr/bin/env node
// Run this script to generate placeholder images
// node generate-placeholders.js

const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'frontend', 'public', 'images');
if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

// Simple SVG placeholder generator
function makeSVG(text, bg, accent, w, h) {
  return `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${bg}"/>
      <stop offset="100%" style="stop-color:${accent}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
    font-family="Arial, sans-serif" font-size="${w > 300 ? 32 : 24}" font-weight="bold" fill="white" opacity="0.6">
    ${text}
  </text>
</svg>`;
}

const placeholders = [
  { name: 'profile.jpg', text: 'SR', bg: '#050a14', accent: '#0a1628', w: 400, h: 400 },
  { name: 'project1.jpg', text: 'Table Designer UI', bg: '#050a14', accent: '#001a2e', w: 800, h: 450 },
  { name: 'project1-2.jpg', text: 'Table Designer UI', bg: '#001a1a', accent: '#050a14', w: 800, h: 450 },
  { name: 'project2.jpg', text: 'Restaurant App', bg: '#0a0514', accent: '#14003e', w: 800, h: 450 },
  { name: 'project2-2.jpg', text: 'Restaurant App', bg: '#14003e', accent: '#0a0514', w: 800, h: 450 },
];

placeholders.forEach(({ name, text, bg, accent, w, h }) => {
  const svgPath = path.join(imgDir, name.replace('.jpg', '.svg'));
  fs.writeFileSync(svgPath, makeSVG(text, bg, accent, w, h));
  console.log(`✅ Created: ${name.replace('.jpg', '.svg')}`);
});

console.log('\n📌 SVG placeholders created in frontend/public/images/');
console.log('📌 Replace with real images (profile.jpg, project1.jpg, project2.jpg)');
console.log('📌 Update src in portfolioData.js to use .svg if needed');
