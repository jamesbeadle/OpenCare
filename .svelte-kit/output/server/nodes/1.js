

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BDhadwZz.js","_app/immutable/chunks/index.CxbgWvhF.js","_app/immutable/chunks/vendor.Blms7SOb.js"];
export const stylesheets = ["_app/immutable/assets/index.BkWgrBfz.css"];
export const fonts = [];
