import Counter from "../components/basicComponent";
import React from 'react';
import {shallow} from 'enzyme';

describe('counter', () => {
    it('should contain one div', ()=> {
        const wrapper = shallow(<Counter />);
        
        expect(wrapper.find('div').length).toBe(1);
    })
});