import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
const uri = 'https://api.hypi.app/graphql/';
const tokenFromDeveloperHub = 'myToken';
export function provideApollo(httpLink: HttpLink): any {
  /* Get the authentication token from local storage if it exists or
   * generate one by login a user into their account or
   * the current one can be copied from the Developer Hub"
  */
  const token = localStorage.getItem('myToken') ?    localStorage.getItem('myToken') : tokenFromDeveloperHub;
  const auth = setContext((operation, context) => ({
    headers: {
      Authorization: `eyJhbGciOiJSUzI1NiJ9.eyJoeXBpLmxvZ2luIjp0cnVlLCJoeXBpLnVzZXJuYW1lIjoib2xhb2x1d2FtYXJ2ZWxsb3VzM0BnbWFpbC5jb20iLCJoeXBpLmVtYWlsIjoib2xhb2x1d2FtYXJ2ZWxsb3VzM0BnbWFpbC5jb20iLCJhdWQiOiIwMUZBVjRYV0JTOURUUTM3MkRDUEs5WjlUQyIsImlhdCI6MTYyNjc4MDMxMiwiZXhwIjoxNjI5MzcyMzEyLCJzdWIiOiIwMUZBVjRYV0JTSzBWMUhCMTUyRjVQNUI3NyIsIm5iZiI6MTYyNjc4MDMxMn0.MPVH868Y77umP8qU1CulYspRPVElI9co_qiLA_Vc9KL-QnAGhmYDcInI3FWRH4e430Kemsy8kgxna85ngN2W-FhtJwpFwRCi3VNQJkTbrqs5r4G2hH2XwKJ68q8RouruPy6Nb73BXTPFjMHrjD_lmdjhzyY4x8g6lFoz2Fe_wGNl_OTI6bOw4YQDEmiVsdFTuknxRNt-4wavDRYOxUo5izp5tFYfC_I2FVP0mPT3USM7F_OyFRCgrv3ox6hBZ5a86GiYwx8FXXaC3yoYlKa4Mkz8laigw2c-TFiyuVjJ3_3k_RXVXooNBHq-BwjgHPvc3doAsn-HpuGSQ6Buu-sy0Q`,
      'hypi-domain': 'drafting.apps.hypi.app'
    },
  }));
  const link = ApolloLink.from([auth, httpLink.create({uri, withCredentials: true})]);
  const cache = new InMemoryCache();
  return {
    link,
    cache
  };
}
@NgModule({
  exports: [
    HttpClientModule,
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: provideApollo,
    deps: [HttpLink]
  }]
})
export class GraphQLModule {
}