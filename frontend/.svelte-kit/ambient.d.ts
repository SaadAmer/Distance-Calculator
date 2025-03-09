
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SURGERY_SERVICE_DB_USER: string;
	export const COGNITO_ACCESS_TOKEN: string;
	export const NVM_INC: string;
	export const IDS_API_ENDPOINT: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const NVM_CD_FLAGS: string;
	export const TERM: string;
	export const SURGERY_SERVICE_DB_PASSWORD: string;
	export const SHELL: string;
	export const VC_PASSWORD: string;
	export const MYV_API_AUTH_TOKEN_ENDPOINT: string;
	export const CMR_PYPI_UNRESTRICTED_LOCATION: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const npm_config_email: string;
	export const TERM_PROGRAM_VERSION: string;
	export const MYV_DB_PASSWORD: string;
	export const ZDOTDIR: string;
	export const AWS_SESSION_TOKEN: string;
	export const PIP_INDEX_URL: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const MallocNanoZone: string;
	export const COLOR: string;
	export const npm_config_noproxy: string;
	export const npm_config_registry: string;
	export const npm_config_local_prefix: string;
	export const VC_URL: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const COMMAND_MODE: string;
	export const npm_config_globalconfig: string;
	export const npm_config_always_auth: string;
	export const SSH_AUTH_SOCK: string;
	export const VSCODE_PROFILE_INITIALIZED: string;
	export const COGNITO_APP_CLIENT_ID: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const MYV_API_AUTH_APP_CLIENT_ID: string;
	export const CDS_DB_PORT: string;
	export const CDS_DB_SCHEMA: string;
	export const MYV_DB_USER: string;
	export const SURGERY_SERVICE_DB_URL: string;
	export const COGNITO_APP_CLIENT_SECRET: string;
	export const VI_PASSWORD: string;
	export const PATH: string;
	export const npm_package_json: string;
	export const _: string;
	export const VI_USER: string;
	export const MYV_API_ENDPOINT: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const USER_ZDOTDIR: string;
	export const __CFBundleIdentifier: string;
	export const npm_command: string;
	export const PWD: string;
	export const POETRY_HTTP_BASIC_CMR_PYPI_UNRESTRICTED_PASSWORD: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const AWS_SECRET_ACCESS_KEY: string;
	export const REFRESH_TOKEN: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const ACCESS_TOKEN: string;
	export const CDS_DB_HOST: string;
	export const ANALYTICAL_PLATFORM_URL: string;
	export const npm_config_npm_version: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const XPC_FLAGS: string;
	export const VI_USER_PASSWORD: string;
	export const SURGERY_SERVICE_EXTERNAL_TOPIC_ARN: string;
	export const npm_config_node_gyp: string;
	export const STAGE: string;
	export const npm_package_version: string;
	export const HISTCONTROL: string;
	export const XPC_SERVICE_NAME: string;
	export const VSCODE_INJECTION: string;
	export const VC_USERNAME: string;
	export const AWS_ACCESS_KEY_ID: string;
	export const VIP_PERIOD_SERVICE_URL: string;
	export const AP_REFRESH_TOKEN: string;
	export const POETRY_HTTP_BASIC_CMR_PYPI_UNRESTRICTED_USERNAME: string;
	export const SHLVL: string;
	export const HOME: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const SURGERY_SERVICE_INTERNAL_TOPIC_ARN: string;
	export const HOMEBREW_PREFIX: string;
	export const CDS_DB_USER: string;
	export const CDS_DB_NAME: string;
	export const CMR_PYPI_UNRESTRICTED_PASSWORD: string;
	export const npm_config_cache: string;
	export const CDS_DB_PASSWORD: string;
	export const MYV_API_AUTH_APP_CLIENT_SECRET: string;
	export const MYV_DB_URL: string;
	export const LOGNAME: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const COGNITO_TOKEN_ENDPOINT: string;
	export const VI_REFRESH_TOKEN: string;
	export const VI_USER_EMAIL: string;
	export const COGNITO_REFRESH_TOKEN: string;
	export const NVM_BIN: string;
	export const npm_config_user_agent: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const GIT_ASKPASS: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const VI_API_BASE_URL: string;
	export const CMR_PYPI_UNRESTRICTED_USERNAME: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const COLORTERM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SURGERY_SERVICE_DB_USER: string;
		COGNITO_ACCESS_TOKEN: string;
		NVM_INC: string;
		IDS_API_ENDPOINT: string;
		TERM_PROGRAM: string;
		NODE: string;
		INIT_CWD: string;
		NVM_CD_FLAGS: string;
		TERM: string;
		SURGERY_SERVICE_DB_PASSWORD: string;
		SHELL: string;
		VC_PASSWORD: string;
		MYV_API_AUTH_TOKEN_ENDPOINT: string;
		CMR_PYPI_UNRESTRICTED_LOCATION: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		npm_config_email: string;
		TERM_PROGRAM_VERSION: string;
		MYV_DB_PASSWORD: string;
		ZDOTDIR: string;
		AWS_SESSION_TOKEN: string;
		PIP_INDEX_URL: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		MallocNanoZone: string;
		COLOR: string;
		npm_config_noproxy: string;
		npm_config_registry: string;
		npm_config_local_prefix: string;
		VC_URL: string;
		NVM_DIR: string;
		USER: string;
		COMMAND_MODE: string;
		npm_config_globalconfig: string;
		npm_config_always_auth: string;
		SSH_AUTH_SOCK: string;
		VSCODE_PROFILE_INITIALIZED: string;
		COGNITO_APP_CLIENT_ID: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		MYV_API_AUTH_APP_CLIENT_ID: string;
		CDS_DB_PORT: string;
		CDS_DB_SCHEMA: string;
		MYV_DB_USER: string;
		SURGERY_SERVICE_DB_URL: string;
		COGNITO_APP_CLIENT_SECRET: string;
		VI_PASSWORD: string;
		PATH: string;
		npm_package_json: string;
		_: string;
		VI_USER: string;
		MYV_API_ENDPOINT: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		USER_ZDOTDIR: string;
		__CFBundleIdentifier: string;
		npm_command: string;
		PWD: string;
		POETRY_HTTP_BASIC_CMR_PYPI_UNRESTRICTED_PASSWORD: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		AWS_SECRET_ACCESS_KEY: string;
		REFRESH_TOKEN: string;
		npm_package_name: string;
		LANG: string;
		ACCESS_TOKEN: string;
		CDS_DB_HOST: string;
		ANALYTICAL_PLATFORM_URL: string;
		npm_config_npm_version: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		XPC_FLAGS: string;
		VI_USER_PASSWORD: string;
		SURGERY_SERVICE_EXTERNAL_TOPIC_ARN: string;
		npm_config_node_gyp: string;
		STAGE: string;
		npm_package_version: string;
		HISTCONTROL: string;
		XPC_SERVICE_NAME: string;
		VSCODE_INJECTION: string;
		VC_USERNAME: string;
		AWS_ACCESS_KEY_ID: string;
		VIP_PERIOD_SERVICE_URL: string;
		AP_REFRESH_TOKEN: string;
		POETRY_HTTP_BASIC_CMR_PYPI_UNRESTRICTED_USERNAME: string;
		SHLVL: string;
		HOME: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		SURGERY_SERVICE_INTERNAL_TOPIC_ARN: string;
		HOMEBREW_PREFIX: string;
		CDS_DB_USER: string;
		CDS_DB_NAME: string;
		CMR_PYPI_UNRESTRICTED_PASSWORD: string;
		npm_config_cache: string;
		CDS_DB_PASSWORD: string;
		MYV_API_AUTH_APP_CLIENT_SECRET: string;
		MYV_DB_URL: string;
		LOGNAME: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_IPC_HANDLE: string;
		COGNITO_TOKEN_ENDPOINT: string;
		VI_REFRESH_TOKEN: string;
		VI_USER_EMAIL: string;
		COGNITO_REFRESH_TOKEN: string;
		NVM_BIN: string;
		npm_config_user_agent: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		GIT_ASKPASS: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		VI_API_BASE_URL: string;
		CMR_PYPI_UNRESTRICTED_USERNAME: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		COLORTERM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
