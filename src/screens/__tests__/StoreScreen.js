import 'react-native';
import React from 'react';
import StoreScreen from '../StoreScreen';


import renderer from 'react-test-renderer';

it('renders correctly', () => { 
    const tree = renderer.create( 
      <StoreScreen /> 
    ); 
    expect(tree).toMatchSnapshot(); 
});