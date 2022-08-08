import { JSONSchema } from "../types";
import deepmerge from "deepmerge";

/// Plugin Types
export interface ReactQueryOptions {
    enabled?: boolean;
    optionalClient?: boolean;
    version?: 'v3' | 'v4';
    mutations?: boolean;
    camelize?: boolean;
}

export interface TSClientOptions {
    enabled?: boolean;
}
export interface MessageComposerOptions {
    enabled?: boolean;
}
export interface RecoilOptions {
    enabled?: boolean;
}
export interface TSTypesOptions {
    enabled?: boolean;
    aliasExecuteMsg?: boolean;
}

/// END Plugin Types
export interface RenderOptions {
    types?: TSTypesOptions;
    recoil?: RecoilOptions;
    messageComposer?: MessageComposerOptions;
    client?: TSClientOptions;
    reactQuery?: ReactQueryOptions;
}

export interface RenderContext {
    schema: JSONSchema;
    options: RenderOptions;
}

export const defaultOptions: RenderOptions = {
    types: {
        enabled: true,
        aliasExecuteMsg: false
    },
    client: {
        enabled: true
    },
    recoil: {
        enabled: false
    },
    messageComposer: {
        enabled: false
    },
    reactQuery: {
        enabled: false,
        optionalClient: false,
        version: 'v3',
        mutations: false,
        camelize: true
    }
};

export class RenderContext implements RenderContext {
    schema: JSONSchema;
    constructor(
        schema: JSONSchema,
        options?: RenderOptions
    ) {
        this.schema = schema;
        this.options = deepmerge(defaultOptions, options ?? {});
    }
    refLookup($ref: string) {
        const refName = $ref.replace('#/definitions/', '')
        return this.schema.definitions?.[refName];
    }
}