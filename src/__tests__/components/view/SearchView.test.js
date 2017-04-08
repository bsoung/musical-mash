import React from 'react';
import { shallow } from 'enzyme';
import SearchView from '../../../components/view/SearchView';

function setup() {
	const props = {
    onMusicVideoSearch: jest.fn()
  };

  const enzymeWrapper = shallow(<SearchView {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('SearchView', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.length).toEqual(1);
    expect(enzymeWrapper.find('input').hasClass('input')).toBe(true);
    expect(enzymeWrapper.find('div').hasClass('search-container')).toBe(true);
  });
});
