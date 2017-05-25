import execSteps from './execSteps'

const ReplaceHistory = (history, done) => {
	const steps = [
		(location) => {
			expect(location.pathname).to.equal('/', 'Initial pathname')
			expect(history.entries).to.have.lengthOf(1, 'Initial entries')
			expect(history.entries[0].pathname).to.equal('/', 'Initial entry')

			history.push('/home?the=query#the-hash')
		},
		(location, action) => {
			history.replace('/new_home')
		},
		(location, action) => {
			expect(history.entries).to.have.lengthOf(2)
			expect(history.index).to.equal(1)
			expect(history.entries[0].pathname).to.equal('/')
			expect(history.entries[1].pathname).to.equal('/new_home')
			expect(history.entries[1].search).to.equal('')
			expect(history.entries[1].hash).to.equal('')
		}
	]

	execSteps(steps, history, done)
}

export default ReplaceHistory