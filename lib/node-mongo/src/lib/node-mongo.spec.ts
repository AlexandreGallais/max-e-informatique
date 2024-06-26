import { nodeMongo } from './node-mongo';

describe('nodeMongo', () => {
  it('should work', () => {
    expect(nodeMongo()).toEqual('node-mongo');
  });
});
