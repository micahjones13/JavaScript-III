/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding: this is when 'this' refers to everything in the global scope, so the console and/or window
* 2. Implicit Binding: This is where 'this' is bound to whatever is preceeding the dot
* 3. New binding: using the 'new' keyword to create a new instance of a object, and bind 'this' to it
* 4. Explicit Binding: marrying 'this' to an object. Uses methods like .call and .apply and .bind
*
* write out a code example of each explanation above
*/

// Principle 1

function linkYell(yell){
    console.log(this);
    return yell;
}
linkYell("Hiiyyaaaahh!");
//this will return link's yell as well as the jumble that is 'this' in global scope or undefined if strict is used

// Principle 2
const linkGreeting = {
    greeting: 'silence',
    name: 'Link',
    sayGreeting:  function (){
      console.log(`${this.name} says, "${this.greeting}"`);
    }
  }
  linkGreeting.sayGreeting();
 //this is an example of implicit because of the dot notation ie this.name
// Principle 3

function Enemy (name){
    this.name = name;
    this.greet = function(){
        console.log(`I am an ${this.name}`);
    }
}
const octorok = new Enemy('Octorok');
octorok.greet();
//this binds 'this' to Octorok through the new keyword

// Principle 4

octorok.greet.call(octorok);
//binds this to octorok using explicit call 