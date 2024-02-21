

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.I6F9IGeW.js","_app/immutable/chunks/scheduler.DGpLaggK.js","_app/immutable/chunks/index.CeTnxqAJ.js","_app/immutable/chunks/entry.DC15ZIp1.js"];
export const stylesheets = [];
export const fonts = [];
