

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/whitepaper/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.D_6ERt1p.js","_app/immutable/chunks/index.DRgEkxdp.js","_app/immutable/chunks/vendor.DB4MG1Hy.js"];
export const stylesheets = ["_app/immutable/assets/index.B1c4Tmag.css"];
export const fonts = [];
