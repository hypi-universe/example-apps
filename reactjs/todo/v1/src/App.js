import MainRoute from "./routes/routes";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const hist = createBrowserHistory();

const httpLink = createHttpLink({
  uri: "https://passivated.apps.hypi.app/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token =
    "eyJhbGciOiJSUzI1NiJ9.eyJoeXBpLmxvZ2luIjp0cnVlLCJoeXBpLnVzZXJuYW1lIjoiYXRpcW1hc29vZEB5YWhvby5jb20iLCJoeXBpLmVtYWlsIjoiYXRpcW1hc29vZEB5YWhvby5jb20iLCJhdWQiOiIwMUY5UDlWS0ZGVDNRNkdOMlEyVjhGNFY2WiIsImlhdCI6MTYyNTU4MTk3MCwiZXhwIjoxNjI4MTczOTcwLCJzdWIiOiIwMUY5UDlWS0ZFWjFXUFFTVEFLNUY0VFlXTSIsIm5iZiI6MTYyNTU4MTk3MH0.KAuJbEuifjNqzd0uuMVycWJmrcpwODqVMAdx6gTfr1FgoQ9qiMQ2M8gtjCP3vshGWmZJvzUbglzNvg35C-fDcmzPrz3aMS_oTM42og6_YIrV4yvgdFYI4B9539exrlWRqPbqgWYZzRKoKYrtnKgxmoxO8L0hScKaIW4jqFzwFQShpFnEMgMphO6xOWdPEtgoCoPmVAjt88hYI96CvtmFOI5-bXXL_-d0v10plfUl9ip6gPxQAfqXcawB8PK1R0-LwhXY1f5pPcs6eyb0CgC1OwTq1ijbDRusCk9GRA5ZRr_nfz9ZXYeR4UZ9Ds0DZF4qA-xc-0ES8m5FMra3lZ_dEg";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router history={hist}>
        <Switch>
          <Route path="/" component={MainRoute} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
