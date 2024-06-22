

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DxprTPyr.js","_app/immutable/chunks/index.o2SPQ6UK.js","_app/immutable/chunks/vendor.CSBwUJRv.js"];
export const stylesheets = ["_app/immutable/assets/index.B1eZqg5f.css"];
export const fonts = [];
