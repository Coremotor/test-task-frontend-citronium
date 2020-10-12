import {buildArrayProductsForShowOnPage} from "./buildArrayProductsForShowOnPage";

it('should build array of products', function () {
    expect(buildArrayProductsForShowOnPage(1, 10, [])).toEqual([])
});
