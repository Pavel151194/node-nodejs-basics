const parseEnv = () => {
  const parsedRssEnvs = Object.keys(process.env)
    .reduce(
      (stringifiedEnvs, envKey) =>
        envKey.startsWith("RSS_") ? [...stringifiedEnvs, `${envKey}=${process.env[envKey]}`] : stringifiedEnvs,
      []
    )
    .join("; ");

  console.log(parsedRssEnvs);
};

parseEnv();
