let addbtn=document.getElementById("koli");
let f=document.getElementById("xzsd");
let z=document.getElementById("lo");
let i=0,h=250,b,n,r;
let gettext=document.getElementById("pki");
addbtn.addEventListener("click",()=>{
    if(gettext.value == ""){
        alert("Add something");
    }else{
    let q=document.createElement("div");
    q.id=`jo${i}`;
    q.style="padding-left: 50px;padding-top: 15px;display: flex;";
    f.appendChild(q);
    let a=document.createElement("div");
    a.id=`nop${i}`;
    a.style="height:20px;width:30px;background-repeat: no-repeat;background-size: contain;background-image: url('images/unchecked.png');";
    b=document.createElement("div");
    n=b.tagName;
    b.id=`cwe${i}`;
    b.style="padding-left: 10px;padding-bottom:30px;padding-right:130px; text-decoration:none";
    let c=document.createElement("div");
    c.id=`lui${i}`;
    c.style="height: 20px;width: 30px;background-repeat: no-repeat;background-size: contain;background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACUCAMAAAAnDwKZAAAAWlBMVEX///8AAADDw8O3t7f29va7u7vPz8+/v78rKysmJiYaGhrg4ODX19eHh4eTk5OamprJyclxcXF5eXmBgYEMDAwSEhIfHx9CQkKrq6s6OjowMDDu7u5fX19paWkHqEs+AAAECUlEQVR4nO2c65qiMAyGW1SUg44ndNTx/m9zQa0iFkjSFMM+/X7vZt4nTWpbkigVFBQUFBQU1K4447WXxbz2lIr2KStjVuwjTnslodaakzFLS4OsjNG+tKiPOZe9/FjZKxgZo4W+6cjkxzuh1gs2xqjQDx1YGLODscflx5muiYExq9ubu9u7Z8pLJ+d4jE9vBhn8OE/eLDrnjIlDo8TZj/NUN5Q4MeZJ017qyDhpGnSMx9xmb+JCOLdZ1Gfyb1d8thp08OPsYLVIzplGpjx1mJEJP+LQaEFi/IxDo5TIaI1DIwKjNQ6NSPHYSagTdDzGLVFDZ5wUnRb1CcnYFodGBZpx0hqHRrh4zBd99lIk42+fwUoIP8YQe7/shLoAM8Z7kEEEY3emvHRew+yt7Tv2p8Br3ZcpLy1Afox749AIGo+wVX4I4Mc1xh5oradbjMn+nAFlylO7KYTxssHYXPT4cQ1e5UqbC4Sw9OMfirHTj/A4rPQH8uFNV4zdrrN91P+/a7qCAUuh1ro9Z1CZojcYQnVB5UzS4seo++TQ0Ba+yjdNUWttz5l16/nQpiuSUGHX2nK2t98q2oRbZRLjx1rjMoVEiNzD0wZj1Huaqwu2Y1sYUX58z5kIFYcbImEp3G9h7Y406//XNW3JgAobj0/GAQnVdIf6Y4+8xuUyNQ6fjLg9/MbYfKnqFnbHtgjlx3251jPYLeChnTOgQufMkHFohIvHAnyrqLR0X2UCI0aumVKTJ0aWOPTKyEqo1JKfcMlLqKbsjFyZUhMzI7cP+Rm9ELIyeiJU0xUX4Yo/Do2Y/OjLhzex+HHlk5DFj159WMnZj559yMA4AKFSPy6EP0MQOvlxEB86MQ7kQwfGwXxYiRSPA/qQyDgwIYFxcMKSEXVd3n+BcASI8hdafrrI33Tkb93yfwDlHyPkH8bkH2nlXwzkX6/kX1LFX/X5HvC8PZjIf3aS/3gn/gl0BA/J8p/j5X/UEP9pSP4HthF8ppT/sRdF+I1P5vILD0ZQvjFIEQytGOshXKbUSttwfqTnDK4g672pL8KV0FJLxgYsayPmjPziQOeSX98lliyFqqh4xBaqMpX74vZwYNn5w4fyi6ZR5fHfKD3HFfB3Ny76KeDHtUH0teWA23FugrVBfLeZBLaHy2/JgTTYGcEaaPkbm+DtYSdoe1hPm+JTiFZA9iY72J2LvxHwq62KY2j4HEPbrIfm4+4zBX+DtIgWbg+N8K3xSG2Ebx8nQB1vkbOPE2gdykAebsE/lIF/tEVms+c02sI2IIQWh0b8A0LGMGaFf1hNzj6sppEzIkf+1AcnJUIHJ/GPn8rYx08ZP0oe4nXPGZ7xWHfxj0LzMFAu5R4oN4axfEFBQUFBQf+V/gG4CDzdXDGRZgAAAABJRU5ErkJggg==');";
    q.appendChild(a);
    q.appendChild(b);
    q.appendChild(c);
    let puttxt=document.getElementById(`cwe${i}`);
    let huy=document.getElementById(`nop${i}`);
    puttxt.innerText = gettext.value;
    z.style.height=`${h}px`;
    h+=50;
    puttxt.addEventListener("click",()=>{
        let ghu="text-decoration:line-through;padding-right:130px;";
        if(puttxt.style.textDecoration == "line-through"){
            puttxt.style.textDecoration="none";
            a.style="height:20px;width:30px;background-repeat: no-repeat;background-size: contain;background-image: url('images/unchecked.png');";
        }
        else{
            puttxt.style.textDecoration="line-through";
            a.style="height:20px;width:30px;background-repeat: no-repeat;background-size: contain;background-image: url('images/checked.png');";
            }
    })

    huy.addEventListener("click",()=>{
        let ghu="text-decoration:line-through;padding-right:130px;";
        if(puttxt.style.textDecoration == "line-through"){
            puttxt.style.textDecoration="none";
            a.style="height:20px;width:30px;background-repeat: no-repeat;background-size: contain;background-image: url('images/unchecked.png');";
        }
        else{
            puttxt.style.textDecoration="line-through";
            a.style="height:20px;width:30px;background-repeat: no-repeat;background-size: contain;background-image: url('images/checked.png');";
            }

    })
    c.addEventListener("click",()=>{
        h-=50;
        z.style.height=`${h}px`;
        f.removeChild(q);
    })
    i++;
}
});