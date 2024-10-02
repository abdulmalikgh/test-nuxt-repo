export const getInitials = (name) => {
  const nameParts = name.split(" "); 
  const firstInitial = nameParts[0] ? nameParts[0][0].toUpperCase() : "";
  const secondInitial = nameParts[1] ? nameParts[1][0].toUpperCase() : "";

  return firstInitial + secondInitial;
};
