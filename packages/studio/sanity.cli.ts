import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '9zx6lchr',
    dataset: 'production',
  },
  deployment: {
    appId: 'jkarsrud-sanity-christmas-2025',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  },
})
