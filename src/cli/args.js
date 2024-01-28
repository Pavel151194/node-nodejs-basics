const parseArgs = () => {
  const parsedArgs = process.argv
    .reduce(
      (stringifiedArgs, arg, index, array) =>
        arg.startsWith("--") ? [...stringifiedArgs, `${arg.substring(2)} is ${array[index + 1]}`] : stringifiedArgs,
      []
    )
    .join(", ");

  console.log(parsedArgs);
};

parseArgs();
