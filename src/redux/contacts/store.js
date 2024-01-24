import { createStore } from 'redux';
import { formReducer } from './reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';
const enhancer = devToolsEnhancer();
export const store = createStore(formReducer, enhancer);
