import React from 'react';
import {History, HistoryProps} from "./History";
import styles from './History.module.sass'

interface HistoryArrayInterface {
    historyArray: Array<HistoryProps>
    state: boolean
}


export const HistoryArr = ({historyArray, state}: HistoryArrayInterface) => {
    return (
        <div className={styles.historyArr}>
            {state ? <span>
            {historyArray.map((history: HistoryProps, index) => {
                return <History
                    address={history.address}
                    material1={history.material1}
                    material2={history.material2}
                    material3={history.material3}
                    data={history.data}
                    points={history.points}
                    key={index}
                />
            })}
                </span> : null}
        </div>
    )
}



