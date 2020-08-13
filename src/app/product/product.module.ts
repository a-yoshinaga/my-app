import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes } from '@angular/router';

import { ProductComponent } from './product.component'
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes= [
    {
        path: 'products',component: ProductComponent,
        children:[
            {path: '', component: ProductListComponent},
            {path: ':productId', component: ProductDetailComponent}                  
        ]
    }
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { 

}
