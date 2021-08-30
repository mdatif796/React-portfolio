import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

function Topbar(props) {
  return (
    <div className={"topbar " + (props.menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 7461806888</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>mdatif796@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              props.setMenuOpen(!props.menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
