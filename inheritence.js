  
  class parent {
      constructor(){
          this.fatherName = "schwerzneggar";
      }
  }
  
  class child extends parent{
      constructor(name){
          super();
          this.name = name;
      }
      getfullName(){
          return this.name + " " +this.fatherName;
      }

  }

  const baby = new child("Arnold");
  console.log(baby);
  const baby2 = new child("tom");
  console.log(baby2);

 
  console.log(baby .getfullName());
  console.log(baby2 .getfullName());


