

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BcZt2DUi.js","_app/immutable/chunks/index.CM1lh16n.js","_app/immutable/chunks/vendor.ChYYjGrd.js"];
export const stylesheets = ["_app/immutable/assets/index.BxBnBMjC.css"];
export const fonts = [];
