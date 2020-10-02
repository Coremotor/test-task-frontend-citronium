import {ON_COURSE_TITLE_CLICK_HANDLER} from "../actionTypes/actionTypes";
import {ON_MODULE_TITLE_CLICK_HANDLER} from "../actionTypes/actionTypes";

export function onCourseTitleClickHandler(
    courseShowVar: any,
    courseId: any,
    courseTitle: any
) {
    return {
        type: ON_COURSE_TITLE_CLICK_HANDLER,
        courseShowVar: courseShowVar,
        courseId: courseId,
        courseTitle: courseTitle,
    }
}

export function onModuleTitleClickHandler(
    courseId: any,
    moduleShowVar: any,
    moduleId: any,
) {
    return {
        type: ON_MODULE_TITLE_CLICK_HANDLER,
        courseId: courseId,
        moduleShowVar: moduleShowVar,
        moduleId: moduleId,
    }
}

