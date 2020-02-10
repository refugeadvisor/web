export default {
	goToCategoryMap: (country, category) => (`/${country.fields.slug}/services/by-category/${category}/map/`),
	goToDepartmentList: (country) => (`/${country.fields.slug}/services/departments/`),
	goToLocation: (country, location) => (`/${country.fields.slug}/services/by-location/${location}/`),
	goToLocationByCategory: (country, category, location) => (`/${country.fields.slug}/services/by-category/${category}/location/${location}`),
	goToLocationCategoryMap: (country, location, category) => (`/${country.fields.slug}/services/by-category/${category}/location/${location}/map/`),
	goToLocationMap: (country, location) => (`/${country.fields.slug}/services/by-location/${location}/map/`),
	goToLocationList: (country) => (`/${country.fields.slug}/services/locations/`),
	goToMap: (country) => (`/${country.fields.slug}/services/map/`),
	goToService: (country, language, id) => (`/${country.fields.slug}/services/${id}?language=${language}`),
	listAllServices: (country) => (`/${country.fields.slug}/services/all/`),
	listAllServicesinLocation: (country, location) => (`/${country.fields.slug}/services/by-location/${location}/all/`),
	listServicesInCategory: (country, category) => (`/${country.fields.slug}/services/by-category/${category.id}/`),
	servicesInCategoryMap: (country, category, location) => (`/${country.fields.slug}/services/by-location/${location}/by-category/${category}/map`),
	servicesInLocationMap: (country, location) => (`/${country.fields.slug}/services/by-location/${location}/map`),
};
