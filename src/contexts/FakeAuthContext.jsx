import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action type");
  }
}

const FAKE_USER = {
  id: "a8c9e6d7-1b2c-4d5e-9f8a-6b7c8d9e0f1a",
  name: "Vikram Pai V",
  email: "vikram@gmail.com",
  password: "vikru789@",
  avatar:
    "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Sunglasses&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Brown&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Twinkle&skinColor=Yellow",
};

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  function logout() {}

  //   function register(username,email,password){}

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext was used outside of AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
