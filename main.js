let a;
a = Math.trunc(100 * Math.random(100));

alert("Random son" + a)

if (a % 3 === 0 && a % 5 === 0) {
    alert(a + "Bu son FizzBuzz")
} else if(a % 3 === 0) {
    alert(a + "Bu son Fizz")
} else if(a % 5 === 0) {
    alert("Bu son Buzz")
} else if(a % 3 && a % 5) {
    alert(a + "Bu son Fizz, Buzz va FizzBuzz ham emas")
}


