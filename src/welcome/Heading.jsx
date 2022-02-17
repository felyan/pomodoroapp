import React, {useContext} from 'react';
import PreferencesContext from "../preferences/PreferencesContext.jsx";

const Heading = () => {

    const preferencesInfo = useContext(PreferencesContext);

    const focusQuestion = { __html: preferencesInfo.focusQuestion }

    return (
        <div dangerouslySetInnerHTML={focusQuestion}>
  
        </div>
    )
}

export default Heading