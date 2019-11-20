'use strict';

function AllData(data){
this.name=data.name;
this.age=data.age;
AllData.all.push(this);

}
AllData.all=[];

function showData(){



    
}











let data=$.get('/data.json')
.then (data=>console.log(data));
    
    
