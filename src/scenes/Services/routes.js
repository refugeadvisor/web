export default {
	goToCategoryMap: (country, category) => (`/${country.fields.slug}/services/by-category/${category}/map/`),
	goToDepartmentList: (country) => (`/${country.fields.slug}/services/departments/`),
	goToLocation: (country, location) => (`/${country.fields.slug}/services/by-location/${location}/`),
	goToRegion: (country, region) => (`/${country.fields.slug}/services/by-region/${region}/`),
	goToCity: (country, region, city) => (`/${country.fields.slug}/services/${region}/by-city/${city}/`),
	goToLocationByCategory: (country, category, location) => (`/${country.fields.slug}/services/by-category/${category}/location/${location}`),
	goToRegionByCategory: (country, category, region) => (`/${country.fields.slug}/services/by-category/${category}/region/${region}`),
	goToCityByCategory: (country, category, region, city) => (`/${country.fields.slug}/services/by-category/${category}/region/${region}/city/${city}`),
	goToLocationCategoryMap: (country, location, category) => (`/${country.fields.slug}/services/by-category/${category}/location/${location}/map/`),
	goToRegionCategoryMap: (country, category, region) => (`/${country.fields.slug}/services/by-category/${category}/region/${region}/map/`),
	goToCityCategoryMap: (country, category, region, city) => (`/${country.fields.slug}/services/by-category/${category}/region/${region}/city/${city}/map/`),
	goToLocationMap: (country, location) => (`/${country.fields.slug}/services/by-location/${location}/map/`),
	goToRegionMap: (country, region) => (`/${country.fields.slug}/services/by-region/${region}/map/`),
	goToCityMap: (country, region, city) => (`/${country.fields.slug}/services/${region}/by-city/${city}/map/`),
	goToLocationList: (country) => (`/${country.fields.slug}/services/locations/`),
	goToMap: (country) => (`/${country.fields.slug}/services/map/`),
	goToService: (country, language, id) => (`/${country.fields.slug}/services/${id}?language=${language}`),
	listAllServices: (country) => (`/${country.fields.slug}/services/all/`),
	listAllServicesinLocation: (country, location) => (`/${country.fields.slug}/services/by-location/${location}/all/`),
	listAllServicesinRegion: (country, region) => (`/${country.fields.slug}/services/by-region/${region}/all/`),
	listAllServicesinCity: (country, region, city) => (`/${country.fields.slug}/services/${region}/by-city/${city}/all/`),
	listServicesInCategory: (country, category) => (`/${country.fields.slug}/services/by-category/${category.id}/`),
	servicesInCategoryMap: (country, category, location) => (`/${country.fields.slug}/services/by-location/${location}/by-category/${category}/map`),
	servicesInLocationMap: (country, location) => (`/${country.fields.slug}/services/by-location/${location}/map`),
	servicesInRegionMap: (country, region) => (`/${country.fields.slug}/services/by-region/${region}/map`),
	servicesInCityMap: (country, region, city) => (`/${country.fields.slug}/services/${region}/by-city/${city}/map`),
	goToCountry: (country) => (`/${country.fields.slug}/services/`)
};
