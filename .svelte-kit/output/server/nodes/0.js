

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.B2jrdSJa.js","_app/immutable/chunks/index.CxbgWvhF.js","_app/immutable/chunks/vendor.Blms7SOb.js"];
export const stylesheets = ["_app/immutable/assets/index.BkWgrBfz.css"];
export const fonts = [];
