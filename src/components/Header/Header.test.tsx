import React from "react";
import {shallow} from "enzyme";
import Header from './Header'

describe('Header', () => {
    const HeaderContainer = shallow(<Header/>)
    it('should components render', function () {

        console.log(HeaderContainer.debug())

        expect(HeaderContainer.find('header')).toHaveLength(1)
        expect(HeaderContainer.find('NavLink')).toHaveLength(1)
        expect(HeaderContainer.find('img')).toHaveLength(1)
        expect(HeaderContainer.find('SwitchLang')).toHaveLength(1)
        expect(HeaderContainer.find('BasketLink')).toHaveLength(1)
    })

    it('should equal Snapshot', function () {
        expect(HeaderContainer).toMatchSnapshot()
    })
})
