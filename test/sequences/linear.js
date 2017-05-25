import execSteps from './execSteps'

const LinearHistory = (history, done) => {
	const steps = [
		(location) => {
			expect(location.pathname).to.equal('/')
			expect(history.entries).to.have.lengthOf(1)
			expect(history.entries[0].pathname).to.equal('/', 'Initial entry')

			history.push('/home?the=query#the-hash')
		},
		(location, action) => {
			expect(history.entries).to.have.lengthOf(2)
			expect(history.index).to.equal(1)
			expect(history.entries[0].pathname).to.equal('/', 'First entry after push')
			expect(history.entries[1].pathname).to.equal('/home', 'New entry')
			expect(history.entries[1].search).to.equal('?the=query')
			expect(history.entries[1].hash).to.equal('#the-hash')
		}
	]

	execSteps(steps, history, done)
}

export default LinearHistory