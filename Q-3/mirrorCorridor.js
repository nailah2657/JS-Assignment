let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));
let found = -1;
for (let x=0;x<=100000;x++)
{
    let num=N+x;
    if(num % K ===0)
    {
        let str = num.toString();
        let reversed = str.split("").reverse().join("");

        if (str === reversed) 
        {
            found = x;
            break;
        }
    }
}
alert(found);