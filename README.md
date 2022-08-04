# Remix Lunch and Learn

## 1. What is Remix? (and why should we care?)

- Fullstack React\* metaframework
  - They prefer to be called "center stack"
- Competitor to Next.js and Create React App
- Built by React Router guys

\* _The goal is to be UI framework agnostic. Within months they plan to have support for Preact, Vue, Angular, Svelte etc..._

![Remix Logo](public/glowing.png)
I like it because it GREATLY simplifies things:

- **Simpler Code**
  - The hardest parts of React disappear
  - You'll rarely find yourself writing `useEffect` or `useState`
  - State management(redux) just isn't a thing you'll need
- **Simpler Architecture**
  - Remix can replace the BFF (Backend For Frontend API)
- **Simpler Mental Models**
  - Leans into SSR - Avoids confusion over complex rendering techniques
    - CSR, ISR, SSG, SSR etc...
  - Start simple, then progressively enhance
    - Remix encourages you to start by thinking "How would I have done this in 2008 with no JS"?
- **Simpler Developer Experience**
  - Remix handles the bundling (screaming fast with `esbuild`) and code splitting
  - "`dev` mode" is the same as "`production` mode", so there are no surprise bugs

What's not great...(yet)

- CSS/Styling flexibilty

## 2. Create a new project

```
npx create-remix
```

DEMO

- [ ] Add basic routes for `/diary` and `/photos`
- [ ] Add `header` navigation to app layout

## 3. Nested Routing

- Talk through [Routing docs](http://localhost:3000/docs/routing)

DEMO

- [ ] Setup child routes w/ diary layout
  - Review Excalidraw
  - Setup the `left-pane-layout` wired to fake entries
  - Setup the child routes (just display `params.date`)
    - Details View, New Form, Edit View

## 4. Loaders

- A `loader` in Remix is how we fetch data.
- Each route segment can have it's own `loader`.
- If your route module doesn't export a component then you've just made an API endpoint.
  - Remix calls this a "Resource Route" because you could theoretically return anything (files, XML, stream a video etc...)

DEMO

- [ ] Create an example `/api/ping` route
- [ ] Wire up the routes to use real data

## 5. Actions

- An 'action' in Remix is how you update data
- Just like a `loader`, an `action` is basically an API endpoint except that it fires the non-`GET` HTTP verbs (`POST`, `PUT`, `DELETE`, etc...)

DEMO

- [ ] Wire up the save buttons
- [ ] Extra: Wire up a delete

## 6. Demo Wrapup

- Discuss the "React" code
- Turn off JS
  - View Page Source
- Talk about Progressive enhancement
  - Loading indicators
  - Optimistic UI
  - Showcase API Tester as an example
- Talk about error boundaries

## 7. Remix at CoreBTS

Jeremiah and I have been working on some guidance for Remix apps and built a [Remix Enterprise Starter](https://github.com/DroopyTersen/remix-enterprise-starter).

- [Demo](https://remix-enterprise-bootstrap.droopy.dev/)
- [Source Code](https://github.com/DroopyTersen/remix-enterprise-starter)
- By no means is this starter meant to be prescriptive on your build your app. Totally fine to just use it for reference.
