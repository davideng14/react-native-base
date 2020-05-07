import routes from '../routes';
import Home from '../../screens/Home';
import StoreScreen from '../../screens/StoreScreen';

it('has all needed routes', () => { 
    expect(routes).toMatchSnapshot(); 
});

it('has home screen', () => { 
    expect(routes.home.screen).toBe(Home); 
}); 

it('has storeScreen screen', () => { 
    expect(routes.storeScreen.screen).toBe(StoreScreen); 
});