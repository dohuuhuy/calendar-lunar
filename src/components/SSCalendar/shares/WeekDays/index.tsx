import React from 'react'
import CellDays from '../../common/CellDays'
import { defineDays, weekDays } from '../../process/contanst'
import styles from './styles.module.scss'

const WeekDays = () => {
  return (
    <div className={styles.weekCell}>
      <ul>
        {weekDays.map((v: any, i = 0) => {
          return (
            <li key={i}>
              <CellDays value={v} type={defineDays.CELL_WEEK} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default WeekDays