var parcel=document.getElementById("btnAddParcel");

parcel.onclick=function () {
	let orders=document.querySelectorAll(".inputbox");
for( let i=0; i<orders.length;i++){
	let orderWeight = orders[i].value; 

	if (orderWeight===""){
		alert("Please! Enter the weight of your parcels in the empty box before you make other parcel delivery orders");
		return false;
	};
};
		let table=document.getElementById("myTable");
		let row=document.createElement("tbody");
		row.innerHTML=`<tr>
				<td><b>From:</b></td>
					<td>
						<select id="fromcountry">
							<option value="Rwanda">Rwanda</option>
							<option value="Kenya">Kenya</option>
							<option value="Uganda">Uganda</option>
							<option value="Nigeria">Nigeria</option>
							<option value="Algeria">Algeria</option>
							<option value="Angola">Angola</option>
							<option value="Benin">Benin</option>
							<option value="Botswana">Botswana</option>
							<option value="Burkina Faso">Burkina Faso</option>
							<option value="Burundi">Burundi</option>
							<option value="Cape Verde">Cape Verde</option>
							<option value="Cameroon">Cameroon</option>
							<option value="Chad">Chad</option>
							<option value="Comoros">Comoros</option>
							<option value="DRC">DRC</option>
							<option value="Congo Brazaville">Congo Brazaville</option>
							<option value="Cote d'Ivoire">Cote d'Ivoire</option>
							<option value="Djibouti">Djibouti</option>
							<option value="Egypt">Egypt</option>
							<option value="Equatorial Guinea">Equatorial Guinea</option>
							<option value="Eritrea">Eritrea</option>
							<option value="Swaziland">Swaziland</option>
							<option value="Ethiopia">Ethiopia</option>
							<option value="Gabon">Gabon</option>
							<option value="Gambia">Gambia</option>
							<option value="Ghana">Ghana</option>
							<option value="Guinea">Guinea</option>
							<option value="Guinea-Bissau">Guinea-Bissau</option>
							<option value="Kenya">Kenya</option>
							<option value="Lesotho">Lesotho</option>
							<option value="Liberia">Liberia</option>
							<option value="Libya">Libya</option>
							<option value="Madagascar">Madagascar</option>
							<option value="Malawi">Malawi</option>
							<option value="Mali">Mali</option>
							<option value="Mauritania">Mauritania</option>
							<option value="Mauritius">Mauritius</option>
							<option value="Morocco">Morocco</option>
							<option value="Mozambique">Mozambique</option>
							<option value="Namibia">Namibia</option>
							<option value="Niger">Niger</option>
							<option value="Nigeria">Nigeria</option>
							<option value="Senegal">Senegal</option>
							<option value="Sierra Leone">Sierra Leone</option>
							<option value="South Africa">South Africa</option>
							<option value="South Sudan">South Sudan</option>
							<option value="Sudan">Sudan</option>
							<option value="Togo">Togo</option>
							<option value="Tunisia">Tunisia</option>
							<option value="Zambia">Zambia</option>
							<option value="Zimbabwe">Zimbabwe</option>
						</select>
					</td>
					<td><b>To:</b></td>
						<td>
							<select id="tocountry">
								<option value="Rwanda">Rwanda</option>
							<option value="Kenya">Kenya</option>
							<option value="Uganda">Uganda</option>
							<option value="Nigeria">Nigeria</option>
							<option value="Algeria">Algeria</option>
							<option value="Angola">Angola</option>
							<option value="Benin">Benin</option>
							<option value="Botswana">Botswana</option>
							<option value="Burkina Faso">Burkina Faso</option>
							<option value="Burundi">Burundi</option>
							<option value="Cape Verde">Cape Verde</option>
							<option value="Cameroon">Cameroon</option>
							<option value="Chad">Chad</option>
							<option value="Comoros">Comoros</option>
							<option value="DRC">DRC</option>
							<option value="Congo Brazaville">Congo Brazaville</option>
							<option value="Cote d'Ivoire">Cote d'Ivoire</option>
							<option value="Djibouti">Djibouti</option>
							<option value="Egypt">Egypt</option>
							<option value="Equatorial Guinea">Equatorial Guinea</option>
							<option value="Eritrea">Eritrea</option>
							<option value="Swaziland">Swaziland</option>
							<option value="Ethiopia">Ethiopia</option>
							<option value="Gabon">Gabon</option>
							<option value="Gambia">Gambia</option>
							<option value="Ghana">Ghana</option>
							<option value="Guinea">Guinea</option>
							<option value="Guinea-Bissau">Guinea-Bissau</option>
							<option value="Kenya">Kenya</option>
							<option value="Lesotho">Lesotho</option>
							<option value="Liberia">Liberia</option>
							<option value="Libya">Libya</option>
							<option value="Madagascar">Madagascar</option>
							<option value="Malawi">Malawi</option>
							<option value="Mali">Mali</option>
							<option value="Mauritania">Mauritania</option>
							<option value="Mauritius">Mauritius</option>
							<option value="Morocco">Morocco</option>
							<option value="Mozambique">Mozambique</option>
							<option value="Namibia">Namibia</option>
							<option value="Niger">Niger</option>
							<option value="Nigeria">Nigeria</option>
							<option value="Senegal">Senegal</option>
							<option value="Sierra Leone">Sierra Leone</option>
							<option value="South Africa">South Africa</option>
							<option value="South Sudan">South Sudan</option>
							<option value="Sudan">Sudan</option>
							<option value="Togo">Togo</option>
							<option value="Tunisia">Tunisia</option>
							<option value="Zambia">Zambia</option>
							<option value="Zimbabwe">Zimbabwe</option>
							</select>
						</td>
				<td><b>Weight</b></td>
				<td>
				<input type="text" class="inputbox" placeholder="Weight">
				</td>
			</tr>`;
		table.appendChild(row);
};

var btnShowPrice=document.getElementById("btnShowPrice");
btnShowPrice.onclick=function () {
		let totalPrice= 0;
		let orders=document.querySelectorAll(".inputbox");
		for( let i=0; i<orders.length;i++){
		let orderWeight = orders[i].value;
		 totalPrice+=parseFloat(orderWeight);

		if (orderWeight===""){
			alert("Please! Enter the weight of your parcels in all the orders created");
			return false;
	};
	retult.innerHTML=`You are required to pay ${totalPrice*1300} Rwf`;
};
};




