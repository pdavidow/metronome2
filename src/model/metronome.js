import stampit from 'stampit';

export const Metronome = stampit({
    init({classicTicksPerMinute = 60, classicTicksPerBeat = 1}) {
        this.classicTicksPerMinute = classicTicksPerMinute;
        this.classicTicksPerBeat = classicTicksPerBeat;
    },
    methods: {
        tickDurationForBeat(beat) { // sec
            return this.classicTicksPerBeat / ((beat.tickCount() * this.ticksPerSec()));
        },
        ticksPerSec() {
            return (this.classicTicksPerMinute / 60);
        }
    }
});
