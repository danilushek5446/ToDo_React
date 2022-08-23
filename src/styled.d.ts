import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      highligth: string;
      active: string;
      complete: string;
      logo: string;
      delete: string;
      border: string;
      activeAll: string;
    };
  }
}