const Student = ({student }) => {
    // console.log(student)
    return (
        <div>
            <h1>{student.name}</h1>
            <p>{student.age}</p>
            <p>{student.class}</p>
        </div>
    );
}

export default Student;

