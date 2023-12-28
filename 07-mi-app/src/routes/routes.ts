import { LazyExoticComponent, lazy } from "react";
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";
//import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element

interface Routes {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}


const User = lazy(()=> import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/HomePage'))
const About = lazy(()=> import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/AboutPage'))
//const Home = lazy(()=> import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/UserPage'))
//const Lazy4 = lazy(()=> import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'))

export const routes: Routes[] = [
  {
    to: "/user",
    path: "user",
    Component: User,
    name: "User",
  },
  {
    to: "/about",
    path: "about",
    Component: About,
    name: "About",
  },
  {
    to: "/shoppingPage",
    path: "shoppingPage",
    Component: ShoppingPage,
    name: "ShoppingPage",
  },
  /*
  {
    to: "/lazy4/",
    path: "/lazy4/*",
    Component: Lazy4,
    name: "Lazy-4 - Dashboard",
  },
  {
    to: "/no-lazy",
    path: "NoLazy",
    Component: NoLazy ,
    name: "NoLazy-4",
  },*/
];
