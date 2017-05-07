import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

// Importamos los componentes
import {PageHomeComponent} from './vistasComponent/home.component'
import {PagePartidosComponent} from './vistasComponent/partidos.component'


const appRoutes:Routes = [
    {path: '', component: PageHomeComponent},
    {path: 'partidos', component: PagePartidosComponent},
    {path: '**', component: PageHomeComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
