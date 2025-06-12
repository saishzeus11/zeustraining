function multiply(res, num) {
    let carry = 0;
    for (let i = res.length - 1; i >= 0; i--) {
        let prod = res[i] * num + carry;
        res[i] = prod % 10;
        carry = Math.floor(prod / 10);
    }

    while (carry > 0) {
        res.unshift(carry % 10);
        carry = Math.floor(carry / 10);
    }

    return res;
}

function factorial(n) {
    let res = [1];  
    for (let i = 2; i <= n; i++) {
        res = multiply(res, i);
    }

    return res;
}
  let result = factorial(100);
    console.log(result.join(''));  

function getResult(){
    let result = factorial(document.getElementById('num').value);
    console.log(result.join(''));  
    document.getElementById('re').innerText = result;
}
