var url="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_Dkulb6lb9b6EgS6g7I4u2kBWKWSycKhSz2A0j7kL&currencies=";
var a="";
var b="";
var z="";
var c=document.querySelector("p")
var e=document.querySelector("input").value;

const car=async()=>{
    z="%2C";
    var e=document.querySelector("input").value;
    a=document.querySelector("#fromcur").value;
    url=url+a;
    url=url+z;
    b=document.querySelector("#tocur").value;
    url=url+b;
    const pro=await fetch(url);
    const promax=await pro.json();
    var ratetwo=promax.data[b];
    var final=ratetwo*e;
    c.innerHTML=`${e} ${a} = ${final} ${b}`;

}
document.querySelector("button").addEventListener("click",car);