var Contact =[
   {
    Name:"Lokesh",
    Email:"lokeshravi38261@gmail.com",
    Phone:"7530032689"
   },
{
    Name:"john doe",
    Email:"johndoe@gmail.com",
    Phone:"9876543210"
},
{
    Name:"smith",
    Email:"smith@gmail.com",
    Phone:"9876543259"
},
{
    Name:"paul",
    Email:"paul@gmail.com",
    Phone:"9865443210"
},
];

//using for loop
for(i=0; i<Contact.length; i++){
    document.write('<h4>'+Contact[i].Name+'</h4>');
    document.write('<li>'+Contact[i].Email+'</li>');
    document.write('<li>'+Contact[i].Phone+'</li>');
}
//for in
for(let x in Contact){
  
    console.log(Contact[x]);
}
//using for of
for(let i of  Contact){
    console.log(i);
}

// using for each
Contact.forEach((e)=> console.log(e));

