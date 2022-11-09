import ForgeUI, { render, Text, Fragment, IssueActivity } from '@forge/ui';

const App = () => {
    return (
        <Fragment>
            <Text>Hello world!</Text>
        </Fragment>
    );
};

export const run = render(
    <IssueActivity>
        <App/>
    </IssueActivity>
);