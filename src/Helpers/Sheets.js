export function ParseData(data)  {
    const monthAbbreviation = [
        'FEB',
        'MAR',
        'ABR',
        'MAY',
        'JUN',
        'JUL',
        'AGO',
        'SEP',
        'OCT',
        'NOV',
        'DIC',
        'ENE'
      ]

    let resp = data.substring(data.indexOf('{'), data.lastIndexOf('}') + 1)
    const jsData = JSON.parse(resp)
    const spreadsheetRows = jsData.table.rows

    let arrayResp = spreadsheetRows.map((row, index) => {

        if(row.c[0] != undefined){
            const ResponseDate = row.c[0].v
            const stringDate = ResponseDate.substring(5, ResponseDate.length - 1)
            const dateArray = stringDate.split(',')
            const eventDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2])
            const eventMonth = eventDate.getMonth()
            const eventDateComp = new Date(dateArray[0], dateArray[1], dateArray[2])
            let city = null
            
            if (row.c[5] != null){
                city = row.c[5].v
            }
            console.log(row)
            return {
                "date":eventDate,
                "dateComp":eventDateComp,
                "url":row.c[3] != null?row.c[3].v+" ":"",
                "monthAbbreviation":monthAbbreviation[eventMonth],
                "title":row.c[1].v,
                "organizers":row.c[2].v+"",
                "modality": row.c[4] !== null?row.c[4].v:"",
                "city":city != null?city:"No Confirmado"
            }        
        }
    })

    return arrayResp

}

export default{
    ParseData
}