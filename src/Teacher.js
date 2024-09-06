const Teacher = ({teacher }) => {
    // console.log(student)
    return (
        <div>
            <h1>{teacher.name}</h1>
            <p>{teacher.age}</p>
            <p>{teacher.hobbies}</p>
            <p>{teacher.class}</p>
        </div>
    );
}

export default Teacher;
