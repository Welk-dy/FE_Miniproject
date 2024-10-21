export const fetchUserData = async () => {
  const response = await fetch('https://randomuser.me/api/?page=1&results=3&seed=abc&nat=us&inc=name,picture');
  const data = await response.json();
  return data.results;
};