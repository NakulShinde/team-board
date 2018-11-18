import React from 'react'
import styles from "./ShowAll.module.scss"

const ShowAll = (props) => {
    return <div className={styles.showAll} onClick={() => props.onShowAllClicked()}>Show all
        <img className={styles.image} alt="#" src='static/images/expand-arrow.png'></img>
    </div>
}

export default ShowAll