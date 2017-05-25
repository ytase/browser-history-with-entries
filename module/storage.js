import store from 'store2'

const HISTORY_STORAGE_KEY = '@@HISTORY_STORAGE'

const loadHistory = location => {
	const { entries, index } = store.session.get(HISTORY_STORAGE_KEY) || {}

	if (!Array.isArray(entries) || !location.key) {
		return {
			tabKey: location.key,
			entries: [location],
			index: 0,
		}
	}

	return { tabKey, entries, index }
}

const saveHistory = (tabKey, { entries, index }) => {
	store.session.set(HISTORY_STORAGE_KEY, { entries, index })
}

const resetHistory = () => {
	store.session.set(HISTORY_STORAGE_KEY, {})
}

export { 
	saveHistory,
	loadHistory,
	resetHistory,
}