import { BaseError } from '@/util';
import React from 'react';
import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
  FallBackProps,
  FallbackRender,
} from '.';

export const INITIAL_ERROR_BOUNDARY_STATE = {
  error: null,
};

export class ErrorBoundary extends React.Component<
  React.PropsWithRef<React.PropsWithChildren<ErrorBoundaryProps>>,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = INITIAL_ERROR_BOUNDARY_STATE;

  resetErrorBoundary = (...args: Array<unknown>) => {
    this.props.onReset?.(...args);
    this.reset();
  };

  static getDerivedStateFromError(error: BaseError) {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log('에러 캐칭');
    this.props.onError?.(error, info);
  }

  reset() {
    this.setState(INITIAL_ERROR_BOUNDARY_STATE);
  }

  componentDidUpdate(
    prevProps: Readonly<React.PropsWithChildren<ErrorBoundaryProps>>,
    prevState: Readonly<ErrorBoundaryState>,
    snapshot?: any
  ): void {
    const { error } = this.state;
    if (error !== null && prevState.error !== null) {
      this.reset();
    }
  }

  render() {
    const { error } = this.state;
    const { FallbackComponent, FallbackRenderer } = this.props;

    if (error !== null) {
      const fallbackProps = {
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      };

      if (typeof FallbackRenderer === 'function')
        return FallbackRenderer(fallbackProps);
      else if (FallbackComponent)
        return <FallbackComponent {...fallbackProps}></FallbackComponent>;
    }

    return this.props.children;
  }
}

export const createErrorBoundedComponent = <P extends JSX.IntrinsicElements>(
  Component: React.ComponentType<P>,
  fallbackProps: ErrorBoundaryProps
): React.ComponentType<P> => {
  const Wrapper: React.ComponentType<P> = (props) => {
    return (
      <ErrorBoundary {...fallbackProps}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };

  return Wrapper;
};
