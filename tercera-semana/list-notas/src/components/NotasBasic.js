import React from "react";
import '../'
function NotaBasic({nota, onDelete, onEdit}){
    return(
        <div>
            <p>(nota)</p>
            <div>
                <button onClick={onEdit}>Editar</button>
                <button onClick={ondelete}> Eliminar </button>
            </div>
        </div>
    );
}