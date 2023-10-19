let members = [
    {
      name: "Manuel",
      surname: "Benitez",
      age: "29",
      city: "Palma",
      hobby: "Skate",
      favoriteFood: "Milanesa",
      favoriteVideoGame: "DOTA 2",
      favoriteFilm: "",
      favoriteBook: "Shantaram",
      petName: "",
    },
    {
      name: "Camila",
      surname: "Rodriguez",
      age: "29",
      city: "Madrid",
      hobby: "Gaming",
      favoriteFood: "Pasta",
      favoriteVideoGame: "Legend of Zelda",
      favoriteFilm: "The Notebook",
      favoriteBook: "",
      petName: "Sora",
    },
    {
      name: "Maria",
      surname: "Cortes",
      age: "30",
      city: "Barcelona",
      hobby: "VideoGames, Anime",
      favoriteFood: "Ramen",
      favoriteVideoGame: "Danganronpa",
      favoriteFilm: "Harry Potter",
      favoriteBook: "Me gustan mucho",
      petName: "Akira y Matty",
  },
    {
      name: "Denise",
      surname: "Cantos",
      age: "24",
      city: "Barcelona",
      hobby: "Crochet",
      favoriteFood: "Pasta",
      favoriteVideoGame: "Sims 4",
      favoriteFilm: "dontknow",
      favoriteBook: "La magia de dos",
      petName: "Willy",
  },
   {
    name: "Jaime",
    surname: "Rodriguez",
    age: "29",
    city: "Barcelona",
    hobby: "Gaming, Guitarra",
    favoriteFood: "Ajiaco",
    favoriteVideoGame: "LoL",
    favoriteFilm: "Malditos Batardos",
    favoriteBook: "Falco",
    petName: "Natsu",
  },
    {
    name: "Jose",
    surname: "Calero",
    age: "28",
    city: "La Laguna",
    hobby: "Literature, sports",
    favoriteFood: "Arepa",
    favoriteVideoGame: "Age of Empires",
    favoriteFilm: "The Good, The Bad and the Ugly",
    favoriteBook: "Don Quijote",
    petName: "",
  }
  ];
  
  let surnameOrder= [];
  let ageOrder = [];
  let sumaEdad=0;
  
  // function checkSurnameRefactored(arrayOfMembers) {
  //   const sortedArray = arrayOfMembers.sort((prevMember, nextMember) => {
  //     if (prevMember.surname < nextMember.surname) {
  //       return -1;
  //     } else if (prevMember.surname > nextMember.surname) {
  //       return 1;
  //     }
  //   }); //como diferencia/itera con prev y nextmember
  
  //   return sortedArray;
  // }
  
  // const result = checkSurnameRefactored(members);
  // console.log(result);
  
  function checkSurname (apellido){
     if(typeof(apellido.surname) == "string"){
       surnameOrder.push(apellido.surname+" " +apellido.name);
     }
   }
  
   function checkAge (edad) {
    if(typeof(edad.age) == "string"){
      ageOrder.push(edad.age+" " +edad.name)
      ageOrder.sort()
    }
  }
  
  function sumar(){
    for(i=0;i<members.length;i++){
     sumaEdad = sumaEdad + Number(members[i].age);
    } 
    return (sumaEdad / members.length)
  }
  
  function x () {
    for(i=0;i<members.length;i++){
      checkSurname(members[i]);
      checkAge(members[i]);
    }
   // console.log(surnameOrder);
  }
  
  x()
  
  function checkPet(arr){
    let havePet = [];
    for(i=0; i < members.length; i++){
      let memberPet = members[i].name + ": " + members[i].petName;
      if(members[i].petName){
        havePet.push(memberPet);
      }
    }
    return havePet;
  }
  
  function checkGame(arr){
    let gameLol = [];
    for(i = 0; i < members.length; i++){
      let memberLol = members[i].name + " is a LoL fan";
      if(members[i].favoriteVideoGame === "LoL" || members[i].favoriteVideoGame === "League of Legends" ){
        gameLol.push(memberLol);
      }
    }
    return gameLol;
  }
  
  function checkNames(arr){
    let repeatedNames = [];
    
    for(i = 0; i < members.length; i++){
      let countName = 1;
      let sameName = members[i].name;
      for(j = 0; j < members.length; j++){
        if(i !== j){
          if(members[j].name == members[i].name){
            countName++;
            
          }else{
            let countName = 1;
          }
          if(countName == 2){
            repeatedNames.push(sameName);
            break;
          }
        }
        
    }
    
  }return repeatedNames;
  }
  
  
  console.log(surnameOrder.sort());
  console.log(ageOrder.sort());
  console.log("Middle age: " + sumar());
  console.log(checkPet(members));
  console.log(checkGame(members));
  console.log(checkNames(members));