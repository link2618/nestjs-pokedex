
export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'DEV',
    mongodb: process.env.MONGO_DB,
    port: process.env.PORT || 4000,
});
