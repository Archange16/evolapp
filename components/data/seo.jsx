"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + " - Evolapp - Solutions numériques sur mesure pour entreprises et particuliers";
  }, []);
};

export default SEO;