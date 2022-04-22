import {useMemo} from "react";

export const useUsers = (users, sort) => {
  const sortedUsers = useMemo(() => {
      if (sort === 'city') {
          return [...users].sort((a, b) => a.address?.[sort] > b.address?.[sort] ? 1 : -1);
      }
      if (sort === 'company') {
          return [...users].sort((a, b) => a[sort]?.name > b[sort]?.name ? 1 : -1);
      }
      return users;
  }, [sort, users])
    return sortedUsers;
}
