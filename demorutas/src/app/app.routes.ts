import { Routes } from '@angular/router';
import { Detalle1 } from './detalle1/detalle1';
import { NoEncontrado } from './no-encontrado/no-encontrado';
import {Detalle2} from './detalle2/detalle2'
import { Info } from './info/info';

export const routes: Routes = [
{
 path: '',
 component: Detalle1,
 title: 'Pagina Detalle 1',
},
{
 path: 'detalle2/:miparam',
 component: Detalle2,
 title: 'Pagina Detalle 2 con parametro',
},
{ path: 'redetalles', redirectTo: '/detalle1' },
{ path: 'info', component: Info, title: 'Mi nombre es Vakery' },
{
 path: 'detalle1',
 component: Detalle1,
 title: 'Pagina Detalle 1',
},

{
 path: '**',
 component: NoEncontrado,
 title: 'Pagina No encontrada',
}

];
