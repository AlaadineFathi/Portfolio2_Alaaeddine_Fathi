import React, { useState } from "react";

//  avec l action du l ajout
import { useDispatch } from 'react-redux';
import { add } from '../redux/actions';

const FormulaireTemoignage = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [genre, setGenre] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nom.trim() && email.trim() && message.trim() && genre.trim()) {
      // l appel de la method de l ajout
      dispatch(add((Math.floor(Math.random()*1000)),nom, email, message, genre));
      setNom("");
      setEmail("");
      setMessage("");
      setGenre("");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-2xl md:text-3xl lg:text-3xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">Laisser un témoignage</h2>
      <br></br>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">Nom :</label>
          <input
            type="text"
            className="form-control"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email :</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message :</label>
          <textarea
            className="form-control"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Genre :</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="genre"
              id="genre-male"
              value="male"
              checked={genre === "male"}
              onChange={(e) => setGenre(e.target.value)}
              required
            />
            <label className="form-check-label" htmlFor="genre-male">Homme</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="genre"
              id="genre-female"
              value="female"
              checked={genre === "female"}
              onChange={(e) => setGenre(e.target.value)}
              required
            />
            <label className="form-check-label" htmlFor="genre-female">Femme</label>
          </div>
        </div>

        <button className="btn btn-primary">Envoyer</button>
      </form>
    </div>
  );
};

export default FormulaireTemoignage;
