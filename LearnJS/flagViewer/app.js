const beginRender = (allCountry)=>{
    const countryDropDown = document.querySelector("#countryDropDown");
    allCountry.forEach((country)=>{
        let opt = document.createElement("option");
        opt.setAttribute("value", country.alpha3Code);
        opt.innerText = country.name;
        countryDropDown.appendChild(opt);
    })

    let flag = document.createElement("img");
    flag.setAttribute("src", allCountry[0].flag);
    document.querySelector("#flag").innerHTML = "";
    document.querySelector("#flag").appendChild(flag);

    countryDropDown.addEventListener("change", (e)=>{
        let index = allCountry.findIndex((country)=>{
            return country.alpha3Code === e.target.value;
        })

        let flag = document.createElement("img");
        flag.setAttribute("src", allCountry[index].flag);
        document.querySelector("#flag").innerHTML = "";
        document.querySelector("#flag").appendChild(flag);
    })
}