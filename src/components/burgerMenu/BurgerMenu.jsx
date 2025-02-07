"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import styles from "./burgerMenu.module.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuVariants = {
    open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
    closed: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className={styles.burger}>
      <div className="md:hidden">
        <motion.button
          onClick={toggleMenu}
          className={styles.menuButton}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </motion.button>

        {isOpen && (
          <div className={styles.menuOverlay} onClick={closeMenu}>
            <motion.div
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={menuVariants}
              className={styles.menuContainer}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton de fermeture (croix) animé */}
              <motion.button
                onClick={closeMenu}
                className={styles.menuCloseButton}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <X size={28} />
              </motion.button>

              {/* Liens de navigation */}
              <nav className={styles.menuList}>
                <Link
                  href="#home"
                  className={styles.menuItem}
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className={styles.menuItem}
                  onClick={closeMenu}
                >
                  about
                </Link>
                <Link
                  href="#project"
                  className={styles.menuItem}
                  onClick={closeMenu}
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  className={styles.menuItem}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
