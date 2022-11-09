import ForgeUI, {render, Fragment, Text, PortalHeader} from '@forge/ui';

const App = () => {
    return (
        <Fragment>
            <Text>Hello world!</Text>
        </Fragment>
    );
};

export const run = render(
    <PortalHeader>
        <App/>
    </PortalHeader>
);
