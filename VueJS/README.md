## What is VueJS?
- Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces.
- It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.

## How to initate Vue JS app?
```npm init vue@latest```

## How vue js provides declarative rendering?
- Declarative Rendering: Vue extends standard HTML with a template syntax that allows us to declaratively describe HTML output based on JavaScript state.

## How vue js do reactivity/rendering?
- Reactivity: Vue automatically tracks JavaScript state changes and efficiently updates the DOM when changes happen.

## Why vue js is called "The Progressive Framework"?
- Vue is a framework and ecosystem that covers most of the common features needed in frontend development.
- Depending on your use case, Vue can be used in different ways:
  - Enhancing static HTML without a build step
  - Embedding as Web Components on any page
  - Single-Page Application (SPA)
  - Fullstack / Server-Side Rendering (SSR)
  - Jamstack / Static Site Generation (SSG)
  - Targeting desktop, mobile, WebGL, and even the terminal

This is why we call Vue "The Progressive Framework": it's a framework that can grow with you and adapt to your needs.

## Single-File Components
In most build-tool-enabled Vue projects, we author Vue components using an HTML-like file format called Single-File Component

## API Styles
- Vue components can be authored in two different API styles: Options API and Composition API.

## Option API
- With Options API, we define a component's logic using an object of options such as data, methods, and mounted.

```vue
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

## Composition API
- With Composition API, we define a component's logic using imported API functions. In SFCs, Composition API is typically used with <script setup>.
- Same as SFC

## Difference
- The Options API is centered around the concept of a "component instance", which typically aligns better with a class-based mental model. / The Composition API is centered around declaring reactive state variables directly in a function scope and composing state from multiple functions together to handle complexity..
- It is also more beginner-friendly by abstracting away the reactivity details and enforcing code organization via option groups / In return, its flexibility enables more powerful patterns for organizing and reusing logic.

Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
