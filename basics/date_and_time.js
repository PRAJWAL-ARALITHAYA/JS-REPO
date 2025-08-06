const today_date= new Date();
console.log(today_date)
console.log(today_date.toDateString())
console.log(today_date.toISOString())
console.log(today_date.toJSON())
console.log(today_date.toLocaleDateString())
console.log(today_date.toLocaleString("en-IN",{timeZone:"Asia/Kolkata"}))

const new_date= new Date(2025, 9, 25,16,7,05);
console.log(new_date.toLocaleString());
const my_time= Date.now();
console.log(my_time);
console.log(new_date.getHours())