

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.B8Xhp42v.js","_app/immutable/chunks/index.Bjre51Qd.js","_app/immutable/chunks/vendor.DIe5n715.js"];
export const stylesheets = ["_app/immutable/assets/index.DwUjichf.css"];
export const fonts = [];
