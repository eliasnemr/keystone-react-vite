export namespace Route {
  export interface LinkDescriptor {
    rel: string;
    href: string;
    crossOrigin?: string;
  }

  export type LinksFunction = () => LinkDescriptor[];
  
  export interface ErrorBoundaryProps {
    error: Error | null;
  }
} 