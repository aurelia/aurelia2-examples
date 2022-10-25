
export class MyApp {
  public message = 'Hello World!';
  static routes = [

      {
          path: [''],
          redirectTo: 'home',
      },
      {
          path: 'home',
          component: () => import('./components/fetch-data'),
          title: 'Home',
          id: 'home'
      },

  ];
}
