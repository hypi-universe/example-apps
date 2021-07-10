import { gql } from "@apollo/client";
export const LoginByEmailQuery = gql`
  query loginByEmail($email: String!, $password: String!) {
    loginByEmail(email: $email, password: $password) {
      sessionToken
      sessionExpires
      errorCode
      errorMsg
    }
  }
`;

// export const GET_ALL_TODOS = gql`
//   query getMyTodos() {
//     find(type: Todos) {
//       edges {
//         node {
//           ... on Todos {
//             title
//             person
//             date
//             status
//           }
//         }
//       }
//     }
//   }
// `;
export const ProductFieldsFragmentDoc = gql`
  fragment ProductFields on Todos {
    hypi {
      id
    }
    title
    person
    date
    status
  }
`;

export const GET_ALL_TODOS = gql`
  query todos($arcql: String!) {
    find(type: Todos, arcql: $arcql) {
      edges {
        node {
          ...ProductFields
        }
      }
    }
  }
  ${ProductFieldsFragmentDoc}
`;
export const UPDATE_TODOS = gql`
  mutation upsert($values: HypiUpsertInputUnion!) {
    upsert(values: $values) {
      id
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteItem($arcql: String!, $clearArrayReferences: Boolean = true) {
    delete(
      type: Todos
      arcql: $arcql
      clearArrayReferences: $clearArrayReferences
    )
  }
`;
