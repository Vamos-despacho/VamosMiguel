"use client"

import { createContext, useState } from "react"



export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {


    const [category, setCategory] = useState([])
    const [tag, setTag] = useState([])
    const addCategory = (categoryP) => {
        setCategory([...category, ...categoryP])
    }
    const addTag = (tagP) => {
        setTag([...tag, ...tagP])
    }

    return (
        <AdminContext.Provider value={{

            addCategory,
            addTag,
            category,
            tag
        }}>
            {children}

        </AdminContext.Provider>
    )
}
