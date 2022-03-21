import School from './School.js'
import Teacher from './Teacher.js'

class Student extends School{
	constructor(name, strength, studentName, course){
		super(name, strength);
		this.studentName = studentName;
		this.course = course;
	}
}
let s1 = new Student("DPS", 2000, "Parth", "Frontend");

console.log(s1.studentName);