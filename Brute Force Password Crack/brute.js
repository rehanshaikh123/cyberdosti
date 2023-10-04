var max_pin=10000;
for(var pin=0;pin<=max_pin;pin++)
{
document.getElementById("pass").value=pin;
var result=checking_password();

if(!result)
{
    console.log("checking:"+pin+"as pin:Incorrect!");
}
else
{    
    console.log("checking:"+pin+"as pin:correct!");
    document.getElementById("response").innerHTML=String(pin)+"= SUCCESSFULLY CRACKED 💯";
    break;
}
    if(pin==max_pin)
{
    document.getElementById("response").innerHTML="= NOT FOUND IN DATA😖☠️💀";

}
}