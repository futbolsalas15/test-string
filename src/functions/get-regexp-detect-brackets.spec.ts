import { BracketType } from '../constants';
import { getRegexpDetectBrackets } from './get-regexp-detect-brackets';

describe('get-regexp-detect-brackets.ts', () => {
  it('should return a regexp expression, replacing the open/close bracket according to the function param', () => {
    expect(getRegexpDetectBrackets(BracketType.Angle).source).toEqual('\\<([^\\<\\>]*?)\\>');
    expect(getRegexpDetectBrackets(BracketType.Curly).source).toEqual('\\{([^\\{\\}]*?)\\}');
    expect(getRegexpDetectBrackets(BracketType.Square).source).toEqual('\\[([^\\[\\]]*?)\\]');
    expect(getRegexpDetectBrackets(BracketType.Round).source).toEqual('\\(([^\\(\\)]*?)\\)');
  });
});
