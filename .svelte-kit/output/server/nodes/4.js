

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BrOcjMq2.js","_app/immutable/chunks/index.BZQaw6hA.js","_app/immutable/chunks/vendor.ULrrqKe-.js"];
export const stylesheets = ["_app/immutable/assets/index.BxBnBMjC.css"];
export const fonts = [];