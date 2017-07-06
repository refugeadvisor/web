import React from 'react';
import services from '../backend';
import { connect } from 'react-redux';
import { push, } from 'react-router-redux';
import { Redirect } from 'react-router';

import {
    LanguageSelector
} from '../components';
import { actions } from '../store';

class LanguageSelectorScene extends React.Component {
    componentWillMount() {
        const { onMountOrUpdate } = this.props;
        onMountOrUpdate();
    }

    render() {
        const { country, language } = this.props;
        const { countryList, onGoTo, onSelectLanguage } = this.props;

        const languages = [
            ['ar', 'Arabic'],
            ['en', 'English'],
            ['fa', 'Farsi'],
        ]

        if (!language) {
            if (!country) {
                return <LanguageSelector languages={languages} onSelectLanguage={(c) => onSelectLanguage(c) && onGoTo('country-selector')} />;
            } else {
                return <LanguageSelector languages={languages} onSelectLanguage={(c) => setTimeout(()=>{onSelectLanguage(c) && onGoTo(country.slug)}, 200)} />;

            }
        } else {
            if (!country) {
                return (<Redirect to={`/country-selector`} />);
            } else {
                return (<Redirect to={`/${country.slug}`} />);

            }
        }

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
            d(actions.changeLanguage(null));
        },
        onSelectLanguage: (code) => {
            d(actions.changeLanguage(code));
        },
        onGoTo: (slug) => {
                d(push(`/${slug}`))
        }
    };
};

export default connect(mapState, mapDispatch)(LanguageSelectorScene);
