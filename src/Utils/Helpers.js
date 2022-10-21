export const handleSubmit = (e, form, number, setRender) => {
    e.preventDefault();
    console.log(form);
    setRender(number)
}
export const findDays = (date) => {
    var date1 = new Date(date);
    var date2 = new Date();
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Math.ceil(Difference_In_Days);
}