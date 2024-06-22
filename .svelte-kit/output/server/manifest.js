export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".ic-assets.json",".well-known/ic-domains",".well-known/ii-alternative-origins","Lato-Regular.woff2","background.jpg","favicons/.DS_Store","favicons/apple-touch-icon.png","favicons/browserconfig.xml","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/icon-192x192.png","favicons/icon-512x512.png","favicons/mstile-150x150.png","favicons/safari-pinned-tab.svg","manifest.webmanifest","meta-share.jpg","placeholder.png"]),
	mimeTypes: {".json":"application/json",".woff2":"font/woff2",".jpg":"image/jpeg",".png":"image/png",".xml":"text/xml",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.ZrHGX_ML.js","app":"_app/immutable/entry/app.BqA9Wqpk.js","imports":["_app/immutable/entry/start.ZrHGX_ML.js","_app/immutable/chunks/index.o2SPQ6UK.js","_app/immutable/chunks/vendor.CSBwUJRv.js","_app/immutable/entry/app.BqA9Wqpk.js","_app/immutable/chunks/index.o2SPQ6UK.js","_app/immutable/chunks/vendor.CSBwUJRv.js"],"stylesheets":["_app/immutable/assets/index.B1eZqg5f.css","_app/immutable/assets/index.B1eZqg5f.css"],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/private-agencies",
				pattern: /^\/private-agencies\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/whitepaper",
				pattern: /^\/whitepaper\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
