export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","kayu.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.f1472283.js","imports":["_app/immutable/entry/start.f1472283.js","_app/immutable/chunks/index.e40f6d85.js","_app/immutable/chunks/singletons.bcd27c54.js","_app/immutable/chunks/index.cf89884c.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.0eb59152.js","imports":["_app/immutable/entry/app.0eb59152.js","_app/immutable/chunks/index.e40f6d85.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
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
				endpoint: () => import('./entries/endpoints/api/create/_server.ts.js')
			},
			{
				id: "/api/destroy",
				pattern: /^\/api\/destroy\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/destroy/_server.ts.js')
			},
			{
				id: "/api/read",
				pattern: /^\/api\/read\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/read/_server.ts.js')
			},
			{
				id: "/api/update",
				pattern: /^\/api\/update\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/update/_server.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
