// code your solution here
function saturdayFun(activity){
    switch(activity){
        case "bathe my dog":
            return "This Saturday, I want to bathe my dog!";
            break;
            default:
                return "This Saturday, I want to roller-skate!";
                break;
                
    }
}
activity("bathe my dog");
function  mondayWork(acti){
    switch(acti){
        case "work from home":
            return "This Monday, I will work from home.";
            break;
            default:
                return "This Monday, I will go to the office.";
                break;
    }
}
mondayWork("work from home");
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

// Example usage:
console.log(saturdayFun()); //=> "This Saturday, I want to roller-skate!"
console.log(saturdayFun('play soccer'))

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

// Example usage:
console.log(mondayWork()); //=> "This Monday, I will go to the office."
console.log(mondayWork('work from home'));
function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// Example usage:
const encouragingPromptFunction = wrapAdjective('!!!');
console.log(encouragingPromptFunction('a dedicated programmer')); //=> "You are !!!a dedicated programmer!!!"

console.log(wrapAdjective('%')('awesome')); //=> "You are %awesome%!"
console.log(wrapAdjective('~')());

