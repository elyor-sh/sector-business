export interface IHeadCells {
    label: string
    align?: 'center' | 'left' | 'right',
    disablePadding?: boolean
    id: number | string
}

export interface IRowCells {
    type: string
    contentKey: string
    align?: 'center' | 'left' | 'right',
    objKey?: string
}

export type IOrder = 'asc' | 'desc';