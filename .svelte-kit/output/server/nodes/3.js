

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/private-agencies/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.eTnrPFF5.js","_app/immutable/chunks/index.o2SPQ6UK.js","_app/immutable/chunks/vendor.CSBwUJRv.js"];
export const stylesheets = ["_app/immutable/assets/index.B1eZqg5f.css"];
export const fonts = [];
