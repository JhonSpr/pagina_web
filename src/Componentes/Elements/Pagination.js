import React from "react";

export function Pagination({ ...props }) {
  return (
    <>
      <div className="paginacion-contenedor">
        <ul>
          <a href={props.linkBefore} className={props.classNameBefore}>
            «
          </a>
          <li className={props.active1}>
            <a href={props.link1}>1</a>
          </li>
          <li className={props.active2}>
            <a href={props.link2}>2</a>
          </li>
          <li className={props.active3}>
            <a href={props.link3}>3</a>
          </li>
          <li className={props.active4}>
            <a href={props.link4}>4</a>
          </li>
          <li className={props.active5}>
            <a href={props.link5}>5</a>
          </li>
          <li className={props.active6}>
            <a href={props.link6}>6</a>
          </li>
          <li className={props.active7}>
            <a href={props.link7}>7</a>
          </li>
          <a href={props.linkNext} className={props.classNameNext}>
            »
          </a>
        </ul>
      </div>
    </>
  );
}
