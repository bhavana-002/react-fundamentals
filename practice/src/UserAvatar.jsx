
import "./UserAvatar.css"

function UserAvatar(person1) {
    const title = {
        color: "red",
        fontSize: "20px",
        fontWeight: "bold"
    }
    const title1 = {
        color: "black"

    }
    const container= {
    border: "2px solid black",
    borderRadius: "10px",
    padding: "10px",
    textAlign: "center"
}


    return (
        <div style={container}>
            <img src="mikey.jpeg" alt="blank"></img>
            <p style={title}>personName={person1.personName}</p>
            <p style={title1}>Course={person1.Course}</p>
            <p style={title1}>RollNo={person1.RollNo}</p>
            <p styele={title1}> BloodGroup={person1.BloodGroup}</p>
            <p style={title1}> DOB={person1.DOB}</p>


        </div>
    )
}
export default UserAvatar;