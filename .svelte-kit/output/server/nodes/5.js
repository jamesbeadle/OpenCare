

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/whitepaper/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DOGPT7xx.js","_app/immutable/chunks/index.Bjre51Qd.js","_app/immutable/chunks/vendor.DIe5n715.js"];
export const stylesheets = ["_app/immutable/assets/index.DwUjichf.css"];
export const fonts = [];
