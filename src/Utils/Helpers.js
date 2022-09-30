export const handleSubmit = (e, form, number, setRender) => {
    e.preventDefault();
    console.log(form);
    setRender(number)
}