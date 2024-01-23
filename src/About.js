import "./style.css"
import phoneIcon from "./images/bxs-phone.svg";
import fbIcon from "./images/bxl-facebook.svg";
import messageIcon from "./images/bxs-envelope.svg";

function about(){
    let aboutContent=document.createElement("div");
    aboutContent.className="tabContent";
    aboutContent.id="aboutpage";

    aboutContent.innerHTML=`
                            <div id="about">
                                <h1>ABOUT</h1>
                                <p>our restaurant</p>
                                <div id=imgContainer>
                                    <img src=${phoneIcon} alt="phone-contact"/>
                                    <img src=${fbIcon} alt="facebook icon"/>
                                    <img src=${messageIcon} alt="message icon"/>
                                </div>
                            </div>
                            <div id="hours">
                                <h2>HOURS</h2>
                                <div class="days">Monday- 12pm-9pm</div>
                                <div class="days">Tuesday-12pm-9pm</div>
                                <div class="days">Wednesday- 12pm-10pm</div>
                                <div class="days">Thursday- 12pm-10pm</div>
                                <div class="days">Friday- 12pm-10pm</div>
                                <div class="days">Saturday-12pm-10pm</div>
                                <div class="days">Sunday- 12pm-10pm</div>
                            </div>
                            <div id="phone">
                                <h2>PHONE</h2>
                                <div>234-704-866-1510</div>
                                <div>234-901-889-8542</div>
                            </div>
                            <a href="#aboutpage">ABOUT US </button>
                            `
    return aboutContent
}

export {about};