import React,{useRef,useState} from 'react'
import Classes from './Checkout.module.css'

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

function Checkout(props) {
    const [formInputsValidity, setFormInputsValidity] = useState({
        Name: true,
        Email: true,
        City: true,
        PostalCode: true,
      });

    const nameInputRef = useRef()
    const emailInputRef = useRef()
    const postalcodeInputRef = useRef()
    const cityInputRef = useRef()

  const onSubmitHandler=(event)=>{
    event.preventDefault();

    
const enteredName = nameInputRef.current.value;
const enteredEmail = emailInputRef.current.value;
const enteredPostalCode = postalcodeInputRef.current.value;
const enteredCity = cityInputRef.current.value;

const enteredNameIsValid = !isEmpty(enteredName);
const enteredEmailIsValid = !isEmpty(enteredEmail);
const enteredCityIsValid = !isEmpty(enteredCity);
const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
        Name: enteredNameIsValid,
        Email: enteredEmailIsValid,
        City: enteredCityIsValid,
        PostalCode: enteredPostalCodeIsValid,
      });
    
    const formIsValid =
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }
props.onConfirm({
  Name: enteredName,
  Email: enteredEmail,
  PostalCode:enteredPostalCode,
  City: enteredCity,
}
)
    
}

const NameClass = `${Classes.control} ${formInputsValidity.Name} ? '' : ${Classes.invalid}`
const EmailClass = `${Classes.control} ${formInputsValidity.Email} ? '' : ${Classes.invalid}`
const PostalCodeClass = `${Classes.control} ${formInputsValidity.PostalCode} ? '' : ${Classes.invalid}`
const CityClass = `${Classes.control} ${formInputsValidity.City} ? '' : ${Classes.invalid}`


  
  return (
    <form className={Classes.form} onSubmit={onSubmitHandler}>
        <div className={NameClass}>
        <label htmlFor='name'>Your Name</label>
       <input 
       id='name'
       type='text'
       ref={nameInputRef}
       ></input>
       {!formInputsValidity.Name && <p>Please Enter a Valid Name.</p> }
        </div>
        <div className={EmailClass}>
        <label htmlFor='email'>Your E-mail</label>
       <input 
       id='email'
       type='text'

       ref={emailInputRef}
       ></input>
       {!formInputsValidity.Email && <p>Please Enter a Valid Email.</p> }
        </div>
        <div className={PostalCodeClass}>
        <label htmlFor='postal code'>Your Postal Code</label>
       <input 
       id='postal code'
       type='text'
       ref={postalcodeInputRef}
       ></input>
       {!formInputsValidity.PostalCode && <p>Please Enter a Valid PostalCode.</p> }
        </div>
        <div className={CityClass}>
        <label htmlFor='city'>Your City</label>
       <input 
       id='city'
       type='text'

       ref={cityInputRef}
       ></input>
       {!formInputsValidity.City && <p>Please Enter a Valid City.</p> }
        </div>
       <div className={Classes.actions}>
        <button type='button' onClick={props.onCancel}>
            Cancel
        </button>
        <button className={Classes.submit}>
            Confirm
        </button>
       </div>


    </form>
  )
}

export default Checkout