

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.-qx4E5qh.js","_app/immutable/chunks/index.o2SPQ6UK.js","_app/immutable/chunks/vendor.CSBwUJRv.js"];
export const stylesheets = ["_app/immutable/assets/index.B1eZqg5f.css"];
export const fonts = [];
