import React, { useEffect } from 'react'
import { fetchBooks } from '../../../services/books.service'
import {useState}from  'react'
import AdminHeader from '../Headeradmin/AdminHeader'
import {Link} from 'react-router-dom'

const ListeArchives=()=>{
    const [books, setBooks] = useState( (JSON.parse(localStorage.getItem('ListArchives'))? JSON.parse(localStorage.getItem('ListArchives')):[]))
    
      console.log(books,'bbb')
      

      
       
    return(
        <div> <AdminHeader/>
   
    <div className="container">
      <div className="py-4">
        <h1>Liste des livres archivés</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Libellé</th>
              <th scope="col">Auteur</th>
              <th scope="col">Edition</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{book.libellé}</td>
                <td>{book.auteur}</td>
                <td>{book.édition}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/archivedetails/${book.id}`}>
                    View details
                  </Link>
                  
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    )
}
export default ListeArchives
