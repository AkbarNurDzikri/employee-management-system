import axios from 'axios';
import Swal from 'sweetalert2';

const executeRegister = async (username, fullname, email, password, confirmPassword) => {
  const formData = {
    username,
    fullname,
    email,
    password,
    confirmPassword
  };

  try {
    const sendData = await axios.post('http://localhost:5000/employees/registration', formData, {
    headers: {
        "Content-Type": "application/json"
      }
    });
    
    if(sendData.status === 201) {
      Swal.fire({
        icon: "success",
        title: sendData.statusText,
        text: sendData.data.message,
      })

      return  {success: true};
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: error.response.statusText,
      text: error.response.data.errors,
    });

    return {success: false};
  }
}

export default executeRegister