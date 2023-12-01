const { createContext, useContext } = require("react");

const AuthUserContext=createContext({
    authUser: null,
    isLoading: true,
})


// export default function useFirebaseAuth() {
//     const [authUser, setAuthUser] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     const clear = () => {
//         setAuthUser(null);
//         setIsLoading(false);
//     };

//     const authStateChanged = async (user) => {
//         setIsLoading(true);
//         if (!user) {
//             clear();
//             return;
//         }
//         setAuthUser({
//             uid: user.uid,
//             email: user.email,
//             username: user.displayName,
//         });
//         setIsLoading(false);
//     };

    
    

//     const signOut = () => {
//         authSignOut(auth).then(() => clear());
//     };

//     const getImageURL = (path) => {
//         return getDownloadURL(ref(myStorage, path))
//     }
//     useEffect(() => {

//         const unsubscribe = onAuthStateChanged(auth, authStateChanged);
//         return () => unsubscribe();
//     }, []);

//     return {
//         authUser,
//         isLoading,
//         signOut,
//         setAuthUser,
//         getImageURL
//     };
// }

export const AuthUserProvider = ({ children }) => {
    // const auth = useFirebaseAuth();
    return (
        <AuthUserContext.Provider value={'zain'}>
            {children}
        </AuthUserContext.Provider>
    );
};

export const useAuth = () => useContext(AuthUserContext);