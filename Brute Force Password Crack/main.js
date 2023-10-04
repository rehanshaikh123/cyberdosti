
function checking_password()
{
    if(document.getElementById('pass').value=='10000')
    {
       // document.getElementById('response').innerText='VALID PASSWORD💯🤍🥰';
       return true;
    }
    else
    {
       // document.getElementById('response').innerText='NOT FOUND IN DATA😖☠️💀';
    return false;
       

    }

}
function Visible()
{
    var psd=document.getElementById("pass");
    if(psd.type === "password")
    {
        psd.type="text";
    }
    else
    {
        psd.type="password";
    }
}