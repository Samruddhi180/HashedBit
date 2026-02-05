//

const states=['Andhra Pradesh','Maharashtra','Uttarakhand','Kerala','Sikkim','Assam'];

const result=[];

for(let i=0;i<states.length;i++){

    let firstlet=states[i][0];

    if(firstlet!='A'&& firstlet!='E' && firstlet!='I' && firstlet!='O' && firstlet!='U'){
        result.push(states[i]);
    }
}

console.log(result);

