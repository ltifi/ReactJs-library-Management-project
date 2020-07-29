import React from "react"
import PropTypes from "prop-types"
import "./Book.css"
export default function Book({
  id_user,
  id,
  libellé,
  auteur,
  édition,
  nbreExemplaires,
  dateEmprunt,
  empruntBook,
  empruntMode,
  enleverBook}) {
  const handleEmpruntBook=()=>{
    empruntBook(id_user,id,libellé,auteur,édition,nbreExemplaires)

  }
  return (
    <div className="book">
      {!empruntMode ? (
        <>
          <div>
            <div className="title">
              {libellé}
              {auteur}
              {édition}
              {nbreExemplaires}
            </div>
          </div>
          <div className="actions">
            <div>
              <button onClick={handleEmpruntBook}>Emprunter</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="title">
              {libellé}
              {auteur}
              {édition}
              {nbreExemplaires}
              {Math.floor((new Date() - new Date(dateEmprunt)) / (1000 * 3600 * 24))>15? "en retard": "en cours"}

            </div>
          </div>
          <div className="actions">
            <div>
              <button onClick={() => enleverBook(id)}>Enlever</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
Book.propTypes = {
  libellé: PropTypes.string.isRequired,
  auteur:PropTypes.string.isRequired,
  édition:PropTypes.string.isRequired,
  nbreExemplaires: PropTypes.number.isRequired,
}

Book.defaultProps = {
  nbreExemplaires: 3000
}