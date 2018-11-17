import React from 'react'

import styles from './User.module.scss'

const User = (props) => {
    return <div className={styles.teamMember}>
        <div className={styles.memberAvatar}>
            <img className={styles.image} alt="avatar" src="static/images/avatar-default.png"></img>
            <div data-tooltip="Remove" className={styles.memberRemove} onClick={() => props.removeMember(props.user.id)}>
                <span className={styles.memberRemoveSpan}>x</span>
            </div>
        </div>
        <div className={styles.memberDetails}>
            <div>{props.user.role}</div>
            <div className={styles.memberUsername}>{props.user.username}</div>
        </div>
    </div>
}

export default User