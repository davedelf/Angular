import { NgModule } from '@angular/core';
import { IngresoUsuario } from './ingreso-usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[IngresoUsuario],
    imports:[FormsModule],
    exports:[IngresoUsuario]
})
export class IngresoUsuarioModule {
    

}
