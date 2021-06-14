module.exports = ({ env }) => ({
  host: env("HOST", "localhost"),
  port: env.int("PORT", 4000),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "69b033582f10f2d0dafc8ed42a158566"),
    },
  },
});
