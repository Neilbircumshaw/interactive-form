// TASK 1.  focus the first text input field when page loads

const nameField = document.getElementById("name")

window.addEventListener("load", () =>
{nameField.focus();
});

//TASK 2.   add an input field that shows either when "other" is selected or javascript is turned off. 

const title = document.getElementById("title")
const other_title = document.getElementById("other-title")

other_title.style.display = "none";

title.addEventListener("change", () => {
	if(title.value === "other"){
		other_title.style.display = ""
	}
	
	else( other_title.style.display = "none")
	
	
}); 

/*TASK 3. match the colors for the shirt in regards to which is picked in the design. First need to remove the color selector from the page.
This will still load for users that don't have JS running.   

*/   

const color_div = document.getElementById("colors-js-puns")
const color1 = document.getElementById("color")
const design = document.getElementById("design")


const select_1 = document.createElement("select")
const Cornflower_Blue = document.createElement("option")
const Darkslategrey = document.createElement("option")
const Gold = document.createElement("option")

const select_2 = document.createElement("select")
const Tomato = document.createElement("option")
const Steelblue = document.createElement("option")
const Dimgrey = document.createElement("option")



Cornflower_Blue.value = "Cornflower Blue";
Cornflower_Blue.textContent = "Cornflower Blue";

Darkslategrey.value = "Darkslategrey";
Darkslategrey.textContent = "Darkslategrey";

Gold.value = "Gold";
Gold.textContent = "Gold";

Tomato.value = "Tomato";
Tomato.textContent = "Tomato";

Steelblue.value = "Steelblue";
Steelblue.textContent = "Steelblue";

Dimgrey.value = "Dimgrey";
Dimgrey.textContent = "Dimgrey";



color_div.removeChild(color1);

select_1.style.display = "none";
color_div.appendChild(select_1);
		select_1.appendChild(Cornflower_Blue);
		select_1.appendChild(Darkslategrey);
		select_1.appendChild(Gold);
		
select_2.style.display = "none";
color_div.appendChild(select_2);
		select_2.appendChild(Tomato);
		select_2.appendChild(Steelblue);
		select_2.appendChild(Dimgrey);


design.addEventListener("change", () => {
	if(design.value === "js puns"){
		select_1.style.display = "block"
		select_2.style.display = "none"
		}
		
		else if(design.value === "heart js"){
		select_2.style.display = "block"
		select_1.style.display = "none"
		}
			
});


//TASK 4 -  A total of the checked boxes appears at the bottom of the items as well as greying out items and disabling the checkboxes of boxes which times conflict  

const parentActivities = document.querySelector(".activities");
const activities = document.getElementsByClassName("checkbox");
const totalText = document.createElement("span");
const js_frameworks = document.getElementById("js-frameworks");
const express = document.getElementById("express");
const js_libs = document.getElementById("js-libs");
const node = document.getElementById("node");
const js_frames_label = document.getElementById("js_frames");
const express_label = document.getElementById("express_work");
const js_libs_label = document.getElementById("js_libs");
const node_label = document.getElementById("node_js");



parentActivities.addEventListener("change", () => {
	
	let total = 0;
	for(let i = 0; i < activities.length; i++) {
		if (activities[i].checked){
		total += parseInt(activities[i].value);}
	
	
totalText.textContent = "Total: £" + total.toFixed(2);
parentActivities.appendChild(totalText)

}});

