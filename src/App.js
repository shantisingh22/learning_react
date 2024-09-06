import Student from './Student';
import Teacher from "./Teacher";
import Principal from './Principal';

const student = {
	name: "Shanti Singh",
	age: 20,
	class: "myclass",
}
const teacher = {
	name: "Ram Singh",
	age: 22,
	hobbies:["Reading", "Cricket", "Traveling", "Music", "Coding"],
	class: "Teacher Class",
}
const principal = {
	name: "Raghav Singh",
	age: 35,
	hobbies:["Reading","Cricket","Traveling", "Music", "Coding"],
	class: "Collage work",
}
const App = () => {

	return (
		<>
			<Student student={student} /><br/>
			<Teacher teacher={teacher}/><br/>
			<Principal principal={principal}/>
			{/* <Student {...student} /> */}
		</>
	);
}
export default App;
