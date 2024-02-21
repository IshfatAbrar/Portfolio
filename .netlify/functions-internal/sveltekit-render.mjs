import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/Ishfat.jpg","assets/particles.json","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bk4TloxQ.js","app":"_app/immutable/entry/app.BAn2WjNz.js","imports":["_app/immutable/entry/start.Bk4TloxQ.js","_app/immutable/chunks/entry.DC15ZIp1.js","_app/immutable/chunks/scheduler.DGpLaggK.js","_app/immutable/entry/app.BAn2WjNz.js","_app/immutable/chunks/scheduler.DGpLaggK.js","_app/immutable/chunks/index.CeTnxqAJ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
