import { ParameterType, PluginHost, writeFile } from 'typedoc/dist/lib/utils';
import { RendererEvent } from 'typedoc/dist/lib/output/events';

export function load(host: PluginHost) {
  const app = host.application;

  app.options.addDeclaration({
    name: 'cname',
    help: 'Github Pages CNAME Plugin - CNAME URL',
    type: ParameterType.String,
    defaultValue: '',
  });

  app.renderer.once(RendererEvent.END, () => {
    const cName = app.options.getValue('cname') as string;
    if (cName) {
        const workingDir = process.cwd();
        const outDir = app.options.getValue('out') || './docs';
        writeFile(`${outDir}/CNAME`, cName, false);
    }
  });
}
