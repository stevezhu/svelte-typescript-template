import App from './App.svelte';

export default {title: 'App'};

export const withDefault = () => ({
  Component: App,
  props: {
    name: 'World',
  },
});
