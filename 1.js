let kata = false;
if (kata === 0 || kata === "" || kata === undefined || kata === null || kata === NaN) {
    console.log("Invalid data");
}
else if (typeof kata === "string") {
    console.log(`username ${kata}`);
} else if (typeof kata === "number") {
    console.log(`age ${kata}`);
} else if (typeof kata === "boolean") {
    if (kata) {
        console.log("thank you for agreeing");
    } else {
        console.log("cannot proceed without agreement");
    }
} 