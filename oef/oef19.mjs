// Begin van boilerplate dat je even mag vergeten
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { constants } from 'node:buffer';
const userInput = readline.createInterface({input, output});
// Einde van boilerplate dat je even mag vergeten

function tvChoose(tvseries){
    let tvChoose = ``;
    switch(tvseries){
        case `one piece`:
            console.log(`${tvseries} takes place on the grand line.`);
            break;
        case `simpsons`:
            console.log(`${tvseries} takes place in springfield.`);
            break;
        case `naruto`:
            console.log(`${tvseries} takes place in the elemental nations`);
            break;
        default:
            console.log(`sorry i dont know where ${tvseries} is taking place.`);
    }
        
    return tvChoose

}

tvChoose(await userInput.question(`what serie: `));

process.exit();
