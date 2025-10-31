import { reactotronRedux } from 'reactotron-redux';
import Reactotron from 'reactotron-react-native';

// then add it to the plugin list
const reactotron = Reactotron.configure({ name: 'React Native Demo' })
  .useReactNative()
  .use(reactotronRedux()) //  <- here i am!
  .connect(); //Don't forget about me!

export default reactotron; // also: export me so I can be referenced by Redux store
