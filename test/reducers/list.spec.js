import expect from 'expect';
import reducer from '../../src/reducers';
import * as types from '../../src/actions';

describe('list reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toInclude(
      {
        list: {
          items: ['example item']
        }
      }
    );
  });

  it('should handle ADD_ITEM', () => {
    expect(
      reducer({}, {
        type: types.ADD_ITEM,
        item: 'example two'
      })
    ).toInclude(
      {
        list: {
          items: [
            'example item',
            'example two'
          ]
        }
      }
    );

    expect(
      reducer(
        {
          list: {
            items: [
              'example item',
              'example two'
            ]
          }
        },
        {
          type: types.ADD_ITEM,
          item: 'example three'
        }
      )
    ).toInclude(
      {
        list: {
          items: [
            'example item',
            'example two',
            'example three'
          ]
        }
      }
    );
  });
});
