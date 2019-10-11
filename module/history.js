import { createBrowserHistory } from 'history'
import { loadHistory, saveHistory } from './storage'

const BrowserHistoryWithEntries = (options = {}) => {
	const browserHistory = createBrowserHistory(options)

	let {
		tabKey,
		entries,
		index,
	} = loadHistory(browserHistory.location)

	browserHistory.listen((newLocation, action) => {
		if (!tabKey && newLocation.key) {
			tabKey = !newLocation.key ? "" : newLocation.key
		}

		switch (action) {
			case 'POP':
				index = entries.findIndex(location => location.key === newLocation.key)
				break

			case 'REPLACE':
				entries[index] = Object.assign({}, newLocation)
				break

			case 'PUSH':
				entries = [...entries.slice(0, index + 1), newLocation]
				index += 1
				break
		}
		saveHistory(tabKey, Object.assign({}, { index, entries }))
		proxy.index = index
		proxy.entries = entries
		proxy.location = Object.assign({}, newLocation)
		proxy.action = action

	})
	const proxy = Object.assign({}, browserHistory, { index, entries })
	return proxy
}

export { BrowserHistoryWithEntries }