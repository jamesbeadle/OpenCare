

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CuVMZmqb.js","_app/immutable/chunks/index.BZQaw6hA.js","_app/immutable/chunks/vendor.ULrrqKe-.js"];
export const stylesheets = ["_app/immutable/assets/index.BxBnBMjC.css"];
export const fonts = [];
