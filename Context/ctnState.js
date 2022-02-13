import React from 'react'

const SubMenuContext = React.createContext({
    etat:false
})

export const SubMenuProvider = SubMenuContext.Provider
export const SubMenuConsumer = SubMenuContext.Consumer

export default SubMenuContext