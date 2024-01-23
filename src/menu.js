import "./style.css"

function menu(){
    let menuContent=document.createElement("div");
    menuContent.className="tabContent";
    menuContent.id="menupage";

    menuContent.innerHTML=`<div id="menu">
                            <div id="starters">
                                <h2>Starters</h2>
                                <div class="grid">
                                    <div class="grid-content">
                                        <h3>Creole Soul Chicken -----&dollar;75</h3>
                                        <div>
                                            (60 pcs) Our signature soy chicken nuggets panko-breaded with Cajun and rosemary seasoning and fried.Served 
                                            with hickory smoked barbecue vidalia dressing.
                                        </div>
                                    </div>
                                    <div class="grid-content">
                                        <h3>BBQ Buffalo Wings -----&dollar;150</h3>
                                        <div>
                                            (50 pcs) Our famous vegan soy say wings marinated in a spice citrus BBQ sauce. Served with ranch dressing and 
                                            celery sticks.
                                        </div>
                                    </div>
                                    <div class="grid-content">
                                        <h3>Cajun Fried Shrimp -----&dollar;70</h3>
                                        <div>
                                            (40 pcs) Breaded and fried say shrimp seasoned with paprika,thyme and sage.Served with our vegan cocktail sauce.
                                        </div>
                                    </div>
                                    <div class=grid-content>
                                        <h3>Vegetable Spring Rolls -----&dollar;90</h3>
                                        <div>
                                            (40 pcs)Fried vegan spring rolls filled with cabbage,carrots and mushroom.Served with vegan duck sauce.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="garden">
                                <h2>The Garden</h2>
                                <div class="grid">
                                    <div class="grid-content">
                                        <h3 >House Salad ----------&dollar;60</h3>
                                        <div>
                                            Mescliun mix,cherry tomatoes,shredded carrots,cucumbers and mushrooms.Served with a quart of our homemade
                                            carrot ginger dressing
                                        </div>
                                    </div>
                                    <div class="grid-content">
                                        <h3>Grilled Jerk Chicken Salad ----------&dollar;75</h3>
                                        <div>
                                            House salad served with grilled soy chicken marinated in a jerk BBQ sauce. Served with your choice 
                                            of dressing
                                        </div>
                                    </div>
                                    <div class="grid-content">
                                        <h3>Fried Chicken Salad ----------&dollar;75</h3>
                                        <div>
                                            Fried breaded soy Chicken atop mescluin mix, cherry tomatoes,shredded carrots,cucumbers and mushrooms.
                                            Served with your choice of dressing
                                        </div>
                                    </div>
                                    <div class="grid-content">
                                        <h3>Grilled Lemon Herb Chicken Salad ----------&dollar;75</h3>
                                        <div>
                                            Grilled lemon herb soy chicken served over mescluin mix,cherry tomatoes,shredded carrots,cucmbers.Served
                                            with your choice of dressing 
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div id="main Course">
                                <h2>Main Course</h2>
                                <div class="grid">
                                    <div class="grid-content">
                                        <h3 >Bamboo Curry Chicken ----------&dollar;75</h3>
                                        <div>
                                            Sauteed soy chicken and potatoes marinated in a spicy indian coconut curry sauce
                                        </div>
                                    </div>
                                    <div class="grid-content">
                                        <h3 >Citrus Beef ----------&dollar;75</h3>
                                        <div>
                                            Citrus soy beef stir fried with brocoli,red and yellow peppers,zucchini and yellow squash
                                        </div>
                                    </div>
                                    <div class="grid-content">
                                        <h3 >Szechuan Beef ----------&dollar;75</h3>
                                        <div>
                                            Mildly spiced soy peppered beef sauteed with Chinese chilies,brocoli,red and green peppers
                                        </div>
                                    </div>
                                    <div class="grid-content">
                                        <h3 >Chicken Parmesan Beef ----------&dollar;55</h3>
                                        <div>
                                           (12pcs) Breaded soy chicken cutlets,topped with melted vegan cheese and a tomato basil marinara sauced
                                           served on the side
                                        </div>
                                    </div>
                                </div>
                            </div>        
                           </div>`

    return menuContent;
}  

export {menu};