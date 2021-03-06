// libs
import React from "react";
import { withTranslation } from "react-i18next";

// local
import HeaderBar from "../../../components/HeaderBar/HeaderBar";
import "./ServiceHome.css";

const NS = { ns: 'Services' };

/**
 * @class
 * @description 
 */
class ServiceCategoryList extends React.Component {
	state = {
		regions: [],
	};

	renderRegion(c) {
		let {
			openLocation,
			language
		} = this.props;
		openLocation = openLocation || (() => console.log("noop"));

		const {
			id,
			name,
			title,
			slug
		} = c;
		
		const cName = c[`name_${language}`] ? c[`name_${language}`] : name;

		let locationName = title ? title : cName;

		return (
			<li key={`${id}-${slug}`}>
				<hr className="line" />

				<div className="container" onClick={() => setTimeout(() => openLocation(c, name), 300)}>
					<i className='fa fa-building' />
					<strong>{locationName}</strong>
				</div>
			</li>
		);
	}

	render() {
		const {
			allRegions, t, department, departmentName
		} = this.props;

		if ((allRegions || []).length === 0) {
			return (
				<div className="ServiceCategoryList">
					<div className="Title">
						<h1>{t("services.Service Categories", NS)}</h1>
					</div>
					<div className="loader" />
				</div>
			);
		}
		let title = department ? `${t("services.Locations in", NS)} ${departmentName}` : t("services.Locations", NS);

		return [
			<HeaderBar key={"Header"} title={title.toUpperCase()} />,
			<div key={"List"} className="ServiceCategoryList">
				<ul>
					{allRegions.map(c => this.renderRegion(c))}
				</ul>
			</div>
		];
	}
}

export default withTranslation()(ServiceCategoryList);
