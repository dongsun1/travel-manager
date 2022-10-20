interface User {
  Id: string;
}

export const user = () => ({
  Id: "",
});

export const getters = {
  getUserId: (user: User) => user.Id,
};

export const mutations = {
  userState: (user: User, userId: string) => {
    user.Id = userId;
  },
};
