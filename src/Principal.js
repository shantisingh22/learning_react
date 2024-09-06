const Principal = ({principal }) => {
    // console.log(student)
    return (
        <div>
            <h1>{principal.name}</h1>
            <p>{principal.age}</p>
            <p>{principal.hobbies}</p>
            <p>{principal.class}</p>
        </div>
    );
}

export default Principal;