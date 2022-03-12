import renderHydrogen from '@shopify/hydrogen/entry-server';
import {DefaultRoutes, ShopifyProvider} from '@shopify/hydrogen';
import {Suspense} from 'react';
import DefaultSeo from './components/DefaultSeo.server';
import NotFound from './components/NotFound.server';
import LoadingFallback from './components/LoadingFallback';
import CartProvider from './components/CartProvider.client';

function App({log, pages, ...serverState}) {
    console.log("TOKENS")
    console.log(process.env.VITE_STORE_DOMAIN);
    console.log(process.env.VITE_STORE_FRONT_TOKEN);
    console.log(process.env.VITE_VERCEL_GIT_COMMIT_AUTHOR_NAME)
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ShopifyProvider shopifyConfig={{
          storeDomain: process.env.VITE_STORE_DOMAIN,
          storefrontToken: process.env.VITE_STORE_FRONT_TOKEN,
          storefrontApiVersion: 'unstable',
      }}>
        <CartProvider>
          <DefaultSeo />
          <DefaultRoutes
            pages={pages}
            serverState={serverState}
            log={log}
            fallback={<NotFound />}
          />
        </CartProvider>
      </ShopifyProvider>
    </Suspense>
  );
}

const pages = import.meta.globEager('./pages/**/*.server.[jt](s|sx)');

export default renderHydrogen(App, {pages});
