export interface SSCountDownProps {
  cls?: {
    wapperCls?: any
    itemCls?: any
    numCls?: any
    txtCls?: any
  }
  setting?: {
    [K in keyTxt]: {
      status: boolean
    }
  }
  timeInput?: any
  getValue?: boolean
}

export interface InitTime {
  days: number | string
  hours: number | string
  minutes: number | string
  seconds: number | string
}

export type keyTxt = 'days' | 'hours' | 'minutes' | 'seconds'

export type RenderTime = {
  key: keyTxt
  num: string | number
  txt: string
}