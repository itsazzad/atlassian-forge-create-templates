import ForgeUI, { render, AdminPage, Fragment, Text } from '@forge/ui';

const App = () => {
    return (
        <Fragment>
            <Text>Hello world!</Text>
        </Fragment>
    );
};

export const run = render(
    <AdminPage>
        <App />
    </AdminPage>
);
