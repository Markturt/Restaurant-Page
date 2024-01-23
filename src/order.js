import "./style.css";

function order(){
    let orderContent=document.createElement("div");
    orderContent.className="tabContent";
    orderContent.id="orderpage";

    orderContent.innerHTML=`<div id="order">
                                <h1>ORDER</h1>
                                <p>pick-up &amp; delievery</p>
                            </div>
                            <div id="take-out">
                                <h2>CONTACTLESS TAKE-OUT</h2>
                                <p>To place an order for pickup.<br/>please order via <span id="square">Square</span></p>
                                <a href="#orderpage">ORDER PICKUP</a>
                            </div>
                            <div id="delievery">
                                <h2>DELIEVERY EXPANDED</h2>
                                <p>To place an order for delievery, please choose from <br/>one of our partners below:
                                <div id="partners">
                                    <a href="#">Postmates,</a>
                                    <a href="#">GrubHub,</a>
                                    <a href="#">Seamless &amp;,</a>
                                    <a href="#">UberEats,</a>
                                </div>
                            </div>`

    return orderContent;
}



export {order};
