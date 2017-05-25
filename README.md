# browser-history-with-entries

This package aims at providing the `entries` and `index` keys to BrowserHistory from the history package.

The purpose of that is to provide an easy way to inspect the whole available history, for instance in React Router, so that actions can be made when a user has visited some specific pages.

## Requirement

History v4 is required as a peer dependency. Note that it is automatically installed by React-Router so if you use it you don't need further library, otherwise just do `yarn add history`.

## Usage

Create a history like this: 

```
import { BrowserHistoryWithEntries } from 'browser-history-with-entries'

const history = BrowserHistoryWithEntries()
```

### React-router

If you want to use this history with React Router, you will have to use `Router` instand of `BrowserRouter` this way:

```jsx
import { Router } from 'react-router-dom'
import { BrowserHistoryWithEntries } from 'browser-history-with-entries'

const history = BrowserHistoryWithEntries()

const MyApp = () => {
	return <Router history={history}>
		<MyChildren />
	</Router>
}

```
After that, the `history` object passed through the context will contain `entries` and `index`.
