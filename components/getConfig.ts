
import fs from 'node:fs';
import path from 'node:path';
export function getConfig(){
  const p = path.join(process.cwd(),'config','lab.config.json');
  return JSON.parse(fs.readFileSync(p,'utf-8'));
}