parentActivities.addEventListener("change", () => {
	

	if(js_frameworks.checked ){
	express.disabled= true;
	express_label.style.color ="grey";
	} 
	
	else {express.disabled =false;
	express_label.style.color ="";}
	
	if(express.checked ){
	js_frameworks.disabled= true;
	js_frames_label.style.color ="grey";} 
	
	else {js_frameworks.disabled =false;
	js_frames_label.style.color ="";
	}
	
	
	if(js_libs.checked ){
	node.disabled= true;
	node_label.style.color ="grey";
	} 
	
	else {node.disabled =false;
	node_label.style.color ="";
	}
	
	
	if(node.checked ){
		js_libs.disabled= true;
		js_libs_label.style.color ="grey";} 
	
	else {js_libs.disabled =false;
	js_libs_label.style.color ="";}
	
})


    //TASK 5 show the appropraite payment Div when they are clicked within the options of the select box
	
	const payment_option = document.getElementById("payment");

	const credit_card_div = document.getElementById("credit-card");
	const paypal_div = document.getElementById("pay-pal");
	const bitcoin_div = document.getElementById("bit-coin");
	
	credit_card_div.style.display = "none";
	paypal_div.style.display = "none";
	bitcoin_div.style.display = "none";
	
	
	payment_option.addEventListener("change", () => {
		
	 if(payment_option.value === "credit card")
	{credit_card_div.style.display = "block";}

     else( credit_card_div.style.display = "none")
	
	
	 if(payment_option.value === "paypal")
	{paypal_div.style.display = "block";}

     else( paypal_div.style.display = "none")
	 
	 
	 if(payment_option.value === "bitcoin")
	{bitcoin_div.style.display = "block";}

     else( bitcoin_div.style.display = "none")
	
	})
	
	
	//TASK 6 this will display error messages if the appropriate boxes for the form are not filed in 
	
	const name = document.getElementById("Name");
	const email = document.getElementById("Email");
	const pick_shirt_message = document.createElement("span");
	const pick_shirt_parent = document.getElementById("shirt-info");
	const register_message = document.createElement("span");
	const register_parent = document.getElementById("register")
	const payment_message = document.createElement("span");
	const payment_parent = document.getElementById("payment_info");	
	const submit_button = document.getElementById("submit_button");
	const email_input = document.getElementById("mail");
	const design_select = document.getElementById("design");
	
	
	const credit_card_number = document.getElementById("cc-num");
	const zipcode = document.getElementById("zip");
	const CVV = document.getElementById("cvv");
	const ccn_label = document.getElementById("ccn_label");
	const zip_label = document.getElementById("zip_label");
	const cvv_label = document.getElementById("cvv_label");
	const ccn_message = document.createElement("span");
	const zip_message = document.createElement("span");
	const cvv_message = document.createElement("span");
	const push_dat_div_up1 = document.querySelector(".col-3");
	let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;	
	
	 	 

	
	submit_button.addEventListener("click", (e) => {
		
		if(nameField.value === ""){
		 e.preventDefault();
		 name.textContent = "Name: (please provide a name.)";
	     name.style.color = "#cc0000";
		}
		else{
		 name.textContent = "Name:"
		 name.style.color = "#000"}
		
		
        
		if (!filter.test(email_input.value)){
		 e.preventDefault();
		 email.textContent = "Email: (please provide a valid email.)";
	     email.style.color = "#cc0000";}
		
		else{
		 email.textContent = "Email:";
	     email.style.color = "#000";}
		
        if(design_select.value === "select_theme"){
		 e.preventDefault();
		 pick_shirt_message.textContent = "Don't forget to pick a shirt!";
	     pick_shirt_message.style.color = "#cc0000";
	     pick_shirt_message.style.display = "block";	
	     pick_shirt_message.className = "warning";
	     pick_shirt_parent.appendChild(pick_shirt_message);
		}

		
		else{
		 pick_shirt_message.style.display = "none";}
		 
		 
		 
		 
		
		let boxChecked = false;
		for(let i = 0; i < activities.length; i++) {
	    if(activities[i].checked){boxChecked = true;}}
		
		if(boxChecked){register_message.style.display = "none";}
		
         else{ e.preventDefault();
		 register_message.textContent = "Please pick an activity you would like to study.";
	     register_message.style.color = "#cc0000";
	     register_message.style.display = "block";
	     register_message.className = "warning";
	     register_parent.appendChild(register_message);
		}
	
		
	    if(payment_option.value === "select_method"){
		 e.preventDefault();
		 payment_message.textContent = "Please pick a method of payment.";
	     payment_message.style.color = "#cc0000";
	     payment_message.style.display = "block";
	     payment_message.className = "warning";
	     payment_parent.appendChild(payment_message);
		}
		
		else{ 
		 payment_message.style.display = "none";
		}
		
		// this is for TASK 2 of the exceeds grade to display different messages, one when nothing is input and another when less than 13 but more than 16 is typed 
		
		if(credit_card_number.value.length === 0){
		  e.preventDefault();
		  ccn_message.textContent = "Please enter a credit card number in the field below.";
	      ccn_message.style.color = "#cc0000";
	      ccn_message.style.display = "block";
	      ccn_message.className = "warning";
		  ccn_message.style.fontSize = "1em";
		  ccn_label.appendChild(ccn_message);
		 }
		
			
		
		else if(credit_card_number.value.length < 13 || credit_card_number.value.length > 16 ){
		  e.preventDefault();
		  ccn_message.textContent = "Please provide a valid credit card number. Thank you.";
	      ccn_message.style.color = "#cc0000";
	      ccn_message.style.display = "block";
	      ccn_message.className = "warning";
		  ccn_message.style.fontSize = "1em";
		  ccn_label.appendChild(ccn_message);
		 }
		
		else{ 
		 ccn_message.style.display = "none";} 
		 
		 
		 if(zipcode.value.length < 5 || zipcode.value.length > 5 ){
		  e.preventDefault();
		  zip_message.textContent = "Please provide a valid zipcode.";
	      zip_message.style.color = "#cc0000";
	      zip_message.style.display = "block";
	      zip_message.className = "warning";
		  zip_message.style.fontSize = "1em";
	      zip_label.appendChild(zip_message);
		 }
		
		else{ 
		 zip_message.style.display = "none";} 
		 
		 
		 if(CVV.value.length < 3 || CVV.value.length > 3 ){
		  e.preventDefault();
		  cvv_message.textContent = "Please provide a valid CVV number.";
	      cvv_message.style.color = "#cc0000";
	      cvv_message.style.display = "block";
	      cvv_message.className = "warning";
		  cvv_message.style.fontSize = "1em";
	      cvv_label.appendChild(cvv_message);
		  
		 }
		
		else{ 
		 cvv_message.style.display = "none";} 
					
				
	});
	
	
	
	
	
	//TASK 1 for exceeds mark. Only show the Color label and select box when an option is picked from Design select. 
	const color_label = document.getElementById("color_label")

	color_label.style.display = "none";
	select_1.style.display = "none";
	select_2.style.display = "none";
	
