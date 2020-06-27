import fs from 'fs';
const tpl = fs.readFileSync('./index.tmpl');

export default async function template({ body, title }: { body: string, title: string }) {
  return tpl.toString().replace('{{title}}', title).replace('{{body}}', body);
};