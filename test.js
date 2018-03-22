import test from 'ava';
import m from '.';

test('main', t => {
	t.true(m('src/unicorn.md'));
	t.true(m('unicorn.MD'));
	t.true(m('unicorn.markdown'));
	t.false(m('unicorn.png'));
	t.false(m('unicorn'));
});
