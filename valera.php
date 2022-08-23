<?php

class Person {
   private $name;
   private $lastname;
   private $age;
   private $mother;
   private $father; 

   function __construct($name, $lastname, $age, $mother=null, $father=null)
   {
      $this->name = $name; 
      $this->lastname = $lastname; 
      $this->age = $age; 
      $this->mother = $mother;
      $this->father = $father; 
   }
   function getName () {
      return $this->name; 
   }
   function getMother() {
      return $this->mother; 
   }
   function getFather() {
      return $this->father; 
   }
   function getInfo() {
    return "<h3>Hi there! Let me speak from my heart &#169;.</h3><br>". "My name is <b>".$this->getName()."</b>. I`m a teen from Russia and I`v got big lovely family. A few words about them. My father`s name is <b>".$this->getFather()->getName()."</b> and mother`s - <b>".$this->getMother()->getName()."</b>.<br><br>". "Of course my parents have their own parents. They are my gramps. My dad`s parents are <b>".$this->getFather()->getFather()->getName()."</b> and <b>".$this->getFather()->getMother()->getName()."</b> and mom's parents are <b>".$this->getMother()->getFather()->getName()."</b> and <b>".$this->getMother()->getMother()->getName()."</b>."
      ;
}
}

$igor = new Person("Igor", "Petrov", 68); 
$anna = new Person("Anna", "Petrova", 66); 

$lucy = new Person("Lucy", "Ivanova", 58); 
$anton = new Person ("Anton", "Ivanov", 58); 

$alex = new Person("Alex", "Ivanov", 42, $lucy, $anton); 
$olga = new Person("Olga", "Ivanova", 42, $anna, $igor); 
$valera = new Person("Valera", "Ivanov", 15, $olga, $alex); 

echo $valera->getInfo()

// echo $valera->getMother()->getName(); 
// echo $valera->getMother()->getMother()->getName();
?>
