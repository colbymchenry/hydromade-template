import { Metafield } from '../../graphql/types/types';
export declare type MetafieldType = Omit<Partial<Metafield>, 'value'> & {
    value?: string | number | boolean | Date | Record<string, any>;
};
