import convertDate from '../src/utils/convertDate';

test('convert date to format MM/DD/YY', () => {
  expect(convertDate('2023-02-25T23:39:47.420Z')).toBe('February 25, 2023');
});
