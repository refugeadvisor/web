import React from "react";
import "./ServiceHome.css";
import { translate } from "react-i18next";

import HeaderBar from "./HeaderBar";
import _ from "lodash";

import tinycolor from "tinycolor2";

class ServiceCategoryList extends React.Component {
	state = {
		categories: [],
		loaded: false,
	};
	componentDidMount() {
		const { fetchCategories } = this.props;
		if (fetchCategories) {
			fetchCategories().then(categories => {
				this.setState({ categories, loaded: true  });
			});
		}
	}

	fixColor(color) {
		if (!color) {
			color = "#FFF";
		} else if (color.indexOf("#") === -1) {
			color = `#${color}`;
		}
		return color;
	}

	renderCategory(c) {
		let { onSelectCategory, location } = this.props;
		onSelectCategory = onSelectCategory || (() => console.log("noop"));

		let { id, name, vector_icon } = c;
		let iconPrefix = vector_icon.split("-")[0];

		let color = this.fixColor(c.color);
		color = tinycolor(color)
			.saturate(30)
			.toHexString();

		let style = {
			color: color === "#ffffff" ? "black" : color,
		};

		return (
			<li key={id}>
				<hr className="line" />
				<div className="container" onClick={() => {setTimeout(() => onSelectCategory(c), 300) }}> 
					<i className={`${iconPrefix} ${vector_icon}`} style={style} />
					<strong>{name}</strong>
				</div>
			</li>
		);
		
	}
	render() {
		const { categories, loaded } = this.state;
		const { t, locationEnabled, toggleLocation, listAllServices, goToLocationList, goToMap, locationName } = this.props;	
		if (!loaded) {
			return (
				<div className="ServiceCategoryList">
					<div className="Title">
						<h1>{t("Service Categories")}</h1>
					</div>
					<div className="loader" />
				</div>
			);
		}
		if ((categories || []).length === 0 && loaded) {
			return (
				<div className="ServiceCategoryList">
					<div className="Title">
						<h1>{t("Service Categories")}</h1>
					</div>
					<div className="NoServices">
						<h2>{t("No services found")}</h2>
					</div>
				</div>
			);
		}
		let sortedCategories = _.sortBy(categories || [], c => {
			return c.number;
		});
		return <div>
			<HeaderBar key={"Header"} title={t("Service Categories").toUpperCase()}>
				<li onClick={toggleLocation || _.identity}>
					<h1>{t("Order results by distance to me")}</h1>
					{!locationEnabled && <i className="MenuIcon material-icons">radio_button_unchecked</i>}
					{locationEnabled && <i className="MenuIcon material-icons">radio_button_checked</i>}
				</li>
			</HeaderBar>
			<div key={"List"} className="ServiceCategoryList">
				<ul>
					{locationName  && 
					<div>
						<li>
							<div className="container disabled">								
								<strong>{t("Services in") + " " + locationName }</strong>
							</div>
						</li>
						<hr className="line" />	
					</div>
					}
					<li key="00">
						<div className="container" onClick={listAllServices}>
							<i className="fa fa-list" />
							<strong>{t("All Services")}</strong>
						</div>
					</li>
					<hr className="line" />			
					<li key="000">
						<div className="container" onClick={goToLocationList}>
							<i className="fa fa-globe" />
							<strong>{t("Locations")}</strong>
						</div>
					</li>
					<hr className="line" />			
					<li>
						<div className="container" onClick={goToMap}>
							<i className="fa fa-map" />
							<strong>{t("Map")}</strong>
						</div>
					</li>
					<hr className="line" />			
					
					{sortedCategories.map(c => this.renderCategory(c))}
				</ul>
			</div>
		</div>
	}
}

export default translate()(ServiceCategoryList);
