

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/private-agencies/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.ON7tWWqV.js","_app/immutable/chunks/index.BZQaw6hA.js","_app/immutable/chunks/vendor.ULrrqKe-.js"];
export const stylesheets = ["_app/immutable/assets/index.BxBnBMjC.css"];
export const fonts = [];
