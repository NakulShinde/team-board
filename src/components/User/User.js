import React from 'react'

import styles from './User.module.scss'
import appStyle from './../../App.module.scss'

const UserRole = (props) => {
    return <div>
        {props.userRole}
        {(props.userRole.toLowerCase() === 'external') && <span className={styles.astricMark}>*</span>}
    </div>
}

const MemberDetails = (props) => {
    return (
        <div className={styles.memberDetails}>
            <UserRole userRole={props.user.role}></UserRole>
            <div className={styles.memberUsername}>{props.user.username}</div>
        </div>
    )
}
const UserAvatar = (props) => {
    return (
        <img
            className={styles.image}
            alt="avatar"
            src={(props.url)
            ? props.url
            : "static/images/avatar-default.png"}></img>
    )
}
const User = (props) => {
    return <div className={styles.teamMember}>
        <div className={styles.memberAvatar}>
            <UserAvatar></UserAvatar>
            {(props.removeMember) && <div
                data-tooltip="Remove"
                className={`${styles.memberRemove} ${appStyle.toolTip}`}
                onClick={() => props.removeMember(props.user.id)}>
                <span className={styles.memberRemoveSpan}>x</span>
            </div>
}
        </div>
        <MemberDetails user={props.user}></MemberDetails>
    </div>
}

export default User