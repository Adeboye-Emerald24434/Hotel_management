const userStorageKey = "hotelifyUser";

export function getHotelifyUser() {
  const storedUser = localStorage.getItem(userStorageKey);

  if (!storedUser) {
    return null;
  }

  try {
    const user = JSON.parse(storedUser);
    if (user?.role !== "super-admin" || typeof user.email !== "string") {
      return null;
    }

    return user;
  } catch (error) {
    if (error instanceof SyntaxError) {
      return null;
    }

    throw error;
  }
}

export function saveHotelifyUser(user) {
  localStorage.setItem(userStorageKey, JSON.stringify(user));
}

export function clearHotelifyUser() {
  localStorage.removeItem(userStorageKey);
}
