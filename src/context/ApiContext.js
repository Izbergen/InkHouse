import { createContext } from "react";

export const ApiContext = createContext(
    {
        getCatalog() {
            return []
        }
    }
);
