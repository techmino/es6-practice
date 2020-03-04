class student {
    constructor(sID, sName){
        this.id = sID;
        this.name = sName;
        this.school ="Kamrunnecha";
         
    }

}

const student1 = new student(10, "Shuvo" );
const student2 = new student(20, "Rubina");
console.log(student1, student2);
console.log(student1.id, student2.name);
