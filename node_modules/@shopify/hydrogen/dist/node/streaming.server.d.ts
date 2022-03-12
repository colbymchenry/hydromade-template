import type { Writable } from 'stream';
export declare const rscRenderToReadableStream: (App: JSX.Element) => ReadableStream<Uint8Array>;
export declare const createFromReadableStream: (rs: ReadableStream<Uint8Array>) => {
    readRoot: () => JSX.Element;
};
declare type StreamOptions = {
    nonce?: string;
    onCompleteShell?: () => void;
    onCompleteAll?: () => void;
    onError?: (error: Error) => void;
    bootstrapScripts?: string[];
    bootstrapModules?: string[];
};
export declare const ssrRenderToPipeableStream: (App: JSX.Element, options: StreamOptions) => {
    pipe: Writable['pipe'];
};
export declare const ssrRenderToReadableStream: (App: JSX.Element, options: StreamOptions) => ReadableStream<Uint8Array>;
export declare function supportsReadableStream(): boolean;
export declare function isStreamingSupported(): Promise<boolean>;
export declare function bufferReadableStream(reader: ReadableStreamDefaultReader, cb?: (chunk: string) => void): Promise<string>;
export {};
