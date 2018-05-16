import React from 'react';
import { connect } from 'react-redux';

import { injectGlobal } from 'styled-components';

export default function App({ children, user }) {
    
    return (
        <main role="main">
          {children}
        </main>
    );
}

injectGlobal`
body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    font-size: 14px;
}

a{
    transition: 125ms ease
}
`