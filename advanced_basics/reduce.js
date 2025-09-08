const nums = [1,2,3,4];

const total =nums.reduce( (acc,val) => (acc+val),0)
console.log(total);

const cart = [
    {
        'item':'bedsheet',
        'price':399
    },
    {
        'item':'pillow',
        'price':199
    },
    {
        'item':'bottle',
        'price':100
    }

]
const totalCartValue = cart.reduce( (acc,item) => (acc + item.price),0);
console.log(totalCartValue);