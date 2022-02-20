import React, {useContext} from 'react';
import PreferencesContext from "../preferences/PreferencesContext.jsx";

const Heading = () => {

    const preferencesInfo = useContext(PreferencesContext);

    const focusQuestion = { __html: preferencesInfo.focusQuestion }

    return (
        <h1 dangerouslySetInnerHTML={focusQuestion}></h1>
    )
}

export default Heading