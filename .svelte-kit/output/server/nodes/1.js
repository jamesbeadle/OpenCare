

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.B51nnKpH.js","_app/immutable/chunks/index.Bjre51Qd.js","_app/immutable/chunks/vendor.DIe5n715.js"];
export const stylesheets = ["_app/immutable/assets/index.DwUjichf.css"];
export const fonts = [];
