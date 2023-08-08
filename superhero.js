class Superhero {
  constructor(name){
     this.name = name;
  }
  get Name(){
    return this.name;
  }
  set                 Name(name){
    this.name= name;
  }
}

hola = new Superhero('javan');
console.log(hola);
console.log(Superhero.Name());

//node module.exports = new Superhero('tommy');

