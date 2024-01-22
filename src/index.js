import "./style.css";
import {about} from "./About.js";

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


for(let link of tablink){
        link.addEventListener("click",(e)=>{
            if(e.target.id=="about"){
                content.appendChild(about());
            }
            if(e.target.id=="order"){
                console.log(e.target)
                console.log("Order");
            }
            if(e.target.id=="menu"){
                console.log("Menu");
            }
        })
}
