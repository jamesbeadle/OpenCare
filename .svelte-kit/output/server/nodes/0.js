

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BjVWOxyp.js","_app/immutable/chunks/index.DRgEkxdp.js","_app/immutable/chunks/vendor.DB4MG1Hy.js"];
export const stylesheets = ["_app/immutable/assets/index.B1c4Tmag.css"];
export const fonts = [];
