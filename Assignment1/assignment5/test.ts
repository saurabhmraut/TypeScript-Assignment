//a
function add(a=0, b=0){
    console.log(a+b);
}

add();
add(2,2);
add(10, 2);

//b
let displayFriend = function(name: string, ...friend: string[]){
    // console.log(name);
    friend.push(name)

    for(let frn of friend){
        console.log(frn);
    }
} 

displayFriend("abc", "xyz", "try" );

let friendList = ["abc", "xyz", "try"];
displayFriend("Asim", ...friendList);
displayFriend("Rahul", ...friendList);


//c
console.log(" ");
let pringCapitalName = (...name: string[])=>{
    for(let n of name){
        console.log(n.toUpperCase());
    }
}
let nameList = ["Ravi", "Kumar", "Sanjay"];
pringCapitalName(...nameList);