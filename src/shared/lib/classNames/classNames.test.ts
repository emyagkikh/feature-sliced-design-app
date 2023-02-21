import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional params', () => {
    const expectedClass = 'someClass addParam1 addParam2';
    expect(classNames('someClass', {}, ['addParam1', 'addParam2'])).toBe(expectedClass);
  });

  test('with mods', () => {
    const expectedClass = 'someClass hovered';
    expect(classNames(
      'someClass',
      {
        'hovered': true,
        'active': false,
        'focused': undefined,
      },
    )).toBe(expectedClass);
  });

  test('with mods and additional params', () => {
    const expectedClass = 'someClass addParam1 hovered';
    expect(classNames(
      'someClass',
      {
        'hovered': true,
        'active': false,
        'focused': undefined,
      },
      [
        'addParam1',
      ],
    )).toBe(expectedClass);
  });

  test('empty', () => {
    expect(classNames('', {}, [])).toBe('');
  });
});
