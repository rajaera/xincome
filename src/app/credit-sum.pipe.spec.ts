import { CreditSumPipe } from './credit-sum.pipe';

describe('CreditSumPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditSumPipe();
    expect(pipe).toBeTruthy();
  });
});
