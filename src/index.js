exports.run = (event, context) => {
    console.log(event, context);

    return {
        hello: "world"
    };
};
