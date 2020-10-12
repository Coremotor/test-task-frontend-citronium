import {currencyConvert} from "./currencyConvert";

it('should convert EURO to RUB', function () {
    expect(currencyConvert(20, 10)).toEqual(200)
});
