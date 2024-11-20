const filter = ["name", "capital", "population", "area" ];

const showPicture = (allCountry, index=0)=>{

    let flag = document.createElement("img");
    flag.setAttribute("src", allCountry[index].flag);
    flag.setAttribute("id", "flagPic");

    flag.style.height = "350px";
    flag.style.padding = "2.5px 2.5px 2.5px 2.5px";
    
    document.querySelector("#flag").innerHTML = "";
    document.querySelector("#flag").appendChild(flag);

    document.querySelector("#flagPic").addEventListener("load", ()=>{
        let picture = document.querySelector("#flagPic");
        document.querySelector("#flag").style.height = `${picture.height+5}px`;
    })
}

const showInfos = (allCountry, index=0)=>{
    let infoDiv = document.createElement("div");
    Object.getOwnPropertyNames(allCountry[index]).forEach((propertyName)=>{
        if(filter.includes(propertyName)){
            let infoSpan = document.createElement("span");
            infoSpan.innerText = propertyName==="name"?`${allCountry[index][propertyName]}\n`:`${propertyName.toUpperCase()}: ${allCountry[index][propertyName]}\n`;
            infoDiv.appendChild(infoSpan);
        }
    })
    document.querySelector("#info").innerHTML = "";
    document.querySelector("#info").appendChild(infoDiv);
    
}

const beginRender = (allCountry)=>{
    const countryDropDown = document.querySelector("#countryDropDown");
    allCountry.forEach((country)=>{
        let opt = document.createElement("option");
        opt.setAttribute("value", country.alpha3Code);
        opt.innerText = country.name;
        countryDropDown.appendChild(opt);
    })

    showPicture(allCountry);
    showInfos(allCountry);

    countryDropDown.addEventListener("change", (e)=>{
        let index = allCountry.findIndex((country)=>{
            return country.alpha3Code === e.target.value;
        })
        showPicture(allCountry, index);
        showInfos(allCountry, index);
    });
}