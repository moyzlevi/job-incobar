export function actualDate(){
    let date = new Date();
    let day = date.getDate() > 9 ? date.getDate() : "0"+date.getDate()
    let month = date.getMonth() > 9 ? date.getMonth()+ 1 : "0"+(date.getMonth()+ 1)
    
    let formDate = ((day )) + "/" + ((month)) + "/" + date.getFullYear(); 

    return formDate;
}