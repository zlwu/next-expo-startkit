# Starter kit for next.js and expo project

## How to use
 1. How to create project base on this template
```bash
 $ npx create-react-native-app --template https://github.com/zlwu/next-expo-startkit
```
 3. How to debug & run
   - Web: yarn next dev -- start the Next.js project
   - Native: expo start -- start the Expo project
 4. Notes
   - Pages under http://localhost:3000/app are cross-platform expo react-native code.
   - Please prefix the route path with URL_PREFIX under navigation/LinkConfigurations.ts. 

## TODO
 1. Amplify integration [Amplify for Next.js](https://docs.amplify.aws/guides/hosting/nextjs/q/platform/js/)
 2. Firebase Analytics
