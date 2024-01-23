import "./style.css";
import {about} from "./About.js";
import {order} from "./order.js";
import {menu} from "./menu.js"


const content=document.getElementById("content");

const title=document.createElement("h1");
title.id="title";

title.textContent="Mark's Kitchen"

const tab=document.createElement("div");
tab.classList.add("tab");

const tablink=document.getElementsByClassName("tablink");

tab.innerHTML=`
            <button class="tablink" id="about">About</button>
            <button class="tablink" id="order">Order</button> 
            <button class="tablink" id="menu">Menu</button>
            `;                         

content.appendChild(title);
content.appendChild(tab);
content.appendChild(about());


const tabContent=document.getElementsByClassName("tabContent");

 
for(let i=0;i<tablink.length;i++){
     tablink[i].addEventListener("click",(e)=>{
       if(tablink[i].id=="about"){
        content.removeChild(content.children[2]);
        content.appendChild(about())
       } 
       if(tablink[i].id=="order"){
        content.removeChild(content.children[2]);
        content.appendChild(order())
       }
       if(tablink[i].id=="menu"){
        content.removeChild(content.children[2]);
        content.appendChild(menu())
       }      
    })
}


//document.getElementById("about").click()