let hello = async () => {
    console.log("sayaliii");

    return "HELLO";
};

hello().then((data) => {
    console.log(data);
});