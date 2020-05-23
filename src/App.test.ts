import {render} from '@testing-library/svelte';
import App from './App.svelte';

test('should render the App', () => {
  const {getByText} = render(App, {name: 'World'});
  expect(getByText('Hello World!')).toBeInTheDocument();
});
