import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** DateTime scalar */
  DateTime: any;
  /** JSON scalar */
  Json: any;
  /** Any scalar. DO NOT USE except in extremely rare cases where it is unavoidable to do so */
  Any: any;
  /** Long type */
  Long: any;
};


export type Product = {
    __typename?: 'Product';
    title?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
  };

export type HypiSubscriptionUnion = {
    __typename?: 'HypiSubscriptionUnion';
    Product?: Maybe<Product>;
  };

  
export const ProductFieldsFragmentDoc = gql`
    fragment ProductFields on Product {
  hypi {
    id
  }
  title
  description
}
    `;

export const ProductsDocument = gql`
    query products($arcql: String!) {
  find(type: Product, arcql: $arcql) {
    edges {
      node {
        ...ProductFields
      }
    }
  }
}
${ProductFieldsFragmentDoc}`;

export const LoginDocument = gql`
    query login($username: String!, $password: String) {
  login(type: login, username: $username, password: $password) {
    data {
      login {
        ...ProductFields
      }
    }
  }
}
${ProductFieldsFragmentDoc}`;


export type ProductFieldsFragment = (
    { __typename?: 'Product' }
    & Pick<Product, 'title' | 'description'>
  );

export type ProductsQuery = (
    { __typename?: 'Query' }
    & { find: (
      { __typename?: 'HypiFilterConnection' }
      & { edges?: Maybe<Array<(
        { __typename?: 'HypiResultEdge' }
        & { node: (
          { __typename?: 'Product' }
          & ProductFieldsFragment
        ) | { __typename?: 'PageInfo' } | { __typename?: 'HypiResultEdge' } | { __typename?: 'HypiFilterConnection' } | { __typename?: 'HypiEnv' } | { __typename?: 'Pair' } | { __typename?: 'AggInt' } | { __typename?: 'AggFloat' } | { __typename?: 'AggOtherScalar' } | { __typename?: 'Script' } | { __typename?: 'RequestTemplate' } | { __typename?: 'NotificationCtx' } | { __typename?: 'Notification' } | { __typename?: 'URL' } | { __typename?: 'Currency' } | { __typename?: 'Coordinate' } | { __typename?: 'GeoEnvelope' } | { __typename?: 'Language' } | { __typename?: 'Address' } | { __typename?: 'PersonName' } | { __typename?: 'Phone' } | { __typename?: 'Email' } | { __typename?: 'Password' } | { __typename?: 'RemoteLogin' } | { __typename?: 'LoginAttempt' } | { __typename?: 'BruteForceDetectionOptions' } | { __typename?: 'OAuth2AuthorizedClient' } | { __typename?: 'AuthClient' } | { __typename?: 'ABACPolicy' } | { __typename?: 'ABACTag' } | { __typename?: 'Image' } | { __typename?: 'EmailVerification' } | { __typename?: 'EmailTemplate' } | { __typename?: 'EmailSendingAttempt' } | { __typename?: 'PasswordReminder' } | { __typename?: 'Webhook' } | { __typename?: 'WebhookResponse' } | { __typename?: 'LogMessage' } | { __typename?: 'GraphQLRef' } | { __typename?: 'WorkflowStepData' } | { __typename?: 'WorkflowStep' } | { __typename?: 'AccessToken' } | { __typename?: 'StorageCounter' } | { __typename?: 'PermissionDescription' } | { __typename?: 'Hypi' } | { __typename?: 'Country' } | { __typename?: 'Account' } | { __typename?: 'Person' } | { __typename?: 'Organisation' } | { __typename?: 'OAuthProvider' } | { __typename?: 'Realm' } | { __typename?: 'Group' } | { __typename?: 'Role' } | { __typename?: 'RolePolicy' } | { __typename?: 'ClientPolicy' } | { __typename?: 'TimePolicy' } | { __typename?: 'AggregatedPolicy' } | { __typename?: 'GroupPolicy' } | { __typename?: 'AccountPolicy' } | { __typename?: 'RealmPolicy' } | { __typename?: 'RealmLink' } | { __typename?: 'Permission' } | { __typename?: 'File' } | { __typename?: 'Video' } | { __typename?: 'EmailMessage' } | { __typename?: 'Workflow' } | { __typename?: 'WorkflowSession' } | { __typename?: 'Counter' } | { __typename?: 'Gauge' } | { __typename?: 'ServerlessResponse' } }
      )>> }
    ) }
  );

  export type LoginQuery = (
    { __typename?: 'Query' }
    & { login: (
      { __typename?: 'data' }
    ) }
  );

  export type ProductsQueryVariables = Exact<{
    arcql: Scalars['String'];
  }>;

  export type LoginQueryVariables = Exact<{
    username: Scalars['String'];
    password: Scalars['String'];
  }>;

  export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
    const options = {...defaultOptions, ...baseOptions}
    return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
  }

  export function useLoginQuery(baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>) {
    const options = {...defaultOptions, ...baseOptions}
    return Apollo.useQuery<LoginQuery, LoginQueryVariables>(ProductsDocument, options);
  }

  export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
  export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
