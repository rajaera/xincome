import { DebitSumPipe } from './debit-sum.pipe';

describe('DebitSumPipe', () => {
  it('create an instance', () => {
    const pipe = new DebitSumPipe();
    expect(pipe).toBeTruthy();
  });
});
