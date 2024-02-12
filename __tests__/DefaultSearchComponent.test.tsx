
import { render, screen } from '@testing-library/react';
import { DefaultSearchComponent } from '@/components/defaultSearchComponent/DefaultSearchComponent';

describe('DefaultSearchComponent', () => {

  it('Should render the search input correctly', () => {
    render(<DefaultSearchComponent />)
    expect(screen.getByPlaceholderText('Busque por atração')).toBeInTheDocument();
  }) 

  it('Should render search icon', () => {
    render(<DefaultSearchComponent />);
    const searchIcon = screen.getByAltText('Search Icon'); 
    expect(searchIcon).toBeInTheDocument(); 
  });

})