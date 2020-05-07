import 'react-native';
import React from 'react';
import Home from '../Home';
import { shallow } from 'enzyme';

import renderer from 'react-test-renderer';

it('renders correctly', () => { 
    const tree = renderer.create( 
      <Home /> 
    ); 
    expect(tree).toMatchSnapshot(); 
});

it('has proper navigation options', () => { 
    expect(Home.navigationOptions).toMatchSnapshot(); 
});

it('navigate on press', () => { 
    const navigate = jest.fn(); 
    const homeScreen = shallow( 
      <Home navigation={{ navigate }}/> 
    ) 
    homeScreen.find('Button').simulate('press'); 
    expect(navigate).toBeCalledWith("StoreScreen");
});