design.addEventListener ("change", () => {
	
	if (design_select.value === "select_theme" ){
	color_label.style.display = "none"}

    else {color_label.style.display = "block"}
	
	if (design_select.value === "select_theme" ){
	select_1.style.display = "none"}
	
	if (design_select.value === "select_theme" ){
	select_2.style.display = "none"}
})
	
	
// this is for TASK 3 of the exceeds grade to display the error message, and when it's successful then the message disappears on "keyup" 
const ccn_num = document.getElementById("cc-num");

ccn_num.addEventListener("keyup", (e) => {

if(credit_card_number.value.length === 0){
		  e.preventDefault();
		  ccn_message.textContent = "Please enter a credit card number in the field below.";
	      ccn_message.style.color = "#cc0000";
	      ccn_message.style.display = "block";
	      ccn_message.className = "warning";
		  ccn_message.style.fontSize = "1em";
		  ccn_label.appendChild(ccn_message);
		 }
		
			
		
		else if(credit_card_number.value.length < 13 || credit_card_number.value.length > 16 ){
		  e.preventDefault();
		  ccn_message.textContent = "Please provide a valid credit card number. Thank you.";
	      ccn_message.style.color = "#cc0000";
	      ccn_message.style.display = "block";
	      ccn_message.className = "warning";
		  ccn_message.style.fontSize = "1em";
		  ccn_label.appendChild(ccn_message);
		 }
		
		else{ 
		 ccn_message.style.display = "none";} 
	})


















