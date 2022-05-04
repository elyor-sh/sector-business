
export const drawCell = (row: any, cell: any) => {
    switch (cell.type) {
        case 'text':
            return <p>{row[cell.contentKey] ? row[cell.contentKey] : '-'}</p>
        case 'obj':
            return <p>{row[cell.contentKey] ? row[cell.contentKey][cell.objKey] : '-'}</p>
        default:
            return null
    }
}