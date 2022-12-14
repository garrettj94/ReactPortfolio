import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


 function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('')
  const [errorMessage, setErrorMessage] = useState('');


const handleInputChange = (e) => {
  // Getting the value and name of the input which triggered the change
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;
  if (inputType === 'email' && validateEmail(email)){
    setEmail(inputValue)
  } else if (inputType === 'comment') {
    setComment(inputValue);
}};


const handleFormSubmit = (e) => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
  e.preventDefault();

  // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
  if (!validateEmail(email)) {
    setErrorMessage('Email is invalid');
    // We want to exit out of this code block if something is wrong so that the user can correct it
    return;
   
  } 
  setEmail('');
  setComment('');

  };
  onEmailChange(e) = {
    this:useState({email: e.target.value})
  }
  return (
    <div>
      <h1>Contact Me! </h1>
    <div className='contactme'>
      
      <p className='contact'>Enter your email and a small comment</p>
      <form className="form">
        <div className='enteremail'>
        <input
          defaultValue={email}
          name="email"
          onBlur={handleInputChange}
          type="email"
          placeholder="email"
        />
        </div>
        <div className='entercoment'>
         <input
          defaultValue={comment}
          name="Comment"
          onBlur={handleInputChange}
          type="comment"
          placeholder="comment"
        />
        </div>
        <div className='submit'>
        <button  type="button" onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    </div>
  );
}
export default Form;
