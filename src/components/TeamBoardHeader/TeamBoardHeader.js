import React from 'react'

import styles from './TeamBoardHeader.module.scss'

const TeamBoardHeader = (props) => {
    return <div className={styles.teamHeader}>
        <div className={styles.teamHeading}>Your team for this test</div>
        <div className={styles.teamActions}>
            <span className={styles.text}>team page</span>
            <img className={styles.teamIcon} src='static/images/team_icon.png' alt='team'></img>
        </div>
    </div>
}

export default TeamBoardHeader