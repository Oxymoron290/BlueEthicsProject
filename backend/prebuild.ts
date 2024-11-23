import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const packageJsonPath = join(__dirname, 'package.json');
const versionFilePath = join(__dirname, 'src', 'version.ts');

const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
const versionFileContent = `export const VERSION = '${packageJson.version}';\n`;

writeFileSync(versionFilePath, versionFileContent);
