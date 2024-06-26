import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run max-e-informatique:serve:development',
        production: 'nx run max-e-informatique:serve:production',
      },
      ciWebServerCommand: 'nx run max-e-informatique:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
