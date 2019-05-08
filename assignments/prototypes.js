/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject (attributes){
  this.createdAt = attributes.createdAt;
  this.name = attributes.name
  this.dimensions = attributes.dimensions;
  // this.destroy = attributes.destroy; //this makes it so that the prototype is actually here. the GameObject.prototype.destroy only tells what the function does, doesn't add it to object
}
GameObject.prototype.destroy = function () {
  if (this.healthPoints <= 0){
 return  console.log(`${this.name} was removed from the game`);
  }
  else {
    return console.log(`${this.name} has ${this.healthPoints} HP remaining`)
  }

}
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats (characterAttributes){
  GameObject.call(this, characterAttributes);
  this.healthPoints = characterAttributes.healthPoints;
  // this.takeDamageFunc = characterAttributes.takeDamage;
  
}
CharacterStats.prototype = Object.create(GameObject.prototype);//add GameObject prototypes to CharacterStats?

CharacterStats.prototype.takeDamage = function () {
  this.healthPoints = this.healthPoints -5;
  return `${this.name} took damage! They have ${this.healthPoints} HP left!` 
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 function Humanoid (humanAttribute){
  
   CharacterStats.call(this, humanAttribute);
   this.team = humanAttribute.team;
   this.weapons = humanAttribute.weapons;
   this.language = humanAttribute.language;
  //  this.greet = humanAttribute.greet;
 }
 Humanoid.prototype = Object.create(CharacterStats.prototype);

 Humanoid.prototype.greet = function (){
   return `${this.name} offers a greeting in ${this.language}`;
 }
 Humanoid.prototype.attack = function (){
    return `${this.name} attacks!`;
 }
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

function Hero (heroAttribute){
  Humanoid.call(this, heroAttribute);
  this.name = heroAttribute.name;
}
Hero.prototype = Object.create(Humanoid.prototype);


function Villain (villianAttribute){
  Humanoid.call(this, villianAttribute);
  
}
Villain.prototype = Object.create(Humanoid.prototype);

const gannon = new Villain({
createdAt: new Date(),
dimensions:{
  length: 4,
  width: 2,
  height: 5,
},
healthPoints: 25,
name: 'Gannondorf, King of Theives',
team: 'Triforce of Power',
weapons: ['Triforce of Power',],
language: 'Geurdo',
});

const link = new Hero({
createdAt: new Date(),
dimensions:{
  length: 4,
  width: 2,
  height: 5,
},
healthPoints: 25,
name: 'Link, Hero of Time',
team: 'Hyrule',
weapons: ['Master Sword',],
language: 'Mute',
});

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(link.attack());
console.log(gannon.takeDamage());
console.log(gannon.takeDamage());
console.log(gannon.takeDamage());
console.log(gannon.takeDamage());
console.log(gannon.takeDamage());
console.log(gannon.destroy());
