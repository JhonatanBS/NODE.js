import { Link } from "react-router-dom";
import { useContext } from "react";

import Logo from "../../assets/img/logo.png"

import styles from "./Navbar.module.css"

/* context */
import { Context } from "../../context/UserContext";

const Navbar = () => {
    const { authenticated } = useContext(Context);

    return (
      <nav className={styles.navbar}>
        <div className={styles.navbar_logo}>
           <img src={Logo} alt="Get A Pet"/>
           <h2>Get A Pet</h2>
        </div>
        <ul>
          <li>
            <Link to="/">Adotar</Link>
          </li>
          {
            authenticated ? (
              <p>Logado</p>
            )
            :
            (
             <>
                <li>
                 <Link to="/login">Entrar</Link>
                </li>

                <li>
                 <Link to="/register">Cadastrar</Link>
                </li>
             </>
            )

          }
          
        </ul>
      </nav>
    )
  }
  
  export default Navbar;