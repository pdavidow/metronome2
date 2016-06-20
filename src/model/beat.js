import stampit from 'stampit';
import {lcm} from 'mathjs';

export const Beat = stampit()
    .init(function({rh = 0, lh = 0}) {
        this.rh = rh;
        this.lh = lh;
    })
    .compose({
        propertyDescriptors: {
            tickCount: {get(){
                return lcm(this.rh, this.lh);
            }}
        }
    });
