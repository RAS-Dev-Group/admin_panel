import { createContext, useCookie, useEffect } from "react";

export const TokenContext = createContext(null); // token -> default empty (not logged in)
export const TokenDispatchContext = createContext(null);

const TokenContextProvider = ({ children }) => {
  const [token, dispatch] = useReducer((token, action) => {
    console.log('dispatch', action, token);
    switch (action.type) {
      case 'set': {
        return action.token
      }
      case 'clear': {
        return null
      }
      case 'refresh': {
        token = refresh(token)
          .then(res => {
            return res.data.access_token;
          })
          .catch(err => {
            token = null; // refresh failed
            throw Error('Refresh error: ', + err);
          });
        return token;
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  });
  
  // using cookie ?
  if (false) {
    const [cookie, setCookie, removeCookie] = useCookie('token');

    useEffect(() => {
      if (token) {
        setCookie(token, 'token', { path: '/' });
      }
      else {
        removeCookie('token');
      }
    }, [token]);
  }

  return (
    <TokenContext.Provider value={token}>
      <TokenDispatchContext.Provider value={dispatch}>
        {children}
      </TokenDispatchContext.Provider>
    </TokenContext.Provider>
  )
}


function useTokenContext() {
  const context = useContext(TokenContext)
  if (context === undefined) {
    throw new Error('useCookieConsentState must be used within CookieProvider')
  }
  return context
}

function useTokenDispatch() {
  const context = useContext(TokenDispatchContext)
  if (context === undefined) {
    throw new Error('useCookieConsentDispatch must be used within CookieProvider')
  }
  return context
}

export { TokenContextProvider, useTokenContext, useTokenDispatch }