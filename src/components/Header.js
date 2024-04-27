import './Header.css';
import { motion } from 'framer-motion';

function MenuButton({text, inline_style}) {
    return (
        <motion.button className="header-menu-item"
            style={inline_style}
            initial={{ y:-50, opacity: 0 }}
            animate={{ y: 0, opacity: [0,0.2,1] }}
            transition={{ duration: 0.7 }}
            whileHover={{ color: "#f5476f" }}
        >
            {text}
        </motion.button>
    );
}

function Header() {
  return (
    <div className="header-menu">
        
       {["work", "blog", "about"].map( link => <MenuButton text={link} inline_style={{}}/> )}
    </div>
  );
}

export default Header;
