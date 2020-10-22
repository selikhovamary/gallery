const f = async () => {
    const result = await fetch("./API");
    const json = await result.json();
    console.log(json);
    };
f();

