import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';

export default ({ mode }) => {
  require('dotenv').config();

  return defineConfig({
    optimizeDeps: {include: ['@headlessui/react']},
    plugins: [hydrogen({
      storeDomain: import.meta.env.VITE_STORE_DOMAIN,
      storefrontToken: import.meta.env.VITE_STORE_FRONT_TOKEN,
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
