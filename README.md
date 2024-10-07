# task-randomizer

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

This app randomizes prompts given to it. The app has one default set of prompts themed around music, but custom prompts can be added via the app. You can try the app [here](https://attepee.github.io/task-randomizer/) (only in finnish for now).

The default set of prompts, "the music game", gives prompts for playing music. Perfect when you want to get to know someone's taste in music or when hanging out with friends and you want something to do but playing some real game seems too much. The app gives prompts like "song you have sung in karaoke", "song you never get tired of" and "song that you used to love as a child" in randomized order and then you just play some song that fits the prompt.

## Developing

1. Navigate to `src`

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Deploying

`gh-pages` is used to deploy the app to Github Pages. Refer to [Expo documentation](https://docs.expo.dev/distribution/publishing-websites/#github-pages) for more information.

1. Open `app.json` and your repository name as a value to exporemental `baseUrl` property.

   ```
   {
      "expo": {
         "experiments": {
            "baseUrl": "/repo-name-here"
         }
      }
   }
   ```

2. Make a new directory `public` and add file `.nojekyll` in it.

3. Open `package.json` and add `deploy` and `predeploy` scripts.

   ```
   "scripts": {
      ... 
      "deploy": "gh-pages -t -d dist",
      "predeploy": "expo export -p web"
   }
   ```

4. run `npm run deploy` to deploy the app.

5. Configure Github Pages to serve the app from the `gh-pages` branch.
