import React from 'react';
import FavouriteButton from '../FavouriteButton';
import renderer from 'react-test-renderer';

it('renders correctly when isFavourite is true', () => {
  const tree = renderer
    .create(<FavouriteButton
      isFavourite={true}
      toggleFavourite={console.log}
    /> )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when isFavourite is false', () => {
  const tree = renderer
    .create(<FavouriteButton
      isFavourite={false}
      toggleFavourite={console.log}
    /> )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('fires onclick handler when component is clicked', () => {
  const mockCallback = jest.fn();
  const tree = renderer
    .create(<FavouriteButton
      isFavourite={true}
      toggleFavourite={mockCallback}
    /> )
    .toJSON();

  tree.props.onClick();

  expect(mockCallback.mock.calls.length).toBe(1);
});