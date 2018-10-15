import React from "react";
import { AppRegistry } from "react-native";

import { ApolloProvider } from "react-apollo";
import { Rehydrated } from "aws-appsync-react";
import { Provider } from "react-redux";
import App from "./src/App";

import Amplify from "aws-amplify";
import config from "./src/aws-exports";

import AWSAppSyncClient from "aws-appsync";
import AppSync from "./src/AppSync.js";
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
// import * as AWS from "aws-sdk";
// If using IAM for auth type, for testing.
// TODO migrate to using IAM for auth type, for testing

import configureStore from "./src/store/configureStore";

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
