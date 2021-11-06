import { areTherePairingCurlyBrackets } from './are-there-pairing-curly-brackets';
import { BracketType } from '../constants';
import * as functionFile from './are-there-matching-brackets';

describe('are-there-pairing-curly-brackets.ts', () => {
  it('should call areThereMatchingBrackets method', () => {
    const areThereMatchingBracketsSpy = jest.spyOn(functionFile, 'areThereMatchingBrackets');

    areTherePairingCurlyBrackets('{a test}');

    expect(areThereMatchingBracketsSpy).toHaveBeenCalledWith('{a test}', BracketType.Curly);
  });
});
