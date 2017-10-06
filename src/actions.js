import {createAction} from  'redux-actions';

const actionTypes = {
    changeOrganization: 'CHANGE_ORGANIZATION',
    changeCountry: 'CHANGE_COUNTRY',
    changeLanguage: 'CHANGE_LANGUAGE',
    selectCategory: 'SELECT_CATEGORY',
    selectArticle: 'SELECT_ARTICLE',
    recordMatch: 'RECORD_MATCH',
    selectCountryList: 'SELECT_COUNTRY_LIST',
    recordCoordinates: 'RECORD_COORDINATES',
    changeDeviceType: 'CHANGE_DEVICE_TYPE',
    toggleServiceMap: "TOGGLE_SERVICE_MAP",

}

export default {
    actionTypes,
    toggleServiceMap: createAction(actionTypes.toggleServiceMap),
    changeDeviceType: createAction(actionTypes.changeDeviceType),
    changeOrganization: createAction(actionTypes.changeOrganization),
    changeCountry: createAction(actionTypes.changeCountry),
    changeLanguage: createAction(actionTypes.changeLanguage),
    selectCategory: createAction(actionTypes.selectCategory),
    selectArticle: createAction(actionTypes.selectArticle),
    recordMatch: createAction(actionTypes.recordMatch),
    recordCoordinates: createAction(actionTypes.recordCoordinates),
    selectCountryList: createAction(actionTypes.selectCountryList),
}