# Search Project

This repository contains a simple Vue.js search application . It uses Vite and Tailwind CSS to let users search for items via a remote API and display results in a responsive grid. The project demonstrates reactive state management using the Composition API and includes UI components such as a search bar, result list, loader, and empty-state indicators.

---

##  Project Structure

```
Search_project/
├── public/                   # Static assets (favicon, index.html template)
├── src/
│   ├── assets/              # Global CSS imports (Tailwind)
│   │   ├── base.css
│   │   └── main.css
│   ├── components/          # Reusable Vue components
│   │   ├── search/           # Components for search feature
│   │   │   ├── Searchbar.vue       # input field with emit
│   │   │   ├── Searchlist.vue      # grid wrapper for results
│   │   │   └── SearchlistItem.vue  # individual result card
│   │   └── ui/              # generic UI components
│   │       ├── Loader.vue           # spinner indicator
│   │       └── Emptystate.vue       # placeholder for no data
│   ├── views/               # Page-level views
│   │   └── Searchview.vue   # main screen with search logic
│   ├── App.vue              # root component, bootstraps view
│   └── main.js              # app entry point
├── package.json             # npm dependencies & scripts
├── vite.config.js           # Vite configuration (with Tailwind plugin)
└── tailwind.config.js       # Tailwind setup (dark mode, content paths)
```

### Key Components

- **Searchview.vue** – holds the search state (`query`, `results`, `isloading`, `hassearched`) and implements debounce logic for API calls.
- **Searchbar.vue** – emits search events; styled input field.
- **Searchlist.vue / SearchlistItem.vue** – display results in a responsive grid and expandable cards.
- **Loader.vue** – simple spinning indicator shown during network requests.
- **Emptystate.vue** – displays contextual messages when there are no results or the query is empty.

The application uses the Composition API (`ref`) for state and follows a clean separation of concerns: view logic in `Searchview.vue`, presentation in child components.

---
**Features**

Live search with dynamic results

Debounced API calls (1000ms delay)

Expandable result cards with additional metadata

Loading indicator during API requests

Empty state messages for better UX

Responsive layout using Tailwind CSS

Smooth expand animations using Vue transitions
**Performance Considerations**

The search input uses debouncing (1000ms) to prevent excessive API calls while the user is typing.

Flow:

User types → wait 1000ms → API request

This reduces unnecessary network requests and improves performance.

## Running the Project

```bash
npm install     # install dependencies
npm run dev     # start development server (http://localhost:3000)
```

> Tailwind is configured in the `src/assets` CSS files and processed by Vite. The `tailwind.config.js` file enables dark mode (`class` strategy) and points to the content directories.

---

## Scaling & Enhancements

To make this app production-ready or support larger datasets,we consider the following improvements:

1. **Pagination / Infinite Scroll**
   - Modify the API calls in `search()` to accept `page` or `limit` parameters.
   - Store `page` state in `Searchview.vue` and append results to the existing array.
   - Use an infinite-scroll directive or a "Load more" button.

2. **Lazy Loading & Virtualization**
   - When result sets grow large, use libraries like `vue-virtual-scroller` to render only visible items.
   - Load images or heavy content lazily with `IntersectionObserver` or built-in `loading="lazy"`.

4. **State Management & Caching**
   - For complex scenarios, introduce Vuex, Pinia, or simple reactive stores to cache previous searches and avoid redundant API calls.
   - Use `useFetch` or `axios` interceptors to handle errors and caching globally.

5. **Accessibility & Mobile Optimization**
   - Add ARIA attributes to inputs and results.
   - Ensure keyboard navigation works in result cards.

6. **Theme Support**
   - Dark mode is already supported via Tailwind’s `dark` variants; this can be toggled from a central store or persisted in `localStorage`.

7. **Testing**
   - Write unit tests for components using `@vue/test-utils` and Jest/Vitest.
   - Add end-to-end tests with Cypress to simulate user searches.

---

