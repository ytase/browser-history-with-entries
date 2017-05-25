import execSteps from './execSteps'

const GoBack = (history, done) => {
	const steps = [
		(location) => {
			expect(location.pathname).to.equal('/')
			expect(history.entries).to.have.lengthOf(1)
			expect(history.entries[0].pathname).to.equal('/')

			history.push('/home?the=query#the-hash')
		},
		(location, action) => {
			expect(history.entries).to.have.lengthOf(2)
			expect(history.index).to.equal(1)
			history.goBack()
		},
		(location, action) => {
			expect(history.entries).to.have.lengthOf(2)
			expect(history.index).to.equal(0)
			expect(history.entries[0].pathname).to.equal('/')
			expect(history.entries[1].pathname).to.equal('/home')
		}
	]

	execSteps(steps, history, done)
}

export default GoBack