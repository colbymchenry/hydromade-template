import { ASTNode } from 'graphql';
export declare function fetchBuilder<T>(request: Request): () => Promise<T>;
export declare function graphqlRequestBody(query: ASTNode | string, variables?: Record<string, any>): string;
export declare function decodeShopifyId(id: string): string;
