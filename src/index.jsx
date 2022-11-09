import ForgeUI, { render, ProjectPage, Fragment, Text } from '@forge/ui';

const App = () => {
    return (
        <Fragment>
            <Text>Hello world!</Text>
        </Fragment>
    );
};

export const run = render(
    <ProjectPage>
        <App />
    </ProjectPage>
);
