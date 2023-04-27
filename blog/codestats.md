# GitHub Code Stats Component

## The Problem

I want to display the code breakdown by percentage for each of my projects, just like they have it on GitHub. Maybe a component/library for this already exists, but I want to build my one

## The Implementation

### Step 1: Static with Styles

I made a version in CodePen just so I could try to match the styles of the one on GitHub. I could have just copy-pasted code but I wanted to try my own implementation (for fun and challenge).
This was "version 1" of the component; it only has the stats for one of my repos. I just dropped it in to every project item to see how it looks. Pretty good 👍🏻

### Step 2: Connecting to the GitHub API

Ok, now I want to get actual data. I'm going to use the Octokit library to access the GraphQL API. I'm using GraphQL because a) it's new and fun b) I only want really specific data, so this is probably the most efficient way to grab it.

First I use the Explorer to try and figure out what the shape of my query will look like.

Now let's try it in our code.

lmao ok so looks like there's some errors here: `Module "stream" has been externalized for browser compatibility` and `ReferenceError: global is not defined`

It appears that there are some Node modules here that aren't compatible with the browser, namely `stream`. Also the global isn't defined?

There are a few options: ppl have found a [workaround](https://github.com/octokit/octokit.js/issues/2126) that requires aliasing some other library, or we could switch to a SSR. SSR would require a lot of work that I don't want to do right now, so let's just do this silly workaround.

Ok, looks like we're going to build a web server

### Step 3: The App

For sustainability, I'm migrating this outside of my website (note: this may come to bite me in the ass in the future). A few reasons:

- github api isn't really meant to work in the browser. The GraphQL api requires authentication, and these node bindings are kind of wack
- I want to release this as a library/plugin/component, it will be easier for end user if they can just `npm i` the package and then hook in the github app

We're going to use Node on Render

#### The Server

whew this was a beast

1. make a github app
2. get the private key and appId
3. with these we can make an app instance with octokit
4. in order to authenticate we first need to get the installationId for the specific user
5. that will let us get the octokit for this installation (basically an authenticated instance of the api for this users specific installation of the github app)
6. now we can query the graphql api!
   1. mess around with explorer to get what we want
7. we can tease out this data, and calculate size percentages
8. send that back to the client!

now we just deploy the server and we should be able to use it from our frontend

it could use some more error handling but right now should be good

### Step 4: The Component

build the component in vue, simple enough

- going to use CSS vars to handle theming
- put in some skeleton loaders for better ux

#### Deploy to NPM

- put vite in build mode so its packaged into the right file types
- create a github action to publish on a new release
- make sure your documentation is readable and helpful
  - uhoh, wanted these images to show up in NPM's readme -> have to put files in public folder
- nice to have good SEO with: tagline (second line of readme) and keywords
- viola

### Step 5: Better Performance

Render is slow AF. The app needs to be spun up every time someone hits the API. I think we should move to either Google Cloud or DigitalOcean serverless

Try:

- [google-github-actions/deploy-cloudrun](https://github.com/google-github-actions/deploy-cloudrun)

## Resources

- [GiHub: Authenticating as a GitHub App installation](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation)
- [Prettier: GraphQL](https://prettier.io/blog/2017/06/28/1.5.0.html)
- [octokit/app.js](https://github.com/octokit/app.js)
- [octokit/octokit.js](https://github.com/octokit/octokit.js)
- [GitHub: GraphQL API](https://docs.github.com/en/graphql/reference/objects)
- [GitHub: Creating a GitHub App](https://docs.github.com/en/apps/creating-github-apps/creating-github-apps/creating-a-github-app)
- [Publishing a Vue 3 component on npm](https://blog.egmond.dev/vue-component-to-npm-package)
- [Using Vite to Publish a Vue Component to NPM](https://levelup.gitconnected.com/using-vite-to-publish-a-vue-component-to-npm-7043a56cfa00)
- [GitHub Actions: Publishing Node.js packages](https://docs.github.com/en/actions/publishing-packages/publishing-nodejs-packages)
- [Vite: Library mode](https://vitejs.dev/guide/build.html#library-mode)
- [Packaging Vue Components for npm](https://v2.vuejs.org/v2/cookbook/packaging-sfc-for-npm.html) (specifically for SFC)
- [How to create a component library with Vue 3 + ViteJS + TypeScript?](https://medium.com/@blaster203/how-to-create-a-component-library-with-vue-3-vitejs-typescript-8eb41f799045)
  - [`install` function](https://github.com/IsraelDCastro/my-library-vue-ts/blob/main/src/components/main.ts)
