import React from 'react'

import styles from './AddTeamMember.module.scss'
import userStyle from './User.module.scss'

const AddTeamMember = (props) => {
    return <div className={[userStyle.teamMember, styles.addTeamMember].join(' ')}>
        <div className={styles.memberAvatar}>
            <div className={styles.memberAdd} onClick={() => props.addMemberClicked()}>
                <span className={styles.memberAddSpan}>+</span>
            </div>
        </div>
        <div className={styles.addDetails}>
            <div>Add team member to this test</div>
        </div>
    </div>
}

export default AddTeamMember