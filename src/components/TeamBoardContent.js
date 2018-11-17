import React, {Component} from 'react'

import AddTeamMember from './AddTeamMember'
import User from './User'
import ShowAll from './ShowAll'

import styles from './TeamBoardContent.module.scss'

class TeamBoardContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            teamMembers: [
                {
                    "username": "Max Mustermann",
                    "role": "Admin",
                    "picture": "avatar-default.png",
                    "id": 1
                }, {
                    "username": "Erika Mustermann",
                    "role": "Internal",
                    "picture": "avatar-default.png",
                    "id": 2
                }, {
                    "username": "Minta J\u00e1nos",
                    "role": "Internal",
                    "picture": "avatar-default.png",
                    "id": 3
                }, {
                    "username": "Minta Kata",
                    "role": "External",
                    "picture": "avatar-default.png",
                    "id": 4
                }, {
                    "username": "Jin-Soo Kwon",
                    "role": "Internal",
                    "picture": "avatar-default.png",
                    "id": 5
                }, {
                    "username": "Sun-Hwa Kwon",
                    "role": "Internal",
                    "picture": "avatar-default.png",
                    "id": 6
                }, {
                    "username": "Desmond Hume",
                    "role": "Admin",
                    "picture": "avatar-default.png",
                    "id": 7
                }, {
                    "username": "Duncan Idaho",
                    "role": "External",
                    "picture": "avatar-default.png",
                    "id": 8
                }, {
                    "username": "Georgia Lass",
                    "role": "External",
                    "picture": "avatar-default.png",
                    "id": 9
                }, {
                    "username": "Betty Rhomer",
                    "role": "Internal",
                    "picture": "avatar-default.png",
                    "id": 10
                }, {
                    "username": "John Cena",
                    "role": "Lead Software Engineer",
                    "picture": "avatar-default.png",
                    "id": 11
                }, {
                    "username": "Nakul Shinde",
                    "role": "Senior Software Engineer",
                    "picture": "avatar-default.png",
                    "id": 12
                }
            ],
            showAll: false
        }
        this.addMemberClicked = this
            .addMemberClicked
            .bind(this);
        this.removeMember = this
            .removeMember
            .bind(this);
        this.showAllClicked = this
            .showAllClicked
            .bind(this);
    }
    addMemberClicked(){
        console.log("addMemberClicked")
    }
    removeMember(id) {
        let teamMembers = this.state.teamMembers.filter((user) =>{
            return user.id !== id;
        });
        this.setState({teamMembers: [...teamMembers]}); 
    }
    showAllClicked() {
        this.setState((prev, next) => {
            return {
                showAll: true
            }
        });
    }
    render() {
        const {teamMembers, showAll} = this.state;
        const membersShown = (showAll)? teamMembers : teamMembers.slice(0, 5)
        return (
            <React.Fragment>
                <div className={styles.teamContent}>
                    <AddTeamMember addMemberClicked={()=> this.addMemberClicked}></AddTeamMember>
                    {membersShown.map((user, index) => {
                        return <User key={index} user={user} removeMember={this.removeMember}></User>
                    })}
                </div>
                {(!showAll) 
                    && <ShowAll onShowAllClicked={this.showAllClicked}></ShowAll>}
            </React.Fragment>
        )
    }
}

export default TeamBoardContent