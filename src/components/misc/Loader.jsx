import React, { Fragment } from 'react';
import { Container, Spinner } from 'reactstrap';

export const Loader = props => {
    return props.loading ? (
        <Container
            fluid
            style={{
                background: 'rgba(0, 0, 0, 0.2)',
                zIndex: '10',
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                minHeight: '100vh',
                minWidth: '100vw',
            }}
        >
            <Spinner
                style={{
                    position: 'absolute',
                    right: '50vw',
                    top: '50vh',
                    zIndex: '10000',
                }}
            />
        </Container>
    ) : (
        <Fragment />
    );
};
