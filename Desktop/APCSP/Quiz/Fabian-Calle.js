offToCollege(){
  let college = prompt("Plese enter your favorite university or college.");
  let tuition = Number(prompt("Please enter the total tuition of your selected college and or university.");

  let p = document.getElementById("off-to-college");
  p.innerHTML = (college + "is a pretty expensive school! It'll cost you $" + tuition / 4 " per year!");

}

carpool(){
  let friends = Number(prompt("How many friends would you like to invite to the movies"));
  let suv = Number(prompt("How many of your friends' parents drive a SUV with a capacity of 7 seats."));
  let sedan = 0
  console.log(suv + " parents who drive SUVs and " + sedan + " parents who drive sedans are required to transport the " + friends + " friends to the movies.");
}
