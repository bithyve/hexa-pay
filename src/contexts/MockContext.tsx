import React from 'react';

export const MockContext = React.createContext({
  securedWithKeeper: false,
  setSecured: (state: boolean) => {},
});

const MockProvider = ({children}: any) => {
  const [securedWithKeeper, setSecured] = React.useState(false);
  return (
    <MockContext.Provider
      value={{
        securedWithKeeper,
        setSecured,
      }}>
      {children}
    </MockContext.Provider>
  );
};

export default {MockProvider, MockContext};
