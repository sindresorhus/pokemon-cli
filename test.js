import test from 'ava';
import execa from 'execa';
import pokemon from 'pokemon';

test('no cli parameters passed yields a single line of output', async t => {
	const {stdout} = await execa('./cli.js');
	t.true(stdout.length > 0);
	t.true(stdout.split('\n').length === 1);
});

test('--all cli parameter passed yields a many lines of output', async t => {
	const {stdout} = await execa('./cli.js', ['--all']);
	t.true(stdout.length > 0);
	t.true(stdout.split('\n').length === pokemon.all.length);
});

test('--n cli parameter passed yields as many lines as n of output', async t => {
	const n = 5;
	const {stdout} = await execa('./cli.js', ['-n', String(n)]);
	t.true(stdout.length > 0);
	t.true(stdout.split('\n').length === n);
});

test('--n cli parameter passed yields single line of output when n is not an int', async t => {
	const n = 5.5;
	const {stdout} = await execa('./cli.js', ['-n', String(n)]);
	t.true(stdout.length > 0);
	t.true(stdout.split('\n').length === 1);
});

test('--n cli parameter passed yields single line of output when n is not a number', async t => {
	const {stdout} = await execa('./cli.js', ['-n', 'foobar']);
	t.true(stdout.length > 0);
	t.true(stdout.split('\n').length === 1);
});

