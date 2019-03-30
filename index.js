import Home from './app/Home';
import { Navigation } from 'react-native-navigation';;
import store from './app/redux/store';
import { Provider } from 'react-redux';

console.disableYellowBox = true;

Navigation.registerComponentWithRedux('app.Home', () => Home, Provider, store);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
      name: "app.Home"
      }
    }
   });
});
