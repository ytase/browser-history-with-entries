import createHistory from 'history/createBrowserHistory'
import { loadHistory, saveHistory } from './storage'

const BrowserHistoryWithEntries = (options = {}) => {
	const browserHistory = createHistory(options)

	let {
		entries,
		index,
		tabKey,
	} = loadHistory(browserHistory.location)

	browserHistory.listen((newLocation, action) => {
		if (!tabKey && newLocation.key) {
			tabKey = newLocation.key
		}

		switch (action) {
			case 'POP':
				index = entries.findIndex(location => location.key === newLocation.key)
				break

			case 'REPLACE':
				entries[index] = newLocation
				break

			case 'PUSH':
				entries = [ ...entries.slice(0, index + 1), newLocation]
				index += 1
				break
		}

		proxy.index = index
		proxy.entries = entries

		if (tabKey) {
			saveHistory(tabKey, proxy)
		}
	})

	const proxy = Object.assign({}, browserHistory, { index, entries })

	return proxy
}

export { BrowserHistoryWithEntries }