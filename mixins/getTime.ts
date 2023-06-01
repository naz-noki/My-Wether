export default (timezone: number):number => {
    let date = new Date().getUTCHours();
    timezone = (timezone/60)/60;
    return date + timezone;
}