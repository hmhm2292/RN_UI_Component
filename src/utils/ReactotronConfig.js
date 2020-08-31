import Reactotron from 'reactotron-react-native';

let reactotron = Reactotron.configure({port: 9090}).useReactNative().connect();

console.tron = reactotron.log;

export default reactotron;
