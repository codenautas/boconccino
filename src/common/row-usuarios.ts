"use strict";
import bestGlobals = require("best-globals");
import {column, recordDefinition, RecordDefinition, recordSetDefinition} from "./engine"; 

@recordDefinition()
export class Usuario extends RecordDefinition{
    @column.text({})         usuario         : string|undefined
    @column.text({})         rol             : string|undefined
    @column.boolean({default:true}) 
                            activo          : boolean
    @column.timestamp({})    bloqueado_hasta : bestGlobals.DateTime|undefined
    @column.text({})         nombre          : string|undefined
    @column.text({})         apellido        : string|undefined
    @column.text({title:'teléfono'}) 
                            telefono        : string|undefined
    @column.text({})         mail            : string|undefined
    @column.text({})         mail_alternativo: string|undefined
    constructor(){
        super();
        this.activo = true;
    }
}

export const usuarios = recordSetDefinition(Usuario, {
    name:'usuarios',
    elementName:'usuario',
    colectionName:'usuarios del sistema',
    editable:true,
    primaryKey:['usuario']
});
