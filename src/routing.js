import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./components/adherent/HomePage";
import BooksList from "./components/adherent/booksList/BooksList";
import ShowBooks from "./components/adherent/showBooks/ShowBooks";
import EmpruntList from "./components/adherent/empruntList/EmpruntList";
import AdminHeader from "./components/bibliothécaire/Headeradmin/AdminHeader";
import ListAdherents from "./components/bibliothécaire/listeAdhérents/ListAdherents";
import ListeLivres from "./components/bibliothécaire/listeLivres/ListeLivres";
import AddBook from "./components/bibliothécaire/addbook/AddBook";
import DemandesAdhésion from "./components/bibliothécaire/demandeAdhésion/DemandesAdhésion";
import ListeArchives from "./components/bibliothécaire/lisetArchives/listeArchives";
import Emprunts from "./components/bibliothécaire/emprunts/Emprunts";
import AdminLayout from "./components/bibliothécaire/adminLayout/AdminLayout";
import AdherentDetails from "./components/bibliothécaire/adherentdetails/AdherentDetails";
import BookDetails from "./components/bibliothécaire/bookdetails/BookDetails";
import ArchiveDetails from "./components/bibliothécaire/archiveDetails/Archivedetails";

const Routing = () => {
  if (localStorage.getItem("token")) {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/bibliothécaire" component={AdminHeader} />
            <Route exact path="/listadherents" component={ListAdherents} />
            <Route exact path="/listlivres" component={ListeLivres} />
            <Route exact path="/books/add" component={AddBook} />
            <Route exact path="/demandes" component={DemandesAdhésion} />
            <Route exact path="/archive" component={ListeArchives} />
            <Route exact path="/emprunts" component={Emprunts} />
            <Route exact path="/adminLayout" component={AdminLayout} />
            <Route
              exact
              path="/adherentdetails/:id_user"
              component={AdherentDetails}
            />
            <Route exact path="/bookdetails/:id" component={BookDetails} />
            <Route
              exact
              path="/archivedetails/:id"
              component={ArchiveDetails}
            />

            <Route exact path="/HomePage/:userId">
              <HomePage />
            </Route>
            <Route path="/BooksList" component={BooksList} />
            <Route exact path="/ShowBooks/:userId" component={ShowBooks} />
            <Route exact path="/EmpruntList/:userId">
              <EmpruntList />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  } else {
    return (
      <>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Login} />
        <Redirect to="/" />
      </>
    );
  }
};
export default Routing;
