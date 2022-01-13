/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const URL_PREFIX = 'app';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl(URL_PREFIX)],
  config: {
    screens: {
      Root: {
        path: URL_PREFIX,
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
        },
      },
      Modal: `${URL_PREFIX}/modal`,
      NotFound: `${URL_PREFIX}/*`,
    },
  },
};

export default linking;
