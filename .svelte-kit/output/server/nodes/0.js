

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.6KoJ9qGh.js","_app/immutable/chunks/index.Bjre51Qd.js","_app/immutable/chunks/vendor.DIe5n715.js"];
export const stylesheets = ["_app/immutable/assets/index.DwUjichf.css"];
export const fonts = [];
