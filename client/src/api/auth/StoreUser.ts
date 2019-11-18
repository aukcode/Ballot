enum UserKeys {
  USER_ID = 'USER_ID',
}

export const storeUserId = (userId: string) => {
  localStorage.setItem(UserKeys.USER_ID, userId);
};

export const clearUserIdFromLocalStorage = () => {
  localStorage.removeItem(UserKeys.USER_ID);
};

export const getUserIdFromLocalStorage = (): string | undefined => {
  const storedItem = localStorage.getItem(UserKeys.USER_ID);
  if (storedItem != null) {
    return storedItem;
  } else {
    return undefined;
  }
};
