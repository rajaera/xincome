import { AccountTypeNamePipe } from './account-type-name.pipe';

describe('AccountTypeNamePipe', () => {
  it('create an instance', () => {
    const pipe = new AccountTypeNamePipe();
    expect(pipe).toBeTruthy();
  });
});
