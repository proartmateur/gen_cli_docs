// @ts-check
import {defineConfig} from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [starlight({
		title: {
			es: 'Gen CLI Documentación',
            'zh-CN': '我的文档',
			en:"Gen CLI Docs"
		},
		logo: {
			light: "./src/assets/docs_logo_light.svg",
			dark: "./src/assets/docs_logo_dark.svg",
			replacesTitle: true,
		},
		customCss: [
			// Ruta relativa a tu archivo CSS personalizado
			"./src/tailwind.css",
			"./src/styles/custom.css",
			"@fontsource/archivo-black",
			"@fontsource/jetbrains-mono"
		],
		social: {
			github: "https://github.com/proartmateur/gen_v2",
		},
		sidebar: [
			{
				label: "Guides",
				items: [
					// Each item here is one entry in the navigation menu.
					{label: "Example Guide", slug: "guides/example"},
				],
			},
			{
				label: "Reference",
				autogenerate: {directory: "reference"},
			},
		],
		defaultLocale: "root",
		locales: {
			root: {
				label: "Español",
				lang: "es", // lang es obligatorio para los locales raíz
			},
			// Documentación en inglés en `src/content/docs/en/`
			en: {
				label: "English",
			},
		},
	}), tailwind({
		// Desactiva los estilos base predeterminados:
		applyBaseStyles: false,
	}),],
});
