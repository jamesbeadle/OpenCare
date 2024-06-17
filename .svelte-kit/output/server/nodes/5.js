

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/rules/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DMAl_Sm4.js","_app/immutable/chunks/index.BZQaw6hA.js","_app/immutable/chunks/vendor.ULrrqKe-.js"];
export const stylesheets = ["_app/immutable/assets/index.BxBnBMjC.css"];
export const fonts = [];
