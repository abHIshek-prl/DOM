function x(){
    for(let i=0;i<11;i++){
       setTimeout(function(){
            console.log(i)
        },i*1000)
    }
    
}

x()