import { useState } from "react"
import { collection, addDoc , getDocs } from 'firebase/firestore';
import { FIRESTORE } from "../../firebase.config";
import { getAuth, GoogleAuthProvider , signInWithPopup}   from "firebase/auth";
import'./Form.css'

const Form = () => {

    const [userInput, setUserInput] = useState({
        userName: "",
        userAge: 0,
        userDob: "",
        userPassword: "",
        userEmail: "",
        gender: "",
        codings: []
    })

    const [userData, setUserData] = useState([]);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleUserInputs = (e) => {
        const { name, value } = e.target;
        setUserInput(previousState => {

            if(name === 'codings') {
                const {checked} = e.target
                return {
                    ...previousState,
                    codings: checked
                        ? [...previousState.codings, value]
                        : previousState.codings.filter(item => item !== value)
                }
            }
            else {
                return {
                    ...previousState, // spreading
                    [name]: value,
                }
            }
          
        })

    }

    const handleForm = async (e) => {
        e.preventDefault();

        await addDoc(collection(FIRESTORE, "Firebase2Form1"), {
            ...userInput,
        }).then(() => {
            alert("Submitted")
        }).catch(err => {
            console.log(err);
        })

    }

    const handleGetData = async() => {
        let response = await getDocs(collection(FIRESTORE, "Firebase2Form1"));
        let TEMP = []
        response.forEach(doc => {
            let data = {
                id: doc.id,
                info: doc.data()
            }
            TEMP.push(data);
        })
        setUserData(TEMP)
    }

     const handleSignInOnBtnClick = async () => {
    signInWithPopup(auth, provider).then(res => {
      console.log(res) ;
    }).catch(err => {
      console.log(err);
    })
  }

    return (
        <>
            <form>
                <input type="text" onChange={handleUserInputs} name="userName" placeholder="Your name" value={userInput.userName} />
                <input type="number" onChange={handleUserInputs} name="userAge" value={userInput.userAge} placeholder="Your age" />
                <input type="date" onChange={handleUserInputs} name="userDob" value={userInput.userDob} />
                <input type="email" onChange={handleUserInputs} name="userEmail" value={userInput.userEmail} placeholder="Your email" />
                <input type="password" onChange={handleUserInputs} name="userPassword" value={userInput.userPassword} placeholder="Your password" />

                <div>
                    <label htmlFor="coding">Which languages you know</label><br /><br />
                    <input type="checkbox" onChange={handleUserInputs} name="codings" value="HTML" />HTML<br />
                    <input type="checkbox" onChange={handleUserInputs} name="codings" value="CSS" />CSS<br />
                    <input type="checkbox" onChange={handleUserInputs} name="codings" value="JS" />JS<br />
                    <input type="checkbox" onChange={handleUserInputs} name="codings" value="PYTHON" />PYTHON<br />
                    <input type="checkbox" onChange={handleUserInputs} name="codings" value="GOLANG" />GOLANG<br />

                </div>


                <div>
                    <label htmlFor="coding">Choose Gender:</label><br /><br />
                    <input type="radio" onChange={handleUserInputs} name="gender" value="Male" />Male<br />
                    <input type="radio" onChange={handleUserInputs} name="gender" value="Female" />Female<br />
                    <input type="radio" onChange={handleUserInputs} name="gender" value="Other" />Other<br />

                </div>
                <button onClick={handleForm}>Submit</button>

            </form>
             
            <hr />
            <div className="get-dataBtn-container"> <button onClick={handleGetData}>Get Data</button></div>

            <div className="get-dataBtn-container"> <button onClick={handleSignInOnBtnClick}>SignIn with Google</button></div>
           
            <table>
                <tbody>
                    {userData?.length > 0 && (
                        userData.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.info.userName}</td>
                                    <td>{item.info.userAge}</td>
                                    <td>{item.info.userDob}</td>
                                    <td>{item.info.userPassword}</td>
                                    <td>{item.info.userEmail}</td>
                                    <td>{item.info.gender}</td>
                                    <td>{item.info.codings && (
                                        // item.info.codings?.map(data => (
                                        //     <span key={data}>{data}, </span>
                                        // )
                                        item.info.codings.join(' , ')
                                    )}</td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Form