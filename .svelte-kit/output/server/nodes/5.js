

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/rules/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DwqUx1YK.js","_app/immutable/chunks/index.CM1lh16n.js","_app/immutable/chunks/vendor.ChYYjGrd.js"];
export const stylesheets = ["_app/immutable/assets/index.BxBnBMjC.css"];
export const fonts = [];
