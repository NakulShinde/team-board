import React from 'react'
import Autosuggest from 'react-autosuggest';

import User from './../../components/User/User'
import {MEMBERS} from './../../shared/Constants'

import './AutoCompleteField.css'

const NOT_A_TEAM_MEMBER = {
    "username": "May be he/she not yet in you team?",
    "role": "Team member not found",
    "picture": "avatar-default.png",
    "id": 0
}
const getSuggestions = value => {
    const inputValue = value
        .trim()
        .toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
        ? []
        : MEMBERS.filter(lang => lang.username.toLowerCase().slice(0, inputLength) === inputValue);
};

const getSuggestionValue = suggestion => suggestion.username;

const renderSuggestion = suggestion => (
    <User user={suggestion}></User>
);

class AutoCompleteField extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            suggestions: []
        };

        this.onChange = this
            .onChange
            .bind(this)
        this.onBlurField = this
            .onBlurField
            .bind(this)
        this.onSuggestionsFetchRequested = this
            .onSuggestionsFetchRequested
            .bind(this)
        this.onSuggestionsClearRequested = this
            .onSuggestionsClearRequested
            .bind(this)
        this.onSuggestionMemberSelected = this
            .onSuggestionMemberSelected
            .bind(this)
    }

    onChange = (event, {newValue}) => {
        this.setState({value: newValue});
    };

    onBlurField = () => {
        this
            .props
            .onBlurAutoSuggestField()
    }
    // Autosuggest will call this function every time you need to update
    // suggestions. You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({value}) => {
        const suggestionList = getSuggestions(value)
        if (suggestionList.length !== 0) {
            this.setState({suggestions: suggestionList});
        } else {
            this.setState({suggestions: [NOT_A_TEAM_MEMBER]});
        }
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({suggestions: []});
    };

    onSuggestionMemberSelected = (e, data) => {
        //clear input value
        this.setState({value: ''})
        //pass selected suggestion to parent
        this
            .props
            .onSelectUserFromAutoComplete(data.suggestion);
    }

    render() {
        const {value, suggestions} = this.state;

        const inputProps = {
            placeholder: 'Type team member name',
            value,
            onChange: this.onChange,
            onBlur: this.onBlurField
        };

        return (<Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            onSuggestionSelected={this.onSuggestionMemberSelected}
            inputProps={inputProps}/>);
    }
}

export default AutoCompleteField