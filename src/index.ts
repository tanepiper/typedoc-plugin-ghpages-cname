import { Application, ParameterType, RendererEvent } from 'typedoc';
import * as fs from 'fs';

export function load(app: Application) {

  app.options.addDeclaration({
    name: 'cname',
    help: 'Github Pages CNAME Plugin - CNAME URL',
    type: ParameterType.String,
    defaultValue: '',
  });

  app.renderer.once(RendererEvent.END, () => {
    const cName = app.options.getValue('cname') as string;
    if (cName) {
        const outDir = app.options.getValue('out') || './docs';
        fs.writeFileSync(`${outDir}/CNAME`, cName);
    }
  });
}
