export default defineNuxtRouteMiddleware(async () => {
  await new Promise((resolve) => kakao.maps.load(resolve));
});
