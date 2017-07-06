import React from 'react';
import services from '../backend';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import {
    CountrySelector
} from '../components';
import { actions } from '../store';

class CountrySelectorScene extends React.Component {
    componentWillMount() {
        const { onMountOrUpdate } = this.props;
        onMountOrUpdate();
    }

    render() {
        const { country, language } = this.props;
        const { countryList, onGoTo } = this.props;

        if (!countryList) {
            return (<div></div>);
        }

        if(!country) {
            return <CountrySelector onGoTo={onGoTo} countryList={countryList} />;
        }

        return <div>{countryList.map((c, i) => (
            <div key={c._id} onTouchTap={() => { onGoTo(c.slug) }}>
                {c.name}
            </div>
        ))}</div>
    }
}

const mapState = ({ countryList, country, language }, p) => {
    return {
        countryList,
        country,
        language,
    };
};
const mapDispatch = (d, p) => {
    return {
        onMountOrUpdate: () => {
            d(actions.selectArticle(null));
            d(actions.selectCategory(null));
            d(actions.changeCountry(null));
            d(services.countries.find()).then(s => d(actions.selectCountryList(s.value)));
        },
        onGoTo: (slug) => {
            d(push(`/${slug}`))
        }
    };
};

export default connect(mapState, mapDispatch)(CountrySelectorScene);
