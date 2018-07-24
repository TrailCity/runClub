import React from "react";
import { AppRegistry } from "react-native";

import Amplify from "aws-amplify";
import AWSAppSyncClient from "aws-appsync";
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import { Rehydrated } from "aws-appsync-react";
import config from "./src/aws-exports";

import configureStore from "./src/store/configureStore";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import App from "./src/App";
import AppSync from "./src/AppSync.js";
// import * as AWS from "aws-sdk";
// If using IAM for auth type, for testing.
// TODO migrate to using IAM for auth type, for testing

Amplify.configure(config);

const client = new AWSAppSyncClient({
  url: AppSync.graphqlEndpoint,
  region: AppSync.region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: AppSync.apiKey
  }
});

const store = configureStore();

RunClub = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <Provider store={store}>
        <App />
      </Provider>
    </Rehydrated>
  </ApolloProvider>
);

AppRegistry.registerComponent("RunClub", () => RunClub);
