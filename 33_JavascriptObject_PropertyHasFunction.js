 //Object -> It is a collection of properties

 let person ={
     firstName:'Rajat',
     lastName:'Verma',
     country:'India',
     fullName:function(){
        return (this.firstName+" "+this.lastName)
    }
}
console.log("person.fullName()): "+person.fullName())

