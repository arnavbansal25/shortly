import React from 'react';
import styled from 'styled-components';

const Load = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    width: 50px;
    height: 50px;
`

function Loader() {
    return (
        <Load>
            <img src="./assets/images/three-layer-loader.svg" />
        </Load>
    );
}

export default Loader;