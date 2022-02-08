import axios from "axios";
import { useState } from "react";

const AdminPanel = () => {

  const [language, setLanguage] = useState("");
  const [langImg, setLangImg] = useState("");
  const [error, setError] = useState("");

  const addLanguage = async (e) => {
    e.preventDefault();
    if (language && langImg) {
      await axios.post('http://localhost:5000/content', {
        category_id: 3,
        text: language,
        image: langImg,
      })
      .then(({data}) => {
        if (data.error) setError(data.error);
        else {
          setError("");
          setLanguage("");
          setLangImg("");
        }
      });
      window.location.reload();
    } else setError("All fields are required");
  }

  return (
    <div className="admin-container">
      <h1>Ajoutez un langage</h1>
      <div>
        <form onSubmit={addLanguage}>
          {error && <p>{error}</p>}
          <div>
            <div>
              <div>
                <label htmlFor="langage">Langage</label>
                <input type="text" name="name" id="name" onChange={(e) => setLanguage(e.target.value)}/>
              </div>
              <div>
                <div>
                  <label htmlFor="image">Image</label>
                  <input type="text" name="image" id="image" onChange={(e)=> setLangImg(e.target.value)}/>
                </div>
              </div>
            </div>
            <button type="submit" value="Send">Ajouter</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminPanel;