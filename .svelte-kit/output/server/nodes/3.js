

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/private-agencies/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.DYhTaz6-.js","_app/immutable/chunks/index.CxbgWvhF.js","_app/immutable/chunks/vendor.Blms7SOb.js"];
export const stylesheets = ["_app/immutable/assets/index.BkWgrBfz.css"];
export const fonts = [];
