import { BrowserHistoryWithEntries } from '../module/history'
import { resetHistory } from '../module/storage'
import LinearHistory from './sequences/linear'
import ReplaceHistory from './sequences/replace'
import GoBack from './sequences/goback'
import GoForward from './sequences/goforward'
import NonLinearPush from './sequences/nonlinearpush'

describe('Browser history with entries', () => {
	let history

	beforeEach(() => {
		window.history.replaceState(null, null, '/')
		history = BrowserHistoryWithEntries()
	})

	describe('Initialization', () => {
		it('should set the entries and index at start', () => {
			expect(history.location.pathname).to.equal('/')
			expect(history).to.have.property('entries').that.have.lengthOf(1)
			expect(history.entries[0].pathname).to.equal('/')
			expect(history.index).to.equal(0)
		})
	})
	
	describe('Linear history', () => {
		it('should add a new entry after pushing a new path', done => {
			LinearHistory(history, done)
		})
	})

	describe('Replacing the last entry', () => {
		it('should change the last entry and keep the index', done => {
			ReplaceHistory(history, done)
		})
	})

	describe('Going back one step', () => {
		it('should update the index correctly', done => {
			GoBack(history, done)
		})
	})

	describe('Going forward one step', () => {
		it('should update the index correctly', done => {
			GoForward(history, done)
		})
	})

	describe('Pushing from another index than the last one', () => {
		it('should rewrite the next entries', done => {
			NonLinearPush(history, done)
		})
	})
})