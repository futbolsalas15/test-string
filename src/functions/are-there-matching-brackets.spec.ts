import { BracketType } from '../constants';
import { areThereMatchingBrackets } from './are-there-matching-brackets';

describe('are-there-matching-brackets.ts', () => {
  it('should return true if the text contains matching brackets, using different bracket types', () => {
    expect(areThereMatchingBrackets('[[test]]', BracketType.Square)).toEqual(true);
    expect(areThereMatchingBrackets('<a test inside<nested> angle>', BracketType.Angle)).toEqual(
      true
    );
    expect(areThereMatchingBrackets('(another (nested) test)', BracketType.Round)).toEqual(true);
    expect(areThereMatchingBrackets('{another {{nested}} test}', BracketType.Curly)).toEqual(true);
  });

  it('should return true if there is not brackets', () => {
    expect(areThereMatchingBrackets('', BracketType.Curly)).toEqual(true);
  });

  it('should return true if there are not characters between the open/close bracket char', () => {
    expect(areThereMatchingBrackets('{}', BracketType.Curly)).toEqual(true);
  });

  it('should return false if there are closed brackets without relationship', () => {
    expect(areThereMatchingBrackets('}{', BracketType.Curly)).toEqual(false);
  });

  it('should return false if one bracket pair was not closed', () => {
    expect(areThereMatchingBrackets('{{}', BracketType.Curly)).toEqual(false);
  });

  it('should return true if non-bracket characters are ignored appropriately', () => {
    expect(areThereMatchingBrackets('{abc...xyz}', BracketType.Curly)).toEqual(true);
  });

  it('should return true if there is a matching open/close bracket, even if there are more than 1 closed brackets', () => {
    expect(areThereMatchingBrackets('}{}}', BracketType.Curly)).toEqual(true);
  });

  it('should return true if there are some open brackets and multiple close brackets, but all open brackets close', () => {
    expect(areThereMatchingBrackets('{{}}}}}}', BracketType.Curly)).toEqual(true);
  });
});
