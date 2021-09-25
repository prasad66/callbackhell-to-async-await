// Async await
function countNumber(num){
    return new Promise((resolve, reject) => {
            if (num > 0) {
                setTimeout(() => {
                    countdown.innerText = num;
                    resolve(num)
                }, 1000);
            } else {
                setTimeout(() => {
                    document.getElementById("new").className = "badge bg-success text-wrap fs-1";
                    countdown.innerText = "Happy Independence Day!!!!";
                    resolve("Happy Independence Day!!!!");
                }, 1000);
            }
        });
}


async function done(){
    let ten = await countNumber(10);
    let nine = await countNumber(--ten);
    let eight = await countNumber(--nine);
    let seven = await countNumber(--eight);
    let six = await countNumber(--seven);
    let five = await countNumber(--six);
    let four = await countNumber(--five);
    let three = await countNumber(--four);
    let two = await countNumber(--three);
    let one = await countNumber(--two);
    let wish = await countNumber(--one);
}

done();
