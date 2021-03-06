const parseLanguage = require('./common.js').parseLanguage;
const conf = require("../backend/config");
const cmsApi = require("../backend/cmsApi").default;


let {
	languageDictionary
} = conf;


/**
 * @function
 * @description 
 */
module.exports = function (app) {
	app.get("/twilio", (req, res) => {
		res.status(200).json({ 'test': 'working' })
	})
	app.get("send-message-alert"), (req, res) => {
		const sgMail = require('@sendgrid/mail');
		sgMail.setApiKey(process.env.SENDGRID_KEY);
		const msg = {
		to: ['andresd.aguilar@gmail.com','cronosreloaded@gmail.com'],
		from: 'noreply@signpost.ngo',
		subject: 'New message in Flex!',
		text: 'Tiene un nuevo mensaje en Flex',
		html: '<strong>Tiene un nuevo mensaje en Flex</strong>',
		};
		sgMail.sendMultiple(msg);
		res.status(200)
	}
	app.get("/get-phone-tree-home/:slug", (req, res, err) => {
		const selectedLanguage = parseLanguage(req);
		let configKey = 
			Object.keys(conf).filter(k => {
				return req.headers.host.indexOf(k) > -1;
			})[0];
		const {
			slug,
		} = req.params;

		languageDictionary = Object.assign(languageDictionary, conf[configKey]);
		let cms = cmsApi(conf[configKey], languageDictionary);
		try {
			cms.client
				.getEntries({
					content_type: "phoneTreeMessage",
					"fields.slug": slug,
					locale: languageDictionary[selectedLanguage] || selectedLanguage,
				})
				.then(c => {
					res.contentType("application/json");
					res.send(c.items[0].fields.initial_message.trim());
				})
				.catch(e => {
					res.redirect(`/${country}/`);
				});
		} catch (e) {
			console.log("ERROR", e);
		}
	});
	app.get("/get-phone-tree-moderator/:slug", (req, res, err) => {
		const selectedLanguage = parseLanguage(req);
		let configKey = 
			Object.keys(conf).filter(k => {
				return req.headers.host.indexOf(k) > -1;
			})[0];
		const {
			slug,
		} = req.params;

		languageDictionary = Object.assign(languageDictionary, conf[configKey]);
		let cms = cmsApi(conf[configKey], languageDictionary);
		try {
			cms.client
				.getEntries({
					content_type: "phoneTreeMessage",
					"fields.slug": slug,
					locale: languageDictionary[selectedLanguage] || selectedLanguage,
				})
				.then(c => {
					res.contentType("application/json");
					res.send(c.items[0].fields.how_can_i_help.trim());
				})
				.catch(e => {
					res.redirect(`/${country}/`);
				});
		} catch (e) {
			console.log("ERROR", e);
		}
	});
	app.get("/get-articles/:slug/:category", (req, res, err) => {

		console.log("get category");
		const {
			slug,
			category,
		} = req.params;

		const selectedLanguage = parseLanguage(req);
		let configKey = 
			Object.keys(conf).filter(k => {
				return req.headers.host.indexOf(k) > -1;
			})[0];

		languageDictionary = Object.assign(languageDictionary, conf[configKey]);
		let cms = cmsApi(conf[configKey], languageDictionary);
		let locale = languageDictionary[selectedLanguage] || selectedLanguage;
		try {
			cms.client
				.getEntries({
					content_type: "phoneTreeMessage",
					"fields.slug": slug,
					locale: locale,
				})
				.then(c => {
					res.contentType("application/json");
					res.send(c.items[0].fields.options[category - 1].fields.option1);
				})
				.catch(e => {
					res.redirect(`/${country}/`);
				});
		} catch (e) {
			console.log("ERROR", e);
		}
	})
	app.get("/get-article/:slug/:category/:article", (req, res, err) => {
		const selectedLanguage = parseLanguage(req);
		let configKey =
			Object.keys(conf).filter(k => {
				return req.headers.host.indexOf(k) > -1;
			})[0];
		const {
			slug,
			category,
			article
		} = req.params;

		languageDictionary = Object.assign(languageDictionary, conf[configKey]);
		let cms = cmsApi(conf[configKey], languageDictionary);
		let locale = languageDictionary[selectedLanguage] || selectedLanguage;
		try {
			cms.client
				.getEntries({
					content_type: "phoneTreeMessage",
					"fields.slug": slug,
					locale: locale,
				})
				.then(c => {
					console.log(c.items[0].fields.options[category - 1].fields.article_Detail[article - 1]);
					let id = c.items[0].fields.options[category - 1].fields.article_Detail[article - 1].sys.id;
					cms.client
						.getEntries({
							"sys.id": id,
							locale: locale,
						})
						.then(a => {
							console.log("--------");
							let entities = cms.client.parseEntries(a);
							let includes = a.includes.Entry.map(i => { return i.fields });
							let country = entities.items[0].fields.country.fields;
							let category = entities.items[0].fields.category.fields;
							res.contentType("application/json");
							let entry = a.items[0];
							let article = { title: entry.fields.title, sumary: entry.fields.content.substr(0, 200) + "...", link: "http://www.cuentanos.org/" + country.slug + "/" + category.slug + "/" + entry.fields.slug };
							res.send(article);
						})
						.catch(e => {
							console.log(e);
							res.send(e);
						})

					// res.contentType("application/json");
					// res.send(c.items[0].fields.initial_message.trim());
				})
				.catch(e => {
					res.redirect(`/${country}/`);
				});
		} catch (e) {
			console.log("ERROR", e);
		}
	})
}
