import React from 'react'

import TeamBoardHeader from './../TeamBoardHeader/TeamBoardHeader'
import TeamBoardContent from './../TeamBoardContent/TeamBoardContent'

import styles from './TeamBoard.module.scss'

const TeamBoard = (props) => {
    return <div className={styles.teamBoard}>
        <TeamBoardHeader></TeamBoardHeader>
        <TeamBoardContent></TeamBoardContent>
    </div>
}

export default TeamBoard