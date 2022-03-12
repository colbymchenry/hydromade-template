declare global {
    var globalThis: {
        Oxygen: {
            env: any;
        };
        [key: string]: any;
    };
}
export {};
