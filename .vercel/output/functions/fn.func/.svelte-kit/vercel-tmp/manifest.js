export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","kayu.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.e3c48de4.js","imports":["_app/immutable/entry/start.e3c48de4.js","_app/immutable/chunks/index.e40f6d85.js","_app/immutable/chunks/singletons.bf756a3a.js","_app/immutable/chunks/index.cf89884c.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.e7be6709.js","imports":["_app/immutable/entry/app.e7be6709.js","_app/immutable/chunks/index.e40f6d85.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/create",
				pattern: /^\/api\/create\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/create/_server.ts.js')
			},
			{
				id: "/api/destroy",
				pattern: /^\/api\/destroy\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/destroy/_server.ts.js')
			},
			{
				id: "/api/read",
				pattern: /^\/api\/read\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/read/_server.ts.js')
			},
			{
				id: "/api/update",
				pattern: /^\/api\/update\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/update/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
