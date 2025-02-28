/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardImport } from './routes/_dashboard'
import { Route as AuthImport } from './routes/_auth'
import { Route as DashboardHomeImport } from './routes/_dashboard/home'
import { Route as DashboardAccountImport } from './routes/_dashboard/account'
import { Route as AuthRegisterImport } from './routes/_auth/register'
import { Route as AuthLoginImport } from './routes/_auth/login'

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  id: '/_dashboard',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const DashboardHomeRoute = DashboardHomeImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardAccountRoute = DashboardAccountImport.update({
  id: '/account',
  path: '/account',
  getParentRoute: () => DashboardRoute,
} as any)

const AuthRegisterRoute = AuthRegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => AuthRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_dashboard': {
      id: '/_dashboard'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof AuthImport
    }
    '/_auth/register': {
      id: '/_auth/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof AuthRegisterImport
      parentRoute: typeof AuthImport
    }
    '/_dashboard/account': {
      id: '/_dashboard/account'
      path: '/account'
      fullPath: '/account'
      preLoaderRoute: typeof DashboardAccountImport
      parentRoute: typeof DashboardImport
    }
    '/_dashboard/home': {
      id: '/_dashboard/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof DashboardHomeImport
      parentRoute: typeof DashboardImport
    }
  }
}

// Create and export the route tree

interface AuthRouteChildren {
  AuthLoginRoute: typeof AuthLoginRoute
  AuthRegisterRoute: typeof AuthRegisterRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthLoginRoute: AuthLoginRoute,
  AuthRegisterRoute: AuthRegisterRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

interface DashboardRouteChildren {
  DashboardAccountRoute: typeof DashboardAccountRoute
  DashboardHomeRoute: typeof DashboardHomeRoute
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardAccountRoute: DashboardAccountRoute,
  DashboardHomeRoute: DashboardHomeRoute,
}

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof DashboardRouteWithChildren
  '/login': typeof AuthLoginRoute
  '/register': typeof AuthRegisterRoute
  '/account': typeof DashboardAccountRoute
  '/home': typeof DashboardHomeRoute
}

export interface FileRoutesByTo {
  '': typeof DashboardRouteWithChildren
  '/login': typeof AuthLoginRoute
  '/register': typeof AuthRegisterRoute
  '/account': typeof DashboardAccountRoute
  '/home': typeof DashboardHomeRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_auth': typeof AuthRouteWithChildren
  '/_dashboard': typeof DashboardRouteWithChildren
  '/_auth/login': typeof AuthLoginRoute
  '/_auth/register': typeof AuthRegisterRoute
  '/_dashboard/account': typeof DashboardAccountRoute
  '/_dashboard/home': typeof DashboardHomeRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/login' | '/register' | '/account' | '/home'
  fileRoutesByTo: FileRoutesByTo
  to: '' | '/login' | '/register' | '/account' | '/home'
  id:
    | '__root__'
    | '/_auth'
    | '/_dashboard'
    | '/_auth/login'
    | '/_auth/register'
    | '/_dashboard/account'
    | '/_dashboard/home'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthRoute: typeof AuthRouteWithChildren
  DashboardRoute: typeof DashboardRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  AuthRoute: AuthRouteWithChildren,
  DashboardRoute: DashboardRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_auth",
        "/_dashboard"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/login",
        "/_auth/register"
      ]
    },
    "/_dashboard": {
      "filePath": "_dashboard.tsx",
      "children": [
        "/_dashboard/account",
        "/_dashboard/home"
      ]
    },
    "/_auth/login": {
      "filePath": "_auth/login.tsx",
      "parent": "/_auth"
    },
    "/_auth/register": {
      "filePath": "_auth/register.tsx",
      "parent": "/_auth"
    },
    "/_dashboard/account": {
      "filePath": "_dashboard/account.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/home": {
      "filePath": "_dashboard/home.tsx",
      "parent": "/_dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
