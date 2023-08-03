// affichages des temoiniages

import { Button } from "bootstrap";
import React from "react";

// connecter avec le store et avec l action du supression 
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/actions';
const ListeTemoignages = () => {
  const itemst = useSelector((state) => state.items);


  const dispatch = useDispatch();


  const handle = (id) => {
 
      dispatch(deleteItem(id));
   
  };

  return (
    <div className="text-center container mt-4">
      <h2 className="text-2xl md:text-3xl lg:text-3xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Liste des témoignages
        <br></br>
        <br></br>
      </h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Message</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {itemst.map((temoignage, index) => (
              <tr key={index}>
                <td>{temoignage.nom}</td>
                <td>{temoignage.email}</td>
                <td>{temoignage.message}</td>
                <td>{temoignage.genre}</td>
                <td><button onClick={()=>{handle(temoignage.id)}} className="btn btn-danger">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListeTemoignages;
