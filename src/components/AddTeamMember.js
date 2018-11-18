import React, {Component} from 'react'

import AutoCompleteField from './AutoComplete/AutoCompleteField'

import styles from './AddTeamMember.module.scss'
import appStyle from './../App.module.scss'
import userStyle from './User.module.scss'

class AddTeamMember extends Component {
    constructor() {
        super();
        this.state = {
            showAutoSuggest: false
        };

        this.onAddMemberClick = this
            .onAddMemberClick
            .bind(this);
        this.onBlurAutoSuggestField = this
            .onBlurAutoSuggestField
            .bind(this)
        this.onSelectUserFromAutoComplete = this
            .onSelectUserFromAutoComplete
            .bind(this)

    }

    onAddMemberClick() {
        this.setState({showAutoSuggest: true});
    }

    onBlurAutoSuggestField() {
        this.setState({showAutoSuggest: false});
    }

    onSelectUserFromAutoComplete(member){
        this.props.addMemberInTeam(member);
    }

    render() {
        const {showAutoSuggest} = this.state;
        let content = ''
        if (showAutoSuggest) {
            content = <AutoCompleteField
                onSelectUserFromAutoComplete={this.onSelectUserFromAutoComplete}
                onBlurAutoSuggestField={this.onBlurAutoSuggestField}></AutoCompleteField>
        } else {
            content = <React.Fragment>
                <div className={styles.memberAvatar}>
                    <div
                        data-tooltip="Add Member"
                        className={[styles.memberAdd, appStyle.toolTip].join(' ')}
                        onClick={() => this.onAddMemberClick()}>
                        <span className={styles.memberAddSpan}>+</span>
                    </div>
                </div>
                <div className={styles.addDetails}>
                    <div>Add team member to this test</div>
                </div>
            </React.Fragment>
        }

        return (
            <div className={[userStyle.teamMember, styles.addTeamMember].join(' ')}>
                {content}
            </div>
        )
    }
}

export default AddTeamMember