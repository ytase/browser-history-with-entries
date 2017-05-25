import execSteps from './execSteps'

const NonLinearPush = (history, done) => {
	const steps = [
		(location) => {
			expect(location.pathname).to.equal('/')
			expect(history.entries).to.have.lengthOf(1)
			expect(history.entries[0].pathname).to.equal('/')

			history.push('/home')
		},
		(location, action) => {
			expect(history.entries).to.have.lengthOf(2)
			expect(history.index).to.equal(1)
			history.goBack()
		},
		(location, action) => {
			history.push('/details')
		},
		(location, action) => {
			expect(history.entries).to.have.lengthOf(2)
			expect(history.index).to.equal(1)
			expect(history.entries[0].pathname).to.equal('/')
			expect(history.entries[1].pathname).to.equal('/details')
		}
	]

	execSteps(steps, history, done)
}

export default NonLinearPush