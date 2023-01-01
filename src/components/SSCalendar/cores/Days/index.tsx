import React from 'react'
import { ItemDay, SelectDayArgs } from '../../interface'
import CellDays from '../../shares/CellDays'
import styles from './styles.module.scss'

export interface DaysProps {
  data: ItemDay[]
  onSelectDay?: (args: SelectDayArgs) => void
}

const Days: React.FC<DaysProps> = ({ data, onSelectDay }) => {
  return (
    <div className={styles.containerDays}>
      <ul className={styles.listCell}>
        {data.map((v, i = 0) => {
          const passProps = {
            onSelectDay,
            value: v.days,
            ...v
          }

          return (
            <li key={i}>
              <CellDays {...passProps} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Days
