import { LazyExoticComponent, lazy } from "react";
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
const RegisterPage = lazy(()=> import(/* webpackChunkName: "RegisterPage" */'../03-forms/pages/1-RegisterPage'))
const FormikBasicPage = lazy(()=> import(/* webpackChunkName: "FormikBasicPage" */'../03-forms/pages/2-FormikBasicPage'))
const FormikYupPage = lazy(()=> import(/* webpackChunkName: "FormikYupPage" */'../03-forms/pages/3-FormikYupPage'))
const FormikComponents = lazy(()=> import(/* webpackChunkName: "FormikComponents" */'../03-forms/pages/4-FormikComponents'))
const FormikAbstract = lazy(()=> import(/* webpackChunkName: "FormikAbstract" */'../03-forms/pages/5-FormikAbstract'))
const RegisterFormikPage = lazy(()=> import(/* webpackChunkName: "RegisterFormikPage" */'../03-forms/pages/6-RegisterFormikPage'))
const DynamicForm = lazy(()=> import(/* webpackChunkName: "DynamicForm" */'../03-forms/pages/7-DynamicForm'))

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
    to: "/registerPage",
    path: "registerPage",
    Component: RegisterPage,
    name: "registerPage",
  },
  {
    to: "/formikPage",
    path: "formikPage",
    Component: FormikBasicPage,
    name: "formikPage",
  },
  {
    to: "/formikYupPage",
    path: "formikYupPage",
    Component: FormikYupPage,
    name: "formikYupPage",
  },
  {
    to: "/FormikComponents",
    path: "FormikComponents",
    Component: FormikComponents,
    name: "FormikComponents",
  },
  {
    to: "/FormikAbstract",
    path: "FormikAbstract",
    Component: FormikAbstract,
    name: "FormikAbstract",
  },
  {
    to: "/RegisterFormikPage",
    path: "RegisterFormikPage",
    Component: RegisterFormikPage,
    name: "RegisterFormikPage",
  },
  {
    to: "/DynamicForm",
    path: "DynamicForm",
    Component: DynamicForm,
    name: "DynamicForm",
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
