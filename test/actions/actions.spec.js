import expect from 'expect';
import * as actions from '../../src/actions/';

describe('actions', () => {
  it('should create an action to add an item', () => {
    const item = 'example two';
    const expectedAction = {
      type: actions.ADD_ITEM,
      item
    };
    expect(actions.addItem(item)).toEqual(expectedAction);
  });
});
