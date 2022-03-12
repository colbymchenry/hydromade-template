import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';

export default ({ mode }) => {
  // require('dotenv').config({ path: `./.env` });
  require('dotenv').config();
  // now you can access config with process.env.{configName}

  return defineConfig({
    optimizeDeps: {include: ['@headlessui/react']},
    plugins: [hydrogen({
      storeDomain: process.env.VITE_STORE_DOMAIN,
      storefrontToken: process.env.VITE_STORE_FRONT_TOKEN,
      storefrontApiVersion: 'unstable',
    }), readableStreamWorkaround()],
  });
}

function readableStreamWorkaround() {
  let config;
  return {
    name: 'readable-stream-workaround',
    configResolved(_config) {
      config = _config;
    },
    transform(code, id) {
      if (config.command === 'build' && id.includes('streaming.server.js')) {
        return code.replace('let cachedStreamingSupport', '$& = false');
      }
    },
  };
}
