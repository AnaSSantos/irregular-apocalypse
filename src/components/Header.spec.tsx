import { h } from 'preact'
import { cleanup, render } from 'preact-testing-library'
import { Header } from './Header'

describe('Header', () => {
  afterEach(cleanup)
  
  it('renders title', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Irregular Apocalypse')).toBeTruthy()
  })
})
