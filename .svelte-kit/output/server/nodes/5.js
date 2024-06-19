

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/whitepaper/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BH2iBFPJ.js","_app/immutable/chunks/index.CxbgWvhF.js","_app/immutable/chunks/vendor.Blms7SOb.js"];
export const stylesheets = ["_app/immutable/assets/index.BkWgrBfz.css"];
export const fonts = [];
