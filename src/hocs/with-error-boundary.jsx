import React, { Component } from 'react';

import { ErrorMessage } from '~components/shared/error-message';

export const withErrorBoundary = (Wrapped) => {
  return class ErrorBoundary extends Component {
    state = {
      hasError: false
    };

    static getDerivedStateFromError() {
      return { hasError: true };
    }

    render() {
      if (this.state.hasError) {
        return <ErrorMessage />;
      }

      return <Wrapped {...this.props} />;
    }
  };
};
