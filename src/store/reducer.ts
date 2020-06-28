import { combineReducers } from 'redux';
import entity from 'store/entity';

export interface TestSSRState {
  entity: number,
}
export default combineReducers<TestSSRState>({
  entity,
});
