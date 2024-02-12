
import { render, screen } from '@testing-library/react';
import { DefaultSearchComponent } from '@/components/defaultSearchComponent/DefaultSearchComponent';

describe('DefaultSearchComponent', () => {

  it('Should render the search input correctly', () => {
    const mockAction = () => {
      //Do nothing
    }
    render(<DefaultSearchComponent hint='Busque por atração' onSearchClicked={mockAction}/>)
    expect(screen.getByPlaceholderText('Busque por atração')).toBeInTheDocument();
  }) 

  it('Should render search icon', () => {
    const mockAction = () => {
      //Do nothing
    }
    render(<DefaultSearchComponent hint='Busque por atração' onSearchClicked={mockAction}/>);
    const searchIcon = screen.getByAltText('Search Icon'); 
    expect(searchIcon).toBeInTheDocument(); 
  });

})