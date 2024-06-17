

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.UVbo36RM.js","_app/immutable/chunks/index.BZQaw6hA.js","_app/immutable/chunks/vendor.ULrrqKe-.js"];
export const stylesheets = ["_app/immutable/assets/index.BxBnBMjC.css"];
export const fonts = [];
