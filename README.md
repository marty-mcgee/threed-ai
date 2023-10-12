======================================================================
# 🌱 threed.ai -- using React, Three JS, React Three Fiber, on Vite

This project contains a foundation for building and learning about React apps. The site includes two routes showing how navigation works in a single page app. We manage the page head and body using a standard React flow. The homepage features a click effect that demonstrates using state, and an animation you can try out yourself by following the steps in `TODO.md`. 💫

[React](https://reactjs.org/) is a popular UI library for building web apps. [Vite](https://vitejs.dev/) is a powerful tool for building javascript apps that bundles all of your code and shows immediate changes while you're editing.

_While you're in the editor working, Vite is running your `start` script in the background (`vite dev`). The site will be in dev mode and you'll see your changes happen ✨ immediately in the preview window. Once you close the editor window and your app goes to sleep, Vite runs the `build` script and Vite builds your app for modern browsers._

## Live Demo

[threed.ai](https://threed.ai/)

## Prerequisites

You'll get best use out of this project if you're familiar with basic JavaScript. This project is a static site, which means that the server builds the site from the content of the `src` folder while you're developing it, then it's able to serve the pages super quickly when the user requests them.

## What's in this project?

← `README.md`: That’s this file, where you can tell people what your cool website does and how you built it.

← `index.html`: This is the main page template React uses to build your site–it imports `index.jsx` to kick things off. When you're ready to share your site or add a custom domain, change SEO/meta settings in here.

← `src/`: This folder contains all the files React will use to build your site.

### Working in the `src/` folder 📁

React defines site components in [JSX](https://reactjs.org/docs/introducing-jsx.html), an extended version of JavaScript, so you'll see lots of `.jsx` files in the project.

← `src/index.jsx`: This is the root of your React app. The index script is imported in the site home template `index.html`. If you add libraries like [chakra-ui](https://chakra-ui.com) or [redux](https://react-redux.js.org), you'll insert their providers here. The `<HelmetProvider`> is an example of a provider you'd use.

← `src/app.jsx`: The base for defining your React app, this script imports the components that make up the site content. The `index.jsx` file imports the App script. The router (from [wouter](https://github.com/molefrog/wouter) 🐰) is also imported here.

← `src/styles`: CSS files add styling rules to your content. You have [a lot of](https://vitejs.dev/guide/features.html#css) importing options for CSS including CSS modules if that's your jam.

← `src/components/router.jsx`: One of the most important parts of a single page app is the router. It's how we know what page to show–the code maps the paths to the Home and About components. We're using [Wouter](https://github.com/molefrog/wouter), a tiny minimalist router. You could replace it for something like [React Router](https://reactrouter.com/).

← `src/components/seo.jsx`: When you share your site on social media, you'll want to make sure the meta tags are correct and that you've got an image. All of the settings for this file are in `src/seo.json`.

### Hooks 🪝

← `src/hooks/`: [Hooks](https://reactjs.org/docs/hooks-intro.html) are a powerful way to provide interaction with your app.

← `src/hooks/prefers-reduced-motion.jsx`: For accessibility reasons, some users will indicate in their system settings that they prefer motion effects to be minimized–this allows you to hold off on these effects in such cases.

← `src/hooks/wiggle.jsx`: The wiggle effect animates elements, as you'll see if you hover over the image (or text below it) on the homepage. You can apply the effect anywhere you like in the site as outlined in `TODO.md`.

### Pages 📃

← `src/pages/`: These files include components that specify the content of the Home and About pages. Each one is defined as a function and referenced in `router.jsx`. The content is built into the page outline specified in `app.jsx`.

← `src/pages/about.jsx`: The content of the About page, defined as a component function.

← `src/pages/home.jsx` The content of the Home page, also defined as a component function. The page includes the animated effect on hover, and title change effect on click (which is also a handy demo of using state data in React).

## Try this next 🏗️

Take a look in `TODO.md` for next steps you can try out in your new site!

======================================================================
# React Three Fiber on NextJS

[![Downloads](https://img.shields.io/npm/dt/create-r3f-app.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/create-r3f-app) [![Discord Shield](https://img.shields.io/discord/740090768164651008?style=flat&colorA=000000&colorB=000000&label=discord&logo=discord&logoColor=ffffff)](https://discord.gg/ZZjjNvJ)
# :japanese_castle: React-Three-Next starter

Minimalist starter, First Load JS of 85Kb. This starter will automatically pick the marked R3F components and inject them into a canvas layout so we can navigate seamlessly between the pages with some dynamic dom and canvas content without reloading or creating a new canvas every time.

### ⚫ Demo :

[![image](https://user-images.githubusercontent.com/15867665/127765411-68bf8f2d-f13b-42de-90db-d40b84d89e92.png)](https://react-three-next.vercel.app/)

### How to use

#### Installation

_Tailwind is the default style. styled-components (styled) is also available._

```sh
pnpm create r3f-app next my-app
# pnpm create r3f-app <next> my-app <tailwind|styled>? -ts?
```

or

```sh
npx create-r3f-app next my-app
```

### :passport_control: Typescript

For typescript add the parameter `-ts` or `--typescript`:

```sh
pnpm create r3f-app next my-app -ts
```

### :mount_fuji: Features

- [x] Automatically inject r3f component in the Canvas
- [x] Support glsl imports
- [x] PWA Support
- [x] Layout for Canvas and DOM
- [x] Template for the meta data and header
- [x] Clean code using ESlint and Prettier
- [x] VSCode debug profiles for the server, Chrome, and Firefox

### :bullettrain_side: Architecture

Inform the nextjs page that the component is a Threejs component. For that, simply add the **r3f** property to the parent component.

```jsx
const Page = (props) => {
  return (
    <>
      <div>Hello !</div>
      
    </>
  )
}
// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.r3f = (props) => (
  <>
    <Shader />
  </>
)

export default Page
```

### :control_knobs: Available Scripts

- `pnpm dev` - Next dev
- `pnpm analyze` - Generate bundle-analyzer
- `pnpm lint` - Audit code quality
- `pnpm build` - Next build
- `pnpm start` - Next start
- `pnpm export` - Export to static HTML

### ⬛ Stack

- [`threejs`](https://github.com/mrdoob/three.js/) &ndash; A lightweight, 3D library with a default WebGL renderer.
- [`@react-three/fiber`](https://github.com/pmndrs/react-three-fiber) &ndash; A React renderer for Threejs on the web and react-native.
- [`@react-three/drei` - Optional](https://github.com/pmndrs/drei) &ndash; useful helpers for react-three-fiber
- [`@react-three/a11y` - Optional](https://github.com/pmndrs/react-three-a11y/) &ndash; Accessibility tools for React Three Fiber
- [`r3f-perf` - Optional](https://github.com/RenaudRohlinger/r3f-perf) &ndash; Tool to easily monitor react threejs performances.

### About the Author -- Marty McGee

🌱 Marty is a Front-End + Full-Stack Web Developer using JavaScript, TypeScript, Three JS (WebGL), React 16+, NextJS 12+, WordPress 5+, PHP 7+, MS SQL, MySQL, GraphQL (Apollo), AWS DynamoDB, EC2, S3, REST APIs, HTML 5, CSS 3, Photoshop, SEO, WCAG 2.1 Accessibility Compliance, Project Management, “HubSpot” Marketing, UI/UX Lead Capture + Fulfillment, Linux, Windows, Apple OS + Hardware (Networking, Processing, de/centralized Storage, Data Delivery, ioT)

🔭 Marty is currently working in Three JS, React Three Fiber, React 18.2, TypeScript, JavaScript, WordPress PHP + Gutenberg Plugins, WP REST API, GraphQL on Apollo Client + WP GraphQL, 3D Object Modeling, OpenJSCAD, + Node.js, running AWS DynamoDB, EC2, Vercel, Git, Smart Contracts, + Ethereum dApps.

💬 Ask Marty about FarmBot, React 18, Apollo Client+Server, GraphQL, NextJS + Vercel, serverless deployments, GitHub + NPM, Vue 3, Vite on Nuxt, Vuex vs Pinia, "Headless" WordPress CMS, Gutenberg, SEO, Ecommerce, Web3, WCAG 2.1 Compliance for Accessibility, or anything else you'd like to know more about :)

===

EXPERIENCE:

* 50+ enterprise web applications developed and in production. 
* 200+ websites designed, installed, managed, and hosted. 
* 20+ years Enterprise E-Commerce experience as Full-Stack Senior Web Application Developer, Director of Marketing, Director of IT, and a few stepping stones in between.
* Expert in JavaScript + TypeScript, React 18, Next 12, Vue 3, Nuxt 3, Pinia/Vuex, Apollo Client+Server, PHP, WordPress, REST APIs, Microsoft SQL Server, MySQL, Apache, HTML, CSS, Windows and Mac OS, Windows Server, Amazon Web Services, and Advanced PC Hardware, Digital Marketing, HubSpot Inbound Marketing, ABM (Account Based Marketing), Social Media Marketing, and Human Communication.
* Lead Developer for ThreeD.AI and ThreeD Garden web three.js open source dev + training platforms.
* Lead Developer for Company Juice WordPress Enterprise Framework.
* Lead Developer for CartFusion Open Source E-Commerce application suite.
* Entrepreneurial traveling REMOTE JavaScript/TypeScript + SQL/GQL programmer since 1999.

🌱 let's get growin!
