#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { del } from 'edit-package-json';

writeFileSync('package.json', del(readFileSync('package.json').toString(), 'types'));

//Put the exports field back into package.json so that monorepos can work again
let packageJson = readFileSync('package.json').toString();
packageJson = packageJson.slice(0, packageJson.lastIndexOf('}') - 1); //strip closing }
packageJson += `,
	"exports": {
		"./package.json": "./package.json",
		".": "./package/index.js",
		"./styles/flags.css": "./styles/flags.css",
		"./types": "./package/types/index.d.ts"
	},
	"types": "./package/index.d.ts",
	"svelte": "./package/index.js"
}
`;
writeFileSync('package.json', packageJson);
