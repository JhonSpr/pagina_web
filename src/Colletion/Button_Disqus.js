import React, { useState } from "react";
import Disqus from "../Componentes/Elements/disqus";

export default function ButtonDisqus() {
  const [loadingDisqus, setLoadingDisqus] = useState(true);
  const handleClick = () => {
    setLoadingDisqus(false);
  };
  const hideComments = () => {
    setLoadingDisqus(true);
  };
  return (
    <>
      {loadingDisqus ? (
        <button
          className="Button_comments"
          id="show-comments"
          onClick={handleClick}
        >
          Cargar Comentarios
        </button>
      ) : (
        <>
          <button
            className="Button_comments"
            id="show-comments"
            onClick={hideComments}
          >
            Ocultar Comentarios
          </button>
          <Disqus />
        </>
      )}
    </>
  );
}
