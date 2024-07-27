import { ChangeEvent, FormEvent, useState } from "react";
import { authenticate } from "../services/authService";
import axiosInstance from "../services/axiosConfig";
import FormData from "./interface/FormData";

// Définir une interface pour le type de données du formulaire

  
  const Login: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  
    // Gérer les changements dans les champs de saisie
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
    };
  
    // Gérer la soumission du formulaire
    const handleSubmit = async  (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      const result =  await  authenticate('emilys', 'emilyspass');
      let token = localStorage.getItem('authToken');
      
      console.log(result);
      // Vous pouvez ajouter votre logique de soumission ici
    };

    const  getUser= async () => {
        let token = localStorage.getItem('authToken');
        console.log("token :" + token);
        const response = await axiosInstance.get('/auth/me', {
            headers: { 'Authorization': `Bearer ${token}`,  }
          });
        console.log(response.data);
    }
    return ( 
        <>
          <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                <button type="button" className="btn btn-primary" onClick={getUser}>Submit</button>
        </>
     );
}

export default Login;