const getData = () => {
    let req = fetch("https://restcountries.eu/rest/v2/all");
    req.then((reply)=>{
        if(reply.status===200){
            return reply.json();
        }
        throw Error("Something Happened! Sorry! :(");
    }).then((data)=>{
        beginRender(data);
    }).catch((error)=>{
        console.log(error)
    })
}

getData();