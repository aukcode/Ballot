enum TokenKeys {
  REFRESH_TOKEN = 'REFRESH_TOKEN',
}

export const storeRefreshToken = (refreshToken: string) => {
  localStorage.setItem(TokenKeys.REFRESH_TOKEN, refreshToken);
};

export const clearRefreshTokenFromLocalStorage = () => {
  localStorage.removeItem(TokenKeys.REFRESH_TOKEN);
};

export const getRefreshTokenFromLocalStorage = (): string | undefined => {
  const storedItem = localStorage.getItem(TokenKeys.REFRESH_TOKEN);
  if (storedItem != null) {
    return storedItem;
  } else {
    return undefined;
  }
};
