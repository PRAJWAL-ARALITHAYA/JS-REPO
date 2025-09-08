const numbers = [1,3,5,7,9];
const new_num = numbers.map( (num) => num+2);
console.log(new_num);

const again_new = numbers.
                    map( (num) => {
                        return num * num;
                    })
                    .map( (num) => (num+2))
                    .filter((num) => num>=50 );
console.log(again_new);