import { render, screen } from '@testing-library/react'

import Home from '.'

describe('<Home />', () => {
   it('shold render the heading', () => {
      render(<Home />)

      expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument()
   })
})
