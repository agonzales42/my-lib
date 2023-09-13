import { sum1 } from '../src/index';

describe('should add two numbers', () => {
	test('works with 2 numbers', () => {
		expect(sum1(1, 3)).toBe(4);
	});
});
