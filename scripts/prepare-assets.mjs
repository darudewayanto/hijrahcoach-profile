import sharp from "sharp";
const [S, L, P] = process.argv.slice(2);
const A = `${P}/src/assets`;
const I = `${S}/images`;
// Hero cutout: monochrome, alpha shrunk ~2px to drop the blue screen halo.
{
  const src = sharp(`${S}/scratchpad/cut/speaking.png`);
  const { width, height } = await src.metadata();
  const alpha = await sharp(`${S}/scratchpad/cut/speaking.png`).extractChannel(3).blur(2.2).linear(2.2, -255 * 1.15).raw().toBuffer();
  const rgb = await sharp(`${S}/scratchpad/cut/speaking.png`).removeAlpha().grayscale().modulate({ brightness: 1.04 }).linear(1.08, -6).raw().toBuffer();
  await sharp(rgb, { raw: { width, height, channels: 1 } }).joinChannel(alpha, { raw: { width, height, channels: 1 } }).png().toFile(`${S}/scratchpad/cut/hero-tmp.png`);
  await sharp(`${S}/scratchpad/cut/hero-tmp.png`).trim({ threshold: 1 }).png({ compressionLevel: 9 }).toFile(`${A}/photos/hero-daru.png`);
}
const photos = { 6: "panel-speakers", 7: "class-plaid", 8: "workshop-akhwat", 9: "demo-white", 10: "demo-blue", 11: "group-five", 12: "class-grey", 13: "ustadz-sharing", 14: "flipchart", 15: "class-blue", 16: "summit", 17: "associate-teach", 18: "akhwat-class", 19: "portrait-stage", 20: "class-wide", 21: "mou", 22: "summit-panel", 23: "handshake", 24: "sunset-stage" };
for (const [n, name] of Object.entries(photos)) await sharp(`${I}/${n}.jpg`).jpeg({ quality: 88, mozjpeg: true }).toFile(`${A}/photos/${name}.jpg`);
const logos = {
  "hijrah-hor-gold": `${L}/*Logo Files/Horizontal Version Gold/Hijrah Coach/Hijrah Coach-Hor.png`,
  "hijrah-hor-white": `${L}/*Logo Files/Horizontal Version White/Hijrah Coach/Hijrah Coach-Hor.png`,
  "mark-gold": `${L}/*Logo Files/Logo Mark Gold/Logo Gold Mark Fit.png`,
  "mark-white": `${L}/*Logo Files/Logo Mark White/Logo Mark.png`,
  "ahc": `${L}/aHc/Agile Coaching Logo.png`,
  "abcp": `${L}/ABCP/ABCP.png`,
};
for (const [name, f] of Object.entries(logos)) {
  const m = await sharp(f).metadata();
  const img = sharp(f).trim({ threshold: 8 });
  await img.resize({ width: Math.min(2000, m.width), withoutEnlargement: true }).png({ compressionLevel: 9 }).toFile(`${A}/brand/${name}.png`);
  const o = await sharp(`${A}/brand/${name}.png`).metadata();
  console.log(name, m.width, m.height, m.hasAlpha, "->", o.width, o.height);
}
