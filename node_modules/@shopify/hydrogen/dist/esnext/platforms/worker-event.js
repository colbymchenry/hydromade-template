// @ts-ignore
// eslint-disable-next-line node/no-missing-import
import entrypoint from '__SERVER_ENTRY__';
// @ts-ignore
// eslint-disable-next-line node/no-missing-import
import indexTemplate from '__INDEX_TEMPLATE__?raw';
const handleRequest = entrypoint;
if (!globalThis.Oxygen) {
    globalThis.Oxygen = { env: globalThis };
}
async function handleEvent(event) {
    try {
        return (await handleRequest(event.request, {
            indexTemplate,
            cache: caches.default,
            context: event,
        }));
    }
    catch (error) {
        return new Response(error.message || error.toString(), { status: 500 });
    }
}
// @ts-ignore
addEventListener('fetch', (event) => event.respondWith(handleEvent(event)));
