import React, {Component} from 'react'

import AddTeamMember from './../AddTeamMember/AddTeamMember'
import User from './../User/User'
import ShowAll from './../../components/ShowAll/ShowAll'

import {MEMBERS} from './../../shared/Constants'

import styles from './TeamBoardContent.module.scss'

class TeamBoardContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamMembers: MEMBERS,
            showAll: false
        }
        this.addMemberInTeam = this
            .addMemberInTeam
            .bind(this);
        this.removeMember = this
            .removeMember
            .bind(this);
        this.showAllClicked = this
            .showAllClicked
            .bind(this);
    }
    addMemberInTeam(member) {
        this.setState((prev, next) => {
            member = Object.assign({}, member, {
                id: Math.floor(Math.random() * 1000)
            })
            return {
                teamMembers: [
                    ...prev.teamMembers,
                    member
                ]
            }
        })
    }
    removeMember(id) {
        let teamMembers = this
            .state
            .teamMembers
            .filter((user) => {
                return user.id !== id;
            });
        this.setState({
            teamMembers: [...teamMembers]
        });
    }
    showAllClicked() {
        this.setState((prev, next) => {
            return {showAll: true}
        });
    }
    render() {
        const {teamMembers, showAll} = this.state;
        const membersShown = (showAll)
            ? teamMembers
            : teamMembers.slice(0, 5)
        return (
            <React.Fragment>
                <div className={styles.teamContent}>
                    <AddTeamMember addMemberInTeam={this.addMemberInTeam}></AddTeamMember>
                    {membersShown.map((user, index) => {
                        return <User key={index} user={user} removeMember={this.removeMember}></User>
                    })}
                </div>
                {(!showAll) && <ShowAll onShowAllClicked={this.showAllClicked}></ShowAll>}
            </React.Fragment>
        )
    }
}

export default TeamBoardContent