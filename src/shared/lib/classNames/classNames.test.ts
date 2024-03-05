import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClasses')).toBe('someClasses');
  });
  test('with additional class', () => {
    expect(classNames('someClasses', {}, ['class1', 'class2'])).toBe(
      'someClasses class1 class2',
    );
  });
  test('with mods', () => {
    expect(
      classNames('someClasses', { hovered: true, scrollable: true }, [
        'class1',
        'class2',
      ]),
    ).toBe('someClasses class1 class2 hovered scrollable');
  });
  test('with mods false', () => {
    expect(
      classNames('someClasses', { hovered: true, scrollable: false }, [
        'class1',
        'class2',
      ]),
    ).toBe('someClasses class1 class2 hovered');
  });
  test('with mods undefined', () => {
    expect(
      classNames(
        'someClasses',
        { hovered: true, scrollable: undefined },
        ['class1', 'class2'],
      ),
    ).toBe('someClasses class1 class2 hovered');
  });
});
