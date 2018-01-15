import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component'
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
    { path: 'articles', component: ArticlesComponent, data:{depth: 1} },
    { path: 'article', component: ArticleComponent, data:{depth: 2}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
