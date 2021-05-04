import test from 'ava';
import isMarkdownFilePath from './index.js';

test('main', t => {
	t.true(isMarkdownFilePath('src/unicorn.md'));
	t.true(isMarkdownFilePath('unicorn.MD'));
	t.true(isMarkdownFilePath('unicorn.markdown'));
	t.false(isMarkdownFilePath('unicorn.png'));
	t.false(isMarkdownFilePath('unicorn'));
});
