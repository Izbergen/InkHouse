// ApiContext.js
import { createContext } from "react";

// Assuming the catalog API is here

export const ApiContext = createContext(
    {
        getCatalog() {
            return []
        }
    }
);
