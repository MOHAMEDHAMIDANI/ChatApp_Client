declare module 'apollo-upload-client' {
    import { ApolloLink } from '@apollo/client';

    interface UploadLinkOptions {
        uri: string;
        headers?: { [key: string]: string };
        credentials?: string;
        fetch?: typeof fetch;
        fetchOptions?: any;
    }

    export function createUploadLink(options: UploadLinkOptions): ApolloLink;
}
