import { Route, Routes } from "react-router-dom";
import { NumerosDoce } from "./12capitulos";


export function ListaCapitulos(){
    return(
        <div>
<Routes>
    <Route path="/golden-time" element={<NumerosDoce anime={"golden Time"}/>}/>
</Routes>
        </div>
    );
}