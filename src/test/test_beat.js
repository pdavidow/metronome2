// babel-node test_beat.js | faucet

// browserify -t babelify test_beat.js | browser-run -p 2222
// http://localhost:2222

import test from 'tape';
import {Beat} from '../model/beat';

test('Beat tick count', (assert) => {
    const msg = 'Beat tick count should equal lowest common multiple of rh and lh';

    let actual = Beat({rh: 3, lh: 1}).tickCount();
    let expected = 3;
    assert.equal(actual, expected, msg);

    actual = Beat({rh: 3, lh: 4}).tickCount();
    expected = 12;
    assert.equal(actual, expected, msg);

    assert.end();
});