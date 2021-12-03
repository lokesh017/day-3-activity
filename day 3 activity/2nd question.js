var str ='{"Name":"Lokesh","Email":"lokeshravi38261@gmail.com","Phone":"7530032689","Degree":"BCA","Address":"34 Varatharajan street Arcot","Postalcode":"632503","City":"Vellore","State":"Tamilnadu","Country":"India"}'

var o = JSON.parse(str);
document.write("<br> Name : " +o.Name);
document.write("<br> Email : " +o.Email);
document.write("<br> Phone : " +o.Phone);
document.write("<br> Degree : " +o.Degree);
document.write("<br> Address : " +o.Address);
document.write("<br> Postal code : " +o.Postalcode);
document.write("<br> City : " +o.City);
document.write("<br> State : " +o.State);
document.write("<br> Country : " +o.Country);
