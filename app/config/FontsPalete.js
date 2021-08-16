import { Platform } from 'react-native';
const Fonts ={
     mainText : Platform.OS==='android' ?'Roboto' : 'Avenir',
     minorText : Platform.OS==='android' ?'Roboto' : 'Avenir'
   }
   
   export default Fonts;