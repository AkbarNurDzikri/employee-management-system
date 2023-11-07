import axios from 'axios';
import Swal from 'sweetalert2';

const executeLogin = async (username, password) => {
  const formData = {
    username,
    password
  };

  try {
    const sendData = await axios.post('http://localhost:5000/auth/login', formData, {
    headers: {
        "Content-Type": "application/json"
      }
    });
    
    if(sendData.status === 200) {
      Swal.fire({
        icon: "success",
        title: 'Berhasil Masuk',
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

export default executeLogin