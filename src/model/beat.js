import stampit from 'stampit';
import {lcm} from 'mathjs';

export const Beat = stampit({
    init({rh = 0, lh = 0}) {
        this.rh = rh;
        this.lh = lh;
    },
    methods: {
        tickCount() {
            return lcm(this.rh, this.lh);
        }
    }
});
