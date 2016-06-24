/*
Classic ticks per minute' (CTPM) is the classic metronome setting where 60 gives one 'classic' tick per second. (The time signature for the piece is irrelevant.)</p>
Example: For CTPM=60 and 'Classic ticks per beat' (CTPB)=1, each beat has 1 classic-tick, each spaced 1 second a part; for 60 and 2, each beat has 2 classic-ticks, each also spaced 1 second a part (the beat is now twice as long).</p>
Example: For CTPB=3, and a beat with 8 notes for right and 3 for left, 24 ticks are generated, with a classic-tick falling every 8th tick, starting on the 1st.</p>
 */

import test from 'tape';
import {Metronome} from '../model/metronome';
import {Beat} from '../model/beat';

test('Given a beat and a metronome-setting, calculate tick duration (sec)', (assert) => {
    let metronome = Metronome({classicTicksPerMinute: 60, classicTicksPerBeat: 12});
    let beat = Beat({rh: 3, lh: 4});
    let actual = metronome.tickDurationForBeat(beat);
    let expected = 1;
    assert.equal(actual, expected, '1 tick every 1 sec');

    metronome = Metronome({classicTicksPerMinute: 30, classicTicksPerBeat: 12});
    beat = Beat({rh: 3, lh: 4});
    actual = metronome.tickDurationForBeat(beat);
    expected = 2;
    assert.equal(actual, expected, '1 tick every 2 sec');

    metronome = Metronome({classicTicksPerMinute: 120, classicTicksPerBeat: 12});
    beat = Beat({rh: 3, lh: 4});
    actual = metronome.tickDurationForBeat(beat);
    expected = 0.5;
    assert.equal(actual, expected, '1 tick every 1/2 sec');

    metronome = Metronome({classicTicksPerMinute: 60, classicTicksPerBeat: 24});
    beat = Beat({rh: 3, lh: 4});
    actual = metronome.tickDurationForBeat(beat);
    expected = 2;
    assert.equal(actual, expected, '1 tick every 2 sec');

    metronome = Metronome({classicTicksPerMinute: 60, classicTicksPerBeat: 6});
    beat = Beat({rh: 3, lh: 4});
    actual = metronome.tickDurationForBeat(beat);
    expected = 0.5;
    assert.equal(actual, expected, '1 tick every 1/2 sec');

    metronome = Metronome({classicTicksPerMinute: 30, classicTicksPerBeat: 6});
    beat = Beat({rh: 3, lh: 4});
    actual = metronome.tickDurationForBeat(beat);
    expected = 1;
    assert.equal(actual, expected, '1 tick every 1 sec');

    metronome = Metronome({classicTicksPerMinute: 120, classicTicksPerBeat: 24});
    beat = Beat({rh: 3, lh: 4});
    actual = metronome.tickDurationForBeat(beat);
    expected = 1;
    assert.equal(actual, expected, '1 tick every 1 sec');

    metronome = Metronome({classicTicksPerMinute: 30, classicTicksPerBeat: 3});
    beat = Beat({rh: 3, lh: 4});
    actual = metronome.tickDurationForBeat(beat);
    expected = 0.5;
    assert.equal(actual, expected, '1 tick every 1/2 sec');

    metronome = Metronome({classicTicksPerMinute: 10, classicTicksPerBeat: 24});
    beat = Beat({rh: 3, lh: 4});
    actual = metronome.tickDurationForBeat(beat);
    expected = 12;
    assert.equal(actual, expected, '1 tick every 12 sec');

    metronome = Metronome({classicTicksPerMinute: 120, classicTicksPerBeat: 4});
    beat = Beat({rh: 3, lh: 4});
    actual = metronome.tickDurationForBeat(beat);
    expected = 1 / 6;
    assert.equal(actual, expected, '1 tick every 1/6 sec');

    assert.end();
});